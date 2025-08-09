import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, FileText, Award, Clock, CheckCircle, Trophy, Calendar } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const StudentPortal = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("dashboard");

  // Mock enrolled courses data - in real app this would come from database
  const enrolledCourses = [
    {
      id: 1,
      title: "Food Hygiene and Safety",
      progress: 75,
      totalLessons: 8,
      completedLessons: 6,
      lastAccessed: "2024-01-10",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Knife Skills & Techniques", 
      progress: 40,
      totalLessons: 15,
      completedLessons: 6,
      lastAccessed: "2024-01-08",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Meat, Poultry & Fish Preparation",
      progress: 100,
      totalLessons: 20,
      completedLessons: 20,
      lastAccessed: "2024-01-05",
      status: "Completed"
    }
  ];

  const achievements = [
    { title: "First Course Completed", date: "2024-01-05", icon: Trophy },
    { title: "Perfect Quiz Score", date: "2024-01-03", icon: Award },
    { title: "10 Hours of Study", date: "2023-12-28", icon: Clock }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Please Sign In</h1>
          <p className="text-muted-foreground mb-6">You need to be signed in to access the student portal.</p>
          <Button onClick={() => navigate("/auth")}>Go to Sign In</Button>
        </div>
      </div>
    );
  }

  const totalProgress = enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length;
  const totalHoursStudied = 47; // Mock data
  const totalCompletedCourses = enrolledCourses.filter(course => course.status === "Completed").length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-primary mb-2">
            Welcome back, {user.email?.split('@')[0]}!
          </h1>
          <p className="text-muted-foreground">Continue your culinary journey and track your progress.</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-8">
          {[
            { id: "dashboard", label: "Dashboard" },
            { id: "courses", label: "My Courses" },
            { id: "achievements", label: "Achievements" },
            { id: "certificates", label: "Certificates" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-3 font-medium transition-colors ${
                selectedTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedTab === "dashboard" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Overall Progress */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Overall Progress</span>
                        <span>{Math.round(totalProgress)}%</span>
                      </div>
                      <Progress value={totalProgress} className="h-3" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Keep up the great work! You're making excellent progress.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Courses */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Continue Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {enrolledCourses.filter(course => course.status === "In Progress").map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                        <div className="flex items-center space-x-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <p className="text-sm text-muted-foreground">
                                {course.completedLessons}/{course.totalLessons} lessons
                              </p>
                              <Progress value={course.progress} className="w-20 h-2" />
                              <span className="text-xs text-muted-foreground">{course.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm">Continue</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Your Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{totalCompletedCourses}</div>
                    <div className="text-sm text-muted-foreground">Courses Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{totalHoursStudied}</div>
                    <div className="text-sm text-muted-foreground">Hours Studied</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{achievements.length}</div>
                    <div className="text-sm text-muted-foreground">Achievements</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <achievement.icon className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {selectedTab === "courses" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="shadow-elegant">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      <span>Last: {course.lastAccessed}</span>
                    </div>
                    <Button size="sm" className="w-full" disabled={course.status === "Completed"}>
                      {course.status === "Completed" ? "Completed" : "Continue Learning"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {selectedTab === "achievements" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">Earned on {achievement.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {selectedTab === "certificates" && (
          <div className="text-center py-12">
            <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-4">Your Certificates</h2>
            <p className="text-muted-foreground mb-6">
              Complete courses to earn professional certificates that you can download and share.
            </p>
            {totalCompletedCourses > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {enrolledCourses.filter(course => course.status === "Completed").map((course) => (
                  <Card key={course.id} className="shadow-elegant">
                    <CardContent className="p-6 text-center">
                      <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">Certificate of Completion</p>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="max-w-md mx-auto shadow-elegant">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">
                    No certificates yet. Complete your first course to earn a certificate!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPortal;