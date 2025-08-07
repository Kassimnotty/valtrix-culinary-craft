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
        {/* Elegant overlay with burgundy gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-primary/20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-6 border-accent/80 text-accent bg-black/20 backdrop-blur-sm">
              Professional Catering & Culinary Education
            </Badge>
          </div>
          <div className="animate-fade-in-up">
            <h1 className="text-6xl lg:text-7xl font-display font-bold mb-6 text-shadow">
              Valtrix Chef Pro
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 text-shadow-light">
              Where culinary excellence meets professional education. We bring exceptional 
              catering to your events and train the next generation of culinary professionals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Link to="/catering">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold px-10 py-4 text-lg font-semibold"
              >
                Book Catering
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-black/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold"
              >
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary text-primary">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-6">
              Excellence in Every Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From memorable events to professional culinary training, 
              we deliver exceptional experiences that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105 overflow-hidden bg-card/90 backdrop-blur-sm border-border/50">
              <div className="relative h-56">
                <img 
                  src={cateringImage} 
                  alt="Premium catering service" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <CardHeader>
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-4 shadow-gold">
                  <ChefHat className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-display">Premium Catering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional catering services for weddings, corporate events, and private celebrations. 
                  Our expert chefs create memorable culinary experiences tailored to your vision.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>Custom menu design</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>Professional service staff</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>Full event coordination</span>
                  </li>
                </ul>
                <Link to="/catering">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-105 overflow-hidden bg-card/90 backdrop-blur-sm border-border/50">
              <div className="relative h-56">
                <img 
                  src={educationImage} 
                  alt="Culinary education and training" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <CardHeader>
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mb-4 shadow-gold">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-display">Culinary Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive Level 2 NVQ culinary training program with hands-on learning, 
                  professional certification, and career support for aspiring chefs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>Industry-standard curriculum</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>Expert instructor guidance</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>Professional certification</span>
                  </li>
                </ul>
                <Link to="/courses">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant w-full">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
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
