import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Globe, Package, Shield } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Home = () => {
  const features = [
    { icon: Leaf, text: "100% Organic & Sun-Dried" },
    { icon: CheckCircle, text: "Rich in NPK Nutrients" },
    { icon: Package, text: "Export-Grade Packaging" },
    { icon: Shield, text: "Chemical-Free" },
  ];

  const benefits = [
    {
      title: "Sustainable Production",
      description: "Eco-friendly processing methods that preserve natural nutrients",
    },
    {
      title: "Chemical-Free",
      description: "Pure organic manure without any synthetic additives",
    },
    {
      title: "Export Documentation",
      description: "Complete support for international shipping and certification",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Pure Organic Cow Dung Powder
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              From Indian Farms to Global Fields
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              DungBloom delivers 100% natural, sun-dried cow dung powder that enriches your soil and boosts plant growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/product">View Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">{feature.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose DungBloom?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium organic manure from Tamil Nadu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Globe className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Export Worldwide
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Serving UAE, USA, UK, Singapore, Sri Lanka, and beyond with premium organic cow dung powder
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/export">Explore Export Options</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
