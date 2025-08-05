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
  Shield,
  Utensils,
  ChefHat,
  Coffee,
  CakeSlice
} from "lucide-react";

const Courses = () => {
  const courseModules = [
    {
      title: "Food Hygiene and Safety",
      icon: Shield,
      description: "Essential food safety practices, HACCP principles, and kitchen hygiene standards.",
      duration: "4 hours",
      resources: { videos: 8, documents: 12, quizzes: 3 }
    },
    {
      title: "Knife Skills & Techniques",
      icon: Utensils,
      description: "Master fundamental knife cuts, blade maintenance, and safe handling practices.",
      duration: "6 hours",
      resources: { videos: 15, documents: 8, quizzes: 2 }
    },
    {
      title: "Meat, Poultry & Fish",
      icon: ChefHat,
      description: "Proper handling, preparation techniques, and cooking methods for proteins.",
      duration: "8 hours",
      resources: { videos: 20, documents: 15, quizzes: 4 }
    },
    {
      title: "Stocks, Soups & Sauces",
      icon: Coffee,
      description: "Foundation techniques for creating flavorful bases and classical sauces.",
      duration: "6 hours",
      resources: { videos: 12, documents: 10, quizzes: 3 }
    },
    {
      title: "Baking & Pastry",
      icon: CakeSlice,
      description: "Fundamental baking techniques, bread making, and pastry preparation.",
      duration: "10 hours",
      resources: { videos: 25, documents: 18, quizzes: 5 }
    },
    {
      title: "Menu Planning & Cost Control",
      icon: BookOpen,
      description: "Menu development, pricing strategies, and kitchen cost management.",
      duration: "5 hours",
      resources: { videos: 10, documents: 20, quizzes: 4 }
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Video Demonstrations",
      description: "High-quality video tutorials with professional chefs demonstrating techniques."
    },
    {
      icon: FileText,
      title: "Comprehensive Materials",
      description: "Downloadable PDFs, recipe cards, and reference guides for offline study."
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description: "Monitor your learning progress and completion status for each module."
    },
    {
      icon: Award,
      title: "Professional Certification",
      description: "Earn your Level 2 NVQ equivalent certificate upon successful completion."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Recent Graduate",
      rating: 5,
      text: "The course structure was perfect for learning at my own pace. The video demonstrations were incredibly helpful!"
    },
    {
      name: "Mike Chen",
      role: "Kitchen Assistant",
      rating: 5,
      text: "This program gave me the confidence and skills I needed to advance in my culinary career."
    },
    {
      name: "Emma Davis",
      role: "Culinary Student",
      rating: 5,
      text: "Excellent content quality and very practical approach. Highly recommend for anyone starting in culinary arts."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-6 text-shadow">
            Level 2 Culinary Courses
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
            Master the fundamentals of professional cookery with our comprehensive 
            online training program based on Level 2 NVQ standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
            >
              Start Learning Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Sample Lesson
            </Button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>39 Hours Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive curriculum covering all essential culinary skills
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Self-Paced Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Study at your own pace with lifetime access to materials
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Professional Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn industry-recognized certification upon completion
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Course Modules */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Curriculum</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Course Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six comprehensive modules covering all aspects of professional cookery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{module.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{module.resources.videos}</div>
                      <div className="text-xs text-muted-foreground">Videos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{module.resources.documents}</div>
                      <div className="text-xs text-muted-foreground">Documents</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{module.resources.quizzes}</div>
                      <div className="text-xs text-muted-foreground">Quizzes</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Learning Features</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach combines theory with practical application 
              for effective learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-elegant">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Success Stories</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from graduates who have advanced their culinary careers with our program.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-elegant">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-shadow">
            Ready to Start Your Culinary Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of students who have launched successful culinary careers 
            with our professional training program.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
            >
              Enroll Now - $299
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Free Trial Lesson
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;