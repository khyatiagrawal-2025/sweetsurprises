import { useState } from "react";
import { toast } from "sonner";
import type { CartItem } from "@/data/products";

interface CheckoutSectionProps {
  items: CartItem[];
  discount: number;
  onOrderPlaced: () => void;
}

const CheckoutSection = ({ items, discount, onOrderPlaced }: CheckoutSectionProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const finalTotal = Math.max(0, total - discount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your cart is empty! Add some gifts first 💝");
      return;
    }
    if (!form.firstName || !form.email || !form.address) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Order placed successfully! 💖 Thank you for choosing GlowGift!");
    onOrderPlaced();
    setForm({ firstName: "", lastName: "", email: "", address: "" });
  };

  return (
    <section id="checkout" className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            Checkout 🛍️
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Almost there! Fill in your delivery details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
              Delivery Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="First Name *"
                className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <input
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Last Name"
                className="px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Full Delivery Address *"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-cta text-primary-foreground py-3.5 rounded-full font-semibold text-lg glow-shadow hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              Confirm & Pay 💳
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border/50 rounded-2xl p-6 sticky top-28">
              <h4 className="font-heading text-lg font-bold text-card-foreground mb-4">
                Order Summary
              </h4>
              {items.length === 0 ? (
                <p className="text-muted-foreground text-sm">Your cart is empty</p>
              ) : (
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-card-foreground">
                        {item.name} × {item.qty}
                      </span>
                      <span className="text-muted-foreground font-medium">
                        ₹{item.price * item.qty}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className="border-t border-border pt-3 space-y-2">
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-secondary-foreground">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-bold text-card-foreground">Total</span>
                  <span className="font-bold text-xl text-primary">₹{finalTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
