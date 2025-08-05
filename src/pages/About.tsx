import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Award, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: ChefHat, label: "Expert Chefs", value: "15+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Clock, label: "Years Experience", value: "10+" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every dish and service we provide."
    },
    {
      title: "Innovation",
      description: "Constantly evolving our techniques and menu offerings."
    },
    {
      title: "Education",
      description: "Committed to training the next generation of culinary professionals."
    },
    {
      title: "Quality",
      description: "Using only the finest ingredients and maintaining highest standards."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">
            About Valtrix Chef Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where culinary excellence meets professional education. We're passionate about creating 
            extraordinary dining experiences and nurturing the next generation of culinary talent.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                A Journey of Culinary Passion
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2014, Valtrix Chef Pro began as a small catering company with a big dream: 
                to bring restaurant-quality cuisine to every event while fostering culinary education.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we've grown into a comprehensive platform that not only provides exceptional 
                catering services but also offers professional culinary training based on Level 2 NVQ 
                standards, helping aspiring chefs build their careers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence, innovation, and education has made us a trusted partner 
                for events and a respected institution for culinary learning.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-2xl shadow-elegant"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from crafting exceptional dishes to 
              training future culinary professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4">Our Team</Badge>
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            Meet Our Culinary Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Our team of passionate chefs and educators brings decades of experience 
            from world-class kitchens and culinary institutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary to-accent rounded-full mb-4 mx-auto w-32"></div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-2">
                    Chef Professional {i}
                  </h3>
                  <p className="text-muted-foreground mb-2">Executive Chef & Instructor</p>
                  <p className="text-sm text-muted-foreground">
                    Expert in modern cuisine with 15+ years of experience in fine dining.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;