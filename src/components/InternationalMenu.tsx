import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Leaf } from "lucide-react";

const InternationalMenu = () => {
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
        price: "USD 18",
        dietary: ["vegetarian"],
        popular: true,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300"
      },
      {
        name: "Pan-Seared Scallops",
        description: "Fresh scallops with cauliflower purée and pancetta crisps",
        price: "USD 24",
        dietary: [],
        popular: false,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300"
      },
      {
        name: "Beetroot Carpaccio",
        description: "Thinly sliced beetroot with goat cheese, walnuts, and balsamic reduction",
        price: "USD 16",
        dietary: ["vegetarian", "gluten-free"],
        popular: false,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=300"
      },
      {
        name: "Smoked Salmon Canapés",
        description: "House-cured salmon on rye crisps with crème fraîche and dill",
        price: "USD 22",
        dietary: [],
        popular: true,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300"
      }
    ],
    mains: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu with roasted vegetables and red wine jus",
        price: "USD 65",
        dietary: [],
        popular: true,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300"
      },
      {
        name: "Herb-Crusted Lamb Rack",
        description: "New Zealand lamb with rosemary crust, ratatouille, and mint sauce",
        price: "USD 48",
        dietary: [],
        popular: true,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300"
      },
      {
        name: "Miso-Glazed Black Cod",
        description: "Fresh cod with miso glaze, Asian vegetables, and jasmine rice",
        price: "USD 42",
        dietary: [],
        popular: false,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=300"
      },
      {
        name: "Wild Mushroom Wellington",
        description: "Flaky pastry filled with seasonal mushrooms, spinach, and chestnuts",
        price: "USD 32",
        dietary: ["vegetarian"],
        popular: false,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300"
      }
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center, vanilla ice cream, and berry coulis",
        price: "USD 14",
        dietary: ["vegetarian"],
        popular: true,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300"
      },
      {
        name: "Lemon Tart",
        description: "Crisp pastry shell with silky lemon curd and meringue",
        price: "USD 12",
        dietary: ["vegetarian"],
        popular: false,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300"
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
        price: "USD 13",
        dietary: ["vegetarian"],
        popular: true,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300"
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Fresh seasonal fruits on pastry cream with glazed finish",
        price: "USD 11",
        dietary: ["vegetarian"],
        popular: false,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300"
      }
    ],
    drinks: [
      {
        name: "Signature Cocktail Collection",
        description: "Curated selection of craft cocktails featuring premium spirits",
        price: "USD 15-18",
        dietary: [],
        popular: true,
        image: "https://images.unsplash.com/photo-1574844113091-e9b6df7f9d99?w=300"
      },
      {
        name: "Wine Pairing Selection",
        description: "Carefully selected wines to complement your menu choices",
        price: "USD 12-25",
        dietary: [],
        popular: true,
        image: "https://images.unsplash.com/photo-1574844113091-e9b6df7f9d99?w=300"
      },
      {
        name: "Artisan Coffee Bar",
        description: "Freshly roasted coffee, espresso drinks, and premium teas",
        price: "USD 4-8",
        dietary: [],
        popular: false,
        image: "https://images.unsplash.com/photo-1574844113091-e9b6df7f9d99?w=300"
      },
      {
        name: "Fresh Juice & Smoothies",
        description: "Cold-pressed juices and smoothies made with organic fruits",
        price: "USD 6-10",
        dietary: ["vegan", "gluten-free"],
        popular: false,
        image: "https://images.unsplash.com/photo-1574844113091-e9b6df7f9d99?w=300"
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

  const handleOrderItem = (itemName: string) => {
    const whatsappNumber = "+255655734453";
    const message = `Hello! I'm interested in ordering ${itemName} from your international menu. Could you please provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Badge variant="outline" className="mb-4">🌍 International Cuisine</Badge>
        <h2 className="text-4xl font-display font-bold text-primary mb-6">
          Premium International Menu
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Savor world-class international dishes prepared by our expert chefs using 
          the finest ingredients and innovative culinary techniques.
        </p>
      </div>

      <Tabs defaultValue="appetizers" className="w-full">
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
            <div className="grid md:grid-cols-2 gap-8">
              {menuItems[category.id as keyof typeof menuItems].map((item, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    {item.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-accent-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-bold">
                        {item.price}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          {item.dietary.map((diet, idx) => (
                            <div key={idx} className="flex items-center">
                              {getDietaryIcon(diet)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <Button 
                      onClick={() => handleOrderItem(item.name)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Order via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default InternationalMenu;