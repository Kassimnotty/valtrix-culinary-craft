import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, MapPin, Heart, Building, PartyPopper, Wine } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Catering = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    venue: "",
    menuPreference: "",
    specialRequests: "",
  });

  const serviceTypes = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite wedding menus.",
      features: ["Custom menu design", "Professional service staff", "Elegant presentation", "Dietary accommodations"]
    },
    {
      icon: Building,
      title: "Corporate Events",
      description: "Professional catering for business meetings, conferences, and corporate gatherings.",
      features: ["Executive lunch menus", "Coffee service", "Flexible timing", "Professional setup"]
    },
    {
      icon: PartyPopper,
      title: "Private Parties",
      description: "Celebrate life's moments with personalized catering for your private events.",
      features: ["Birthday celebrations", "Anniversary dinners", "Family gatherings", "Custom themes"]
    },
    {
      icon: Wine,
      title: "Wine Tastings",
      description: "Curated food and wine experiences with expert sommelier guidance.",
      features: ["Wine pairings", "Educational tastings", "Cheese selections", "Gourmet appetizers"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your event details.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      guestCount: "",
      venue: "",
      menuPreference: "",
      specialRequests: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-6 text-shadow">
            Professional Catering Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
            From intimate gatherings to grand celebrations, we bring culinary excellence 
            to your special events with personalized service and exceptional cuisine.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
          >
            Book Your Event
          </Button>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Catering for Every Occasion
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whatever your event, we have the expertise and passion to make it extraordinary.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Book Now</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Request a Quote
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll create a custom proposal for your event.
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventDate">Event Date *</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="eventType">Event Type</Label>
                      <Select onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="private-party">Private Party</SelectItem>
                          <SelectItem value="wine-tasting">Wine Tasting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="guestCount">Number of Guests *</Label>
                      <Input
                        id="guestCount"
                        type="number"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange("guestCount", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="venue">Venue Location</Label>
                    <Input
                      id="venue"
                      value={formData.venue}
                      onChange={(e) => handleInputChange("venue", e.target.value)}
                      placeholder="Event venue or address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="menuPreference">Menu Preference</Label>
                    <Select onValueChange={(value) => handleInputChange("menuPreference", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select menu style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plated-dinner">Plated Dinner</SelectItem>
                        <SelectItem value="buffet">Buffet Style</SelectItem>
                        <SelectItem value="cocktail-reception">Cocktail Reception</SelectItem>
                        <SelectItem value="family-style">Family Style</SelectItem>
                        <SelectItem value="custom">Custom Menu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests or Dietary Requirements</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Please include any special requests, dietary restrictions, or additional details..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-primary-foreground"
                  >
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;