import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Users, Award, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-catering.jpg";
import cateringImage from "@/assets/premium-catering.jpg";
import educationImage from "@/assets/culinary-education.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-32 text-white relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="outline" className="mb-6 border-white text-white">
            Professional Catering & Culinary Education
          </Badge>
          <h1 className="text-6xl font-display font-bold mb-6 text-shadow">
            Valtrix Chef Pro
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
            Where culinary excellence meets professional education. We bring exceptional 
            catering to your events and train the next generation of culinary professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catering">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
              >
                Book Catering
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Excellence in Every Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From memorable events to professional culinary training, 
              we deliver exceptional experiences that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-elegant hover:shadow-gold transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={cateringImage} 
                  alt="Premium catering service" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ChefHat className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Premium Catering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Professional catering services for weddings, corporate events, and private celebrations. 
                  Our expert chefs create memorable culinary experiences tailored to your vision.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Custom menu design
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Professional service staff
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Full event coordination
                  </li>
                </ul>
                <Link to="/catering">
                  <Button className="gradient-primary text-primary-foreground">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-gold transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={educationImage} 
                  alt="Culinary education and training" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Culinary Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Comprehensive Level 2 NVQ culinary training program with hands-on learning, 
                  professional certification, and career support for aspiring chefs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Industry-standard curriculum
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Expert instructor guidance
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-accent mr-2" />
                    Professional certification
                  </li>
                </ul>
                <Link to="/courses">
                  <Button className="gradient-primary text-primary-foreground">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
