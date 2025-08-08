import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternationalMenu from "@/components/InternationalMenu";
import TanzanianMenuPackages from "@/components/TanzanianMenuPackages";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("tanzanian");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">
            Our Culinary Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted menu featuring seasonal ingredients, 
            innovative techniques, and timeless flavors that will delight your guests.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger 
                value="tanzanian"
                className="flex items-center space-x-2"
              >
                <span>🇹🇿</span>
                <span>Tanzanian Packages</span>
              </TabsTrigger>
              <TabsTrigger 
                value="international"
                className="flex items-center space-x-2"
              >
                <span>🌍</span>
                <span>International Menu</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tanzanian">
              <TanzanianMenuPackages />
            </TabsContent>

            <TabsContent value="international">
              <InternationalMenu />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Custom Menu CTA */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6 text-shadow">
            Need a Custom Menu?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our chefs can create personalized menus tailored to your event, 
            dietary requirements, and culinary preferences.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
            >
              Request Custom Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Download Full Menu
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Menu;