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
      id: 1,
      title: "Food Hygiene and Safety",
      icon: Shield,
      description: "Essential food safety practices, HACCP principles, and kitchen hygiene standards for professional kitchens.",
      duration: "4 hours",
      price: "TSh 85,000",
      category: "Safety",
      level: "Beginner",
      resources: { videos: 8, documents: 12, quizzes: 3 },
      learningOutcomes: [
        "Understand HACCP principles and implementation",
        "Master personal hygiene standards",
        "Identify food safety hazards and controls",
        "Apply temperature control procedures"
      ]
    },
    {
      id: 2,
      title: "Knife Skills & Techniques",
      icon: Utensils,
      description: "Master fundamental knife cuts, blade maintenance, and safe handling practices essential for every chef.",
      duration: "6 hours",
      price: "TSh 95,000",
      category: "Technique",
      level: "Beginner",
      resources: { videos: 15, documents: 8, quizzes: 2 },
      learningOutcomes: [
        "Execute basic knife cuts with precision",
        "Maintain and sharpen kitchen knives",
        "Practice safe knife handling techniques",
        "Understand different knife types and uses"
      ]
    },
    {
      id: 3,
      title: "Meat, Poultry & Fish Preparation",
      icon: ChefHat,
      description: "Comprehensive protein handling, preparation techniques, and cooking methods for optimal results.",
      duration: "8 hours",
      price: "TSh 125,000",
      category: "Protein",
      level: "Intermediate",
      resources: { videos: 20, documents: 15, quizzes: 4 },
      learningOutcomes: [
        "Identify quality indicators in proteins",
        "Master butchery and filleting techniques",
        "Apply proper cooking methods for each protein",
        "Understand storage and handling requirements"
      ]
    },
    {
      id: 4,
      title: "Stocks, Soups & Sauces",
      icon: Coffee,
      description: "Foundation techniques for creating flavorful bases and classical sauce preparations.",
      duration: "6 hours",
      price: "TSh 105,000",
      category: "Foundations",
      level: "Intermediate",
      resources: { videos: 12, documents: 10, quizzes: 3 },
      learningOutcomes: [
        "Prepare classical stocks and broths",
        "Create mother sauces and derivatives",
        "Balance flavors and seasonings",
        "Understand emulsification techniques"
      ]
    },
    {
      id: 5,
      title: "Vegetable Cookery & Preparation",
      icon: Utensils,
      description: "Professional vegetable preparation, cooking methods, and presentation techniques.",
      duration: "5 hours",
      price: "TSh 90,000",
      category: "Vegetables",
      level: "Beginner",
      resources: { videos: 14, documents: 9, quizzes: 3 },
      learningOutcomes: [
        "Master vegetable cutting techniques",
        "Apply various cooking methods to vegetables",
        "Preserve nutrients and colors",
        "Create attractive vegetable presentations"
      ]
    },
    {
      id: 6,
      title: "Baking & Pastry Fundamentals",
      icon: CakeSlice,
      description: "Essential baking techniques, bread making, and pastry preparation for professional kitchens.",
      duration: "10 hours",
      price: "TSh 155,000",
      category: "Baking",
      level: "Intermediate",
      resources: { videos: 25, documents: 18, quizzes: 5 },
      learningOutcomes: [
        "Understand baking science and ratios",
        "Prepare basic breads and pastries",
        "Master mixing methods and techniques",
        "Create professional dessert presentations"
      ]
    },
    {
      id: 7,
      title: "Cold Food Preparation",
      icon: Coffee,
      description: "Salads, appetizers, and cold preparation techniques for professional service.",
      duration: "4 hours",
      price: "TSh 80,000",
      category: "Cold Kitchen",
      level: "Beginner",
      resources: { videos: 11, documents: 8, quizzes: 2 },
      learningOutcomes: [
        "Prepare professional salads and dressings",
        "Create attractive cold appetizers",
        "Master garnishing techniques",
        "Understand cold food safety principles"
      ]
    },
    {
      id: 8,
      title: "Menu Planning & Cost Control",
      icon: BookOpen,
      description: "Strategic menu development, pricing strategies, and comprehensive kitchen cost management.",
      duration: "5 hours",
      price: "TSh 110,000",
      category: "Management",
      level: "Advanced",
      resources: { videos: 10, documents: 20, quizzes: 4 },
      learningOutcomes: [
        "Design profitable menu structures",
        "Calculate food costs and pricing",
        "Manage inventory and waste",
        "Analyze menu performance metrics"
      ]
    },
    {
      id: 9,
      title: "Professional Kitchen Operations",
      icon: ChefHat,
      description: "Kitchen workflow, team management, and professional service standards for commercial kitchens.",
      duration: "7 hours",
      price: "TSh 135,000",
      category: "Operations",
      level: "Advanced",
      resources: { videos: 18, documents: 15, quizzes: 4 },
      learningOutcomes: [
        "Organize efficient kitchen workflows",
        "Manage kitchen teams effectively",
        "Implement quality control systems",
        "Meet professional service standards"
      ]
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
              9 Professional Culinary Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum covering all essential aspects of professional cookery and kitchen management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module) => (
              <Card key={module.id} className="hover:shadow-elegant transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <module.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">{module.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{module.duration}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{module.level}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">{module.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-3 gap-3 text-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-primary">{module.resources.videos}</div>
                      <div className="text-xs text-muted-foreground">Videos</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{module.resources.documents}</div>
                      <div className="text-xs text-muted-foreground">Docs</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{module.resources.quizzes}</div>
                      <div className="text-xs text-muted-foreground">Quizzes</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{module.price}</span>
                    <Button 
                        size="sm" 
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => window.location.href = `/courses/${module.id}`}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Badge variant="outline" className="mb-4">Full Program Package</Badge>
            <Card className="max-w-md mx-auto shadow-elegant border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Culinary Program</CardTitle>
                <p className="text-muted-foreground">All 9 modules + certification</p>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-sm text-muted-foreground line-through">TSh 1,005,000</div>
                  <div className="text-3xl font-bold text-primary">TSh 750,000</div>
                  <div className="text-sm text-accent">Save TSh 255,000!</div>
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold">
                  Enroll in Full Program
                </Button>
              </CardContent>
            </Card>
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
              Enroll Now - TSh 750,000
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