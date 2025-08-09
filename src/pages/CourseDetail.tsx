import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Video, 
  FileText, 
  CheckCircle, 
  Star,
  Play,
  Download,
  Shield,
  Utensils,
  ChefHat,
  Coffee,
  CakeSlice,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState("overview");

  // Course data - in real app this would come from API/database
  const courseData = {
    1: {
      id: 1,
      title: "Food Hygiene and Safety",
      icon: Shield,
      description: "Essential food safety practices, HACCP principles, and kitchen hygiene standards for professional kitchens.",
      duration: "4 hours",
      price: "TSh 85,000",
      category: "Safety",
      level: "Beginner",
      rating: 4.9,
      students: 1247,
      instructor: "Chef Sarah Mwangi",
      resources: { videos: 8, documents: 12, quizzes: 3 },
      learningOutcomes: [
        "Understand HACCP principles and implementation",
        "Master personal hygiene standards", 
        "Identify food safety hazards and controls",
        "Apply temperature control procedures"
      ],
      curriculum: [
        { title: "Introduction to Food Safety", duration: "25 min", type: "video", free: true },
        { title: "Personal Hygiene Standards", duration: "30 min", type: "video", free: false },
        { title: "HACCP Principles Overview", duration: "45 min", type: "video", free: false },
        { title: "Temperature Control Systems", duration: "35 min", type: "video", free: false },
        { title: "Cleaning and Sanitization", duration: "40 min", type: "video", free: false },
        { title: "Food Storage Guidelines", duration: "20 min", type: "video", free: false },
        { title: "Allergen Management", duration: "25 min", type: "video", free: false },
        { title: "Kitchen Safety Assessment", duration: "30 min", type: "quiz", free: false }
      ]
    }
    // Add other courses as needed
  };

  const course = courseData[parseInt(courseId || "1") as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Course Not Found</h1>
          <Button onClick={() => navigate("/courses")}>Back to Courses</Button>
        </div>
      </div>
    );
  }

  const handleEnrollment = () => {
    toast({
      title: "Enrollment Started",
      description: "Redirecting to payment page...",
    });
    // In real app, redirect to payment page
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in the "${course.title}" course. Can you provide more information about enrollment and payment options?`;
    const whatsappUrl = `https://wa.me/255655734453?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/courses")}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <course.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                  <h1 className="text-4xl font-display font-bold">{course.title}</h1>
                </div>
              </div>
              
              <p className="text-xl opacity-90 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span>{course.rating} rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>Certificate included</span>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-background text-foreground shadow-elegant">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{course.price}</div>
                    <div className="text-sm text-muted-foreground">One-time payment</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="lg" className="w-full" onClick={handleEnrollment}>
                    Enroll Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full"
                    onClick={handleWhatsAppInquiry}
                  >
                    WhatsApp Inquiry
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    30-day money-back guarantee
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-border mb-8">
              {[
                { id: "overview", label: "Overview" },
                { id: "curriculum", label: "Curriculum" },
                { id: "instructor", label: "Instructor" }
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
            {selectedTab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">What You'll Learn</h2>
                  <div className="grid gap-3">
                    {course.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Course Includes</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Video className="h-5 w-5 text-primary" />
                      <span>{course.resources.videos} video lessons</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <span>{course.resources.documents} downloadable resources</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{course.resources.quizzes} practice quizzes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "curriculum" && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.curriculum.map((lesson, index) => (
                    <Card key={index} className="shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {lesson.type === "video" ? (
                              <Play className="h-5 w-5 text-primary" />
                            ) : (
                              <FileText className="h-5 w-5 text-primary" />
                            )}
                            <div>
                              <h3 className="font-medium">{lesson.title}</h3>
                              <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {lesson.free && (
                              <Badge variant="outline" className="text-xs">FREE</Badge>
                            )}
                            {lesson.free && (
                              <Button size="sm" variant="ghost">
                                <Play className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === "instructor" && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Your Instructor</h2>
                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <ChefHat className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-2">{course.instructor}</h3>
                        <p className="text-muted-foreground mb-4">
                          Professional Chef with 15+ years experience in fine dining and culinary education. 
                          Former head chef at award-winning restaurants in Dar es Salaam and Zanzibar.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 fill-accent text-accent" />
                            <span>4.9 instructor rating</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>3,247 students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Completion</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Enroll to start tracking your progress
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Course Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level</span>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Students</span>
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Certificate</span>
                  <span>Yes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;