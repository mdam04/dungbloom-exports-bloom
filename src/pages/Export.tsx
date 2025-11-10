import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Globe, Package, FileCheck, Ship } from "lucide-react";
import exportImage from "@/assets/export-packaging.jpg";

const Export = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", country: "", quantity: "", message: "" });
  };

  const countries = [
    "UAE",
    "USA",
    "UK",
    "Singapore",
    "Sri Lanka",
    "Other",
  ];

  const documents = [
    "Commercial Invoice",
    "Phytosanitary Certificate",
    "Certificate of Origin",
    "Packing List",
    "Bill of Lading",
    "Quality Test Report",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exporting Organic Cow Dung Powder Worldwide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DungBloom delivers export-grade organic manure with reliable packaging and documentation
          </p>
        </div>

        {/* Export Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="pt-6 text-center">
              <Package className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Export Packaging</h3>
              <p className="text-sm text-muted-foreground">25kg / 50kg PP bags or jute bags</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Ship className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Export Ports</h3>
              <p className="text-sm text-muted-foreground">Chennai, Mumbai</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <FileCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground">Complete export paperwork</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Minimum Order</h3>
              <p className="text-sm text-muted-foreground">5 Tons</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Export Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Export Information</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Countries Served</h3>
                    <div className="flex flex-wrap gap-2">
                      {countries.map((country) => (
                        <span 
                          key={country}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">Documents Provided</h3>
                    <ul className="space-y-2">
                      {documents.map((doc) => (
                        <li key={doc} className="flex items-center gap-2 text-sm">
                          <div className="bg-primary/10 rounded-full p-0.5">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          </div>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={exportImage} 
                    alt="Export packaging" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Submit Export Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United Arab Emirates"
                    />
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity (in Tons) *</Label>
                    <Input
                      id="quantity"
                      required
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="10"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Export Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-accent/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Why Export from DungBloom?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Every batch is tested and certified for export standards
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timely Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Efficient logistics and reliable shipping partners
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Flexible packaging options based on your requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export;
