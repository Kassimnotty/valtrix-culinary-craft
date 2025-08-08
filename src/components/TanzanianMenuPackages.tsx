import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star } from "lucide-react";

const TanzanianMenuPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Kilimanjaro Premium",
      price: "TSh 25,000",
      minPeople: 50,
      popular: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
      starters: ["Samosas za nyama", "Vitumbua vya nazi", "Mandazi"],
      mains: ["Pilau", "Nyama choma", "Samaki wa nazi"],
      accompaniments: ["Wali wa nazi", "Ugali"],
      vegetables: ["Mchicha wa nazi", "Karanga"],
      salads: ["Saladi ya matunda", "Kachumbari"],
      fruits: ["Nanasi", "Parachichi", "Embe"],
      dessert: ["Halua ya nazi", "Kek ya chocolate"],
      drinks: ["Chai masala", "Juice ya matunda", "Maji"]
    },
    {
      id: 2,
      name: "Serengeti Traditional",
      price: "TSh 18,000",
      minPeople: 30,
      popular: false,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
      starters: ["Vitumbua", "Kashata", "Sambusa za mboga"],
      mains: ["Mchuzi wa kuku", "Samaki wa kaanga", "Nyama ya mbuzi"],
      accompaniments: ["Wali wa kawaida", "Chapati"],
      vegetables: ["Kisamvu", "Kunde"],
      salads: ["Saladi ya mboga mboga"],
      fruits: ["Ndizi", "Chungwa", "Tikiti maji"],
      dessert: ["Vitumbua vya asali"],
      drinks: ["Chai ya tangawizi", "Uji wa ufuta", "Maji"]
    },
    {
      id: 3,
      name: "Zanzibar Spice",
      price: "TSh 22,000",
      minPeople: 40,
      popular: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
      starters: ["Urojo", "Sambusa za samaki", "Mkate wa kumimina"],
      mains: ["Biryani ya kuku", "Samaki wa kupaka", "Mchuzi wa pweza"],
      accompaniments: ["Wali wa nazi", "Naan"],
      vegetables: ["Mchicha wa kupaka", "Bamia"],
      salads: ["Kachumbari ya Zanzibar"],
      fruits: ["Fenesi", "Korosho", "Nazi"],
      dessert: ["Halua ya ufuta", "Kashata ya nazi"],
      drinks: ["Kahawa ya Kiswahili", "Juice ya fenesi", "Maji ya dafu"]
    },
    {
      id: 4,
      name: "Arusha Garden",
      price: "TSh 15,000",
      minPeople: 25,
      popular: false,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
      starters: ["Mayai ya kaanga", "Vitumbua vya muhogo"],
      mains: ["Kuku wa kupaka", "Samaki wa mchuzi", "Nyama ya ng'ombe"],
      accompaniments: ["Wali", "Ugali wa mahindi"],
      vegetables: ["Sukuma wiki", "Karanga wa nazi"],
      salads: ["Saladi ya mazao"],
      fruits: ["Papai", "Maembe", "Machungwa"],
      dessert: ["Kek ya karanga"],
      drinks: ["Chai ya kawaida", "Juice ya machungwa", "Maji"]
    },
    {
      id: 5,
      name: "Mwanza Deluxe",
      price: "TSh 30,000",
      minPeople: 60,
      popular: true,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
      starters: ["Samosas za kuku", "Mandazi ya nazi", "Vitumbua vya asali"],
      mains: ["Pilau ya kondoo", "Samaki wa Victoria", "Nyama choma ya ng'ombe"],
      accompaniments: ["Wali wa rangi", "Chapati za mafuta"],
      vegetables: ["Mchicha wa ufuta", "Njegere"],
      salads: ["Kachumbari special", "Saladi ya matunda mchanganyiko"],
      fruits: ["Embe ya Mwanza", "Fenesi", "Ndizi"],
      dessert: ["Halua ya mahindi", "Kek ya nazi"],
      drinks: ["Chai masala special", "Juice mchanganyiko", "Maji baridi"]
    }
  ];

  const handleOrderPackage = (packageName: string) => {
    const whatsappNumber = "+255655734453";
    const message = `Hello! I'm interested in ordering the ${packageName} package. Could you please provide more details and availability?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Badge variant="outline" className="mb-4">🇹🇿 Tanzanian Specialties</Badge>
        <h2 className="text-4xl font-display font-bold text-primary mb-6">
          Authentic Tanzanian Event Packages
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience the rich flavors of Tanzania with our carefully curated traditional packages, 
          perfect for celebrating life's special moments with authentic local cuisine.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="hover:shadow-elegant transition-shadow relative">
            {pkg.popular && (
              <div className="absolute -top-3 left-4 z-10">
                <Badge className="bg-accent text-accent-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              </div>
            )}
            
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-display font-bold">{pkg.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Min. {pkg.minPeople} people</span>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground text-lg font-bold">
                  {pkg.price}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Starters</h4>
                  <p className="text-sm text-muted-foreground">{pkg.starters.join(", ")}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Main Dishes</h4>
                  <p className="text-sm text-muted-foreground">{pkg.mains.join(", ")}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Accompaniments</h4>
                  <p className="text-sm text-muted-foreground">{pkg.accompaniments.join(", ")}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Vegetables</h4>
                  <p className="text-sm text-muted-foreground">{pkg.vegetables.join(", ")}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Salads & Fruits</h4>
                  <p className="text-sm text-muted-foreground">
                    {[...pkg.salads, ...pkg.fruits].join(", ")}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-2">Dessert & Drinks</h4>
                  <p className="text-sm text-muted-foreground">
                    {[...pkg.dessert, ...pkg.drinks].join(", ")}
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={() => handleOrderPackage(pkg.name)}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
              >
                Order Package via WhatsApp
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TanzanianMenuPackages;