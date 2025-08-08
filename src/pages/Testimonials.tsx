import TestimonialsSection from "@/components/TestimonialsSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Testimonials = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients about 
            their extraordinary experiences with Valtrix Chef Pro.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Return Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <TestimonialsSection />

      {/* Review Platform Badges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-display font-bold text-primary mb-8">
            Trusted Across Multiple Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Google Reviews</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">4.8/5</div>
              <div className="text-sm text-muted-foreground">Yelp</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">5.0/5</div>
              <div className="text-sm text-muted-foreground">WeddingWire</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">The Knot</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-shadow">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our family of satisfied clients and let us make your event 
            an unforgettable experience that your guests will rave about.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
            >
              Book Your Event Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;