import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Client",
      event: "Garden Wedding - 120 Guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      testimonial: "Valtrix Chef Pro made our wedding absolutely perfect! The Kilimanjaro Premium package exceeded all our expectations. Every dish was beautifully presented and delicious. Our guests are still talking about the amazing food!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Corporate Client",
      event: "Annual Conference - 200 Attendees",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      testimonial: "Professional, reliable, and exceptional quality. They catered our corporate event flawlessly. The international menu was a hit with our diverse team. Highly recommend for any business event."
    },
    {
      id: 3,
      name: "Fatima Mwanga",
      role: "Birthday Celebration",
      event: "50th Birthday Party - 80 Guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      testimonial: "The Zanzibar Spice package was absolutely authentic and delicious! Every traditional dish was prepared to perfection. The team was so professional and made my celebration truly memorable."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Private Event",
      event: "Anniversary Dinner - 25 Guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      testimonial: "Exceptional service and incredible food! The attention to detail was outstanding. They accommodated all our dietary requirements perfectly. Worth every penny for such a special occasion."
    },
    {
      id: 5,
      name: "Amina Hassan",
      role: "Cultural Event",
      event: "Traditional Ceremony - 150 Guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100",
      testimonial: "They truly understand Tanzanian cuisine! The Serengeti Traditional package was authentic and brought back wonderful memories. Perfect for our cultural celebration."
    },
    {
      id: 6,
      name: "Robert Williams",
      role: "Business Lunch",
      event: "Executive Meeting - 15 Guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      testimonial: "Professional catering at its finest. The international menu selection was perfect for our international clients. Seamless service that impressed everyone."
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Stories</Badge>
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with Valtrix Chef Pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.event}
                  </Badge>
                </div>
                
                <div className="relative">
                  <Quote className="h-6 w-6 text-accent/30 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic leading-relaxed pl-4">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Guests Served</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;