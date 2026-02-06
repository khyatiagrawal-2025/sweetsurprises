import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import type { CartItem } from "@/data/products";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  discount: number;
  coupon: string;
  onCouponChange: (val: string) => void;
  onApplyCoupon: () => void;
}

const CartSidebar = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemove,
  discount,
  coupon,
  onCouponChange,
  onApplyCoupon,
}: CartSidebarProps) => {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const finalTotal = Math.max(0, total - discount);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-foreground/20 z-50" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-card z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-heading text-xl font-bold text-card-foreground flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your Cart
          </h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-4xl mb-4 block">🛒</span>
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-secondary/50 rounded-xl p-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-card-foreground truncate">{item.name}</p>
                  <p className="text-primary font-bold text-sm">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateQty(item.id, -1)}
                    className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-bold text-sm text-card-foreground w-6 text-center">{item.qty}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, 1)}
                    className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-4">
            {/* Coupon */}
            <div className="flex gap-2">
              <input
                value={coupon}
                onChange={(e) => onCouponChange(e.target.value)}
                placeholder="Coupon code (LOVE10)"
                className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={onApplyCoupon}
                className="px-4 py-2.5 gradient-cta text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Apply
              </button>
            </div>
            {discount > 0 && (
              <p className="text-sm text-secondary-foreground font-medium">
                🎉 Coupon applied! -₹{discount}
              </p>
            )}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-medium">Total</span>
              <span className="text-2xl font-bold text-card-foreground">₹{finalTotal}</span>
            </div>
            <a
              href="#checkout"
              onClick={onClose}
              className="block w-full gradient-cta text-primary-foreground text-center py-3 rounded-full font-semibold glow-shadow hover:opacity-90 transition-opacity"
            >
              Proceed to Checkout
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
