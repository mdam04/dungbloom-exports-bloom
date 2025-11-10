import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Sprout } from "lucide-react";
import dryingImage from "@/assets/drying-process.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DungBloom</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming traditional wisdom into modern organic solutions
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                DungBloom is a Tamil Nadu–based rural enterprise dedicated to transforming 
                natural cow waste into valuable organic manure. Rooted in traditional Indian 
                agricultural wisdom, we combine time-tested methods with modern quality standards.
              </p>
              <p>
                Our mission is to promote sustainable agriculture through eco-friendly soil 
                enrichers that nourish the earth without harming it. Every batch of our cow dung 
                powder is carefully sun-dried and processed to retain maximum nutritional value.
              </p>
              <p>
                We work closely with local farmers and dairy cooperatives in Tamil Nadu, 
                ensuring a sustainable supply chain that benefits rural communities while 
                delivering premium quality products to customers worldwide.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={dryingImage} 
              alt="Traditional cow dung drying process" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To promote organic farming with 100% natural products that enhance soil 
                    health and support sustainable agriculture practices across the globe.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To make Indian organic resources bloom across global farmlands, becoming 
                    the most trusted name in natural agricultural inputs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="bg-accent/30 rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Sprout className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Every product meets stringent quality standards for organic certification and export requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We practice eco-friendly production methods that protect the environment for future generations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Working with local farmers to create sustainable livelihoods and strengthen rural economies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
