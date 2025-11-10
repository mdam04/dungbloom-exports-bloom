import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, FileText } from "lucide-react";
import productImage from "@/assets/product-powder.jpg";

const Product = () => {
  const specifications = [
    { property: "Form", detail: "Fine Powder" },
    { property: "Moisture", detail: "<10%" },
    { property: "Shelf Life", detail: "12 Months" },
    { property: "Packaging", detail: "1kg / 5kg / 25kg / 50kg / Bulk" },
    { property: "Origin", detail: "Tamil Nadu, India" },
    { property: "Color", detail: "Natural Brown" },
  ];

  const applications = [
    "Organic manure for farms and gardens",
    "Compost and vermicompost base material",
    "Soil conditioner for nurseries",
    "Natural fertilizer for organic farming",
    "Substrate for mushroom cultivation",
    "Bio-gas production input",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Product Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DungBloom Organic Cow Dung Powder
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium quality, sun-dried organic fertilizer for sustainable agriculture
          </p>
        </div>

        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={productImage} 
              alt="DungBloom Organic Cow Dung Powder" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Product Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                A finely ground, sun-dried organic fertilizer ideal for improving soil fertility, 
                composting, and plant growth. Our cow dung powder retains key nutrients like 
                Nitrogen, Phosphorus, and Potassium (NPK), making it an excellent choice for 
                organic farming and sustainable agriculture.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Sourced from healthy cows in Tamil Nadu and processed using traditional 
                sun-drying methods, each batch is carefully quality-controlled to ensure 
                consistent nutrient content and purity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Request Price Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/export">Order for Export</Link>
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <Card className="mb-16">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Property</th>
                    <th className="text-left py-3 px-4 font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-3 px-4 text-muted-foreground">{spec.property}</td>
                      <td className="py-3 px-4 font-medium">{spec.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Applications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Applications</h2>
              <ul className="space-y-3">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-muted-foreground">{app}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Improves Soil Structure</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhances soil aeration and water retention capacity
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Rich in Nutrients</h3>
                  <p className="text-sm text-muted-foreground">
                    Natural source of NPK and beneficial microorganisms
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    100% organic with zero chemical additives
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cost-Effective</h3>
                  <p className="text-sm text-muted-foreground">
                    Natural and economical alternative to synthetic fertilizers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-accent/30 rounded-xl p-8 text-center">
          <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-4">Need Detailed Product Information?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download our complete product datasheet with technical specifications, 
            usage guidelines, and storage instructions.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Request Datasheet</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
