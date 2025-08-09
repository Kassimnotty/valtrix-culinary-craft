import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Smartphone, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    price: string;
    id: number;
  };
}

const PaymentModal = ({ isOpen, onClose, course }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "card">("mpesa");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      toast({
        title: "Payment Successful!",
        description: "You now have access to the course. Welcome aboard!",
      });
      
      // Auto close after success
      setTimeout(() => {
        onClose();
        setPaymentComplete(false);
      }, 3000);
    }, 3000);
  };

  const handleWhatsAppPayment = () => {
    const message = `Hi! I'd like to enroll in "${course.title}" (${course.price}). Can you help me with the payment process?`;
    const whatsappUrl = `https://wa.me/255655734453?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (paymentComplete) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">Payment Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to "{course.title}"! You can now access all course materials.
            </p>
            <Button onClick={onClose}>Start Learning</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Complete Your Enrollment</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Course Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">Professional Culinary Course</p>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span>Course Price</span>
                  <span className="font-bold text-lg">{course.price}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ✓ Lifetime access<br />
                  ✓ Certificate included<br />
                  ✓ Mobile and desktop access<br />
                  ✓ 30-day money-back guarantee
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <div>
              <Label className="text-base font-semibold">Choose Payment Method</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={() => setPaymentMethod("mpesa")}
                  className={`p-4 border rounded-lg text-center transition-colors ${
                    paymentMethod === "mpesa" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:bg-accent/5"
                  }`}
                >
                  <Smartphone className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-medium">M-Pesa</div>
                  <div className="text-xs text-muted-foreground">Most popular</div>
                </button>
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 border rounded-lg text-center transition-colors ${
                    paymentMethod === "card" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:bg-accent/5"
                  }`}
                >
                  <CreditCard className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-medium">Card</div>
                  <div className="text-xs text-muted-foreground">Visa, Mastercard</div>
                </button>
              </div>
            </div>

            {/* Payment Form */}
            {paymentMethod === "mpesa" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">M-Pesa Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+255 xxx xxx xxx"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    You'll receive an M-Pesa prompt on this number
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Payment Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handlePayment} 
                className="w-full" 
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  `Pay ${course.price}`
                )}
              </Button>
              
              <Button 
                onClick={handleWhatsAppPayment}
                variant="outline" 
                className="w-full"
              >
                Pay via WhatsApp
              </Button>
            </div>

            <div className="text-xs text-center text-muted-foreground">
              Secure payment powered by Stripe & M-Pesa<br />
              Your payment information is encrypted and secure
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;