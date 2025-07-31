import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [estimatedTime, setEstimatedTime] = useState(25);

  const orderData = location.state?.orderData;
  const orderId = location.state?.orderId;

  useEffect(() => {
    if (!orderData || !orderId) {
      navigate('/');
      return;
    }

    // Simulate dynamic delivery time
    const timer = setInterval(() => {
      setEstimatedTime(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [orderData, orderId, navigate]);

  if (!orderData || !orderId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground">
            Your order has been confirmed and will be delivered soon
          </p>
        </div>

        {/* Order Info */}
        <Card className="p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Order ID</h3>
              <p className="text-primary font-mono">{orderId}</p>
            </div>
            <div className="text-right">
              <h3 className="font-semibold">Total Amount</h3>
              <p className="text-2xl font-bold text-primary">Nu.{orderData.total}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Estimated delivery: {estimatedTime} minutes</span>
          </div>
        </Card>

        {/* Delivery Details */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4">Delivery Details</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">{orderData.name}</p>
                <p className="text-sm text-muted-foreground">{orderData.address}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <p className="text-sm">{orderData.phone}</p>
            </div>
            
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm font-medium text-accent-foreground">Payment Method</p>
              <p className="text-sm text-muted-foreground">Cash on Delivery</p>
            </div>
          </div>
        </Card>

        {/* Order Items */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4">Order Items</h3>
          
          <div className="space-y-3">
            {orderData.items.map((item: any) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">Nu.{item.price * item.quantity}</p>
              </div>
            ))}
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">Nu.{orderData.total}</span>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            size="lg"
            className="w-full"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => {
              // In a real app, this would track the order
              alert(`Your order ${orderId} is being prepared. You'll receive SMS updates.`);
            }}
          >
            Track Order
          </Button>
        </div>

        {/* Help Section */}
        <div className="text-center mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">
            Need help with your order?
          </p>
          <Button variant="link" size="sm">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};