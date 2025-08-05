import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Leaf, Flame } from "lucide-react";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("appetizers");

  const menuCategories = [
    { id: "appetizers", label: "Appetizers", icon: "🥗" },
    { id: "mains", label: "Main Courses", icon: "🍽️" },
    { id: "desserts", label: "Desserts", icon: "🍰" },
    { id: "drinks", label: "Beverages", icon: "🥂" },
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with truffle and parmesan, served with garlic aioli",
        price: "$18",
        dietary: ["vegetarian"],
        popular: true
      },
      {
        name: "Pan-Seared Scallops",
        description: "Fresh scallops with cauliflower purée and pancetta crisps",
        price: "$24",
        dietary: [],
        popular: false
      },
      {
        name: "Beetroot Carpaccio",
        description: "Thinly sliced beetroot with goat cheese, walnuts, and balsamic reduction",
        price: "$16",
        dietary: ["vegetarian", "gluten-free"],
        popular: false
      },
      {
        name: "Smoked Salmon Canapés",
        description: "House-cured salmon on rye crisps with crème fraîche and dill",
        price: "$22",
        dietary: [],
        popular: true
      }
    ],
    mains: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu with roasted vegetables and red wine jus",
        price: "$65",
        dietary: [],
        popular: true
      },
      {
        name: "Herb-Crusted Lamb Rack",
        description: "New Zealand lamb with rosemary crust, ratatouille, and mint sauce",
        price: "$48",
        dietary: [],
        popular: true
      },
      {
        name: "Miso-Glazed Black Cod",
        description: "Fresh cod with miso glaze, Asian vegetables, and jasmine rice",
        price: "$42",
        dietary: [],
        popular: false
      },
      {
        name: "Wild Mushroom Wellington",
        description: "Flaky pastry filled with seasonal mushrooms, spinach, and chestnuts",
        price: "$32",
        dietary: ["vegetarian"],
        popular: false
      }
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, vanilla ice cream, and berry coulis",
        price: "$14",
        dietary: ["vegetarian"],
        popular: true
      },
      {
        name: "Lemon Tart",
        description: "Crisp pastry shell with silky lemon curd and meringue",
        price: "$12",
        dietary: ["vegetarian"],
        popular: false
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: "$13",
        dietary: ["vegetarian"],
        popular: true
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Fresh seasonal fruits on pastry cream with glazed finish",
        price: "$11",
        dietary: ["vegetarian"],
        popular: false
      }
    ],
    drinks: [
      {
        name: "Signature Cocktail Collection",
        description: "Curated selection of craft cocktails featuring premium spirits",
        price: "$15-18",
        dietary: [],
        popular: true
      },
      {
        name: "Wine Pairing Selection",
        description: "Carefully selected wines to complement your menu choices",
        price: "$12-25",
        dietary: [],
        popular: true
      },
      {
        name: "Artisan Coffee Bar",
        description: "Freshly roasted coffee, espresso drinks, and premium teas",
        price: "$4-8",
        dietary: [],
        popular: false
      },
      {
        name: "Fresh Juice & Smoothies",
        description: "Cold-pressed juices and smoothies made with organic fruits",
        price: "$6-10",
        dietary: ["vegan", "gluten-free"],
        popular: false
      }
    ]
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case "vegetarian":
        return <Leaf className="h-4 w-4 text-green-600" />;
      case "vegan":
        return <Leaf className="h-4 w-4 text-green-700" />;
      case "gluten-free":
        return <span className="text-xs font-semibold text-blue-600">GF</span>;
      default:
        return null;
    }
  };

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
            <TabsList className="grid w-full grid-cols-4 mb-12">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2"
                >
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-display font-bold text-primary mb-4">
                    {category.label}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Expertly prepared dishes using the finest ingredients
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {menuItems[category.id as keyof typeof menuItems].map((item, index) => (
                    <Card key={index} className="hover:shadow-elegant transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <CardTitle className="text-xl">{item.name}</CardTitle>
                              {item.popular && (
                                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 mb-2">
                              {item.dietary.map((diet, idx) => (
                                <div key={idx} className="flex items-center">
                                  {getDietaryIcon(diet)}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="text-2xl font-display font-bold text-accent">
                            {item.price}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
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

      {/* Dietary Information */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Dietary Accommodations
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to accommodating all dietary needs and preferences. 
              Please inform us of any allergies or special requirements.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Vegetarian Options</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-green-700" />
              <span className="text-sm font-medium">Vegan Friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-blue-600">GF</span>
              <span className="text-sm font-medium">Gluten-Free Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flame className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">Allergy Conscious</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;