import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Heart, Building, PartyPopper } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily & James Richardson",
      event: "Wedding Reception",
      category: "wedding",
      rating: 5,
      date: "October 2023",
      text: "Valtrix Chef Pro exceeded all our expectations for our wedding. The food was absolutely incredible - our guests are still raving about the truffle arancini and wagyu beef. The service was flawless, and the presentation was stunning. They made our special day perfect!",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "Tech Solutions Inc.",
      event: "Annual Conference",
      category: "corporate",
      rating: 5,
      date: "September 2023",
      text: "We've worked with Valtrix Chef Pro for three consecutive years for our annual conference. Their professionalism and attention to detail is unmatched. They handle everything from dietary restrictions to last-minute changes with ease. Highly recommended for corporate events.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "Sarah Martinez",
      event: "50th Birthday Party",
      category: "private",
      rating: 5,
      date: "August 2023",
      text: "What an amazing experience! The team created a custom menu that perfectly reflected my personality and taste. Every dish was a work of art, and the service was impeccable. My guests couldn't stop complimenting the food. Worth every penny!",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 4,
      name: "Michael Thompson",
      event: "Wine Tasting Event",
      category: "tasting",
      rating: 5,
      date: "July 2023",
      text: "The sommelier expertise combined with the culinary artistry made for an unforgettable evening. Each course was perfectly paired with wines, and the educational component was fantastic. Our wine club has already booked another event!",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      name: "Lisa & David Chen",
      event: "Anniversary Celebration",
      category: "private",
      rating: 5,
      date: "June 2023",
      text: "For our 25th anniversary, we wanted something special. The private chef experience was incredible - watching the preparation, learning about the techniques, and of course, the amazing food. It was intimate, educational, and absolutely delicious.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    },
    {
      id: 6,
      name: "Global Marketing Agency",
      event: "Client Appreciation Dinner",
      category: "corporate",
      rating: 5,
      date: "May 2023",
      text: "Valtrix Chef Pro helped us impress our most important clients with an extraordinary dining experience. The attention to detail, from the custom menu design to the elegant presentation, showed our clients how much we value them. Outstanding service!",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 7,
      name: "Jennifer Williams",
      event: "Graduation Party",
      category: "private",
      rating: 5,
      date: "May 2023",
      text: "My daughter's graduation party was made extra special by Valtrix Chef Pro. They accommodated all our dietary needs and created a beautiful buffet that looked as good as it tasted. The staff was friendly and professional throughout the event.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 8,
      name: "Robert & Amanda Foster",
      event: "Garden Party Wedding",
      category: "wedding",
      rating: 5,
      date: "April 2023",
      text: "Our garden wedding was a dream come true thanks to Valtrix Chef Pro. They worked seamlessly with our outdoor venue, the food was fresh and flavorful, and they handled the logistics perfectly. Our wedding photos with their beautiful presentation are priceless!",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "wedding":
        return <Heart className="h-5 w-5 text-pink-500" />;
      case "corporate":
        return <Building className="h-5 w-5 text-blue-500" />;
      case "private":
        return <PartyPopper className="h-5 w-5 text-purple-500" />;
      default:
        return <Star className="h-5 w-5 text-accent" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "wedding":
        return "Wedding";
      case "corporate":
        return "Corporate";
      case "private":
        return "Private Event";
      case "tasting":
        return "Wine Tasting";
      default:
        return "Event";
    }
  };

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

      {/* Testimonials Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Client Reviews</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real clients who trusted us with their most important events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-elegant transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(testimonial.category)}
                      <Badge variant="outline" className="capitalize">
                        {getCategoryLabel(testimonial.category)}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic leading-relaxed pl-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <h4 className="font-display font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.event} • {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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