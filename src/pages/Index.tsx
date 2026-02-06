import { useState, useCallback } from "react";
import { toast } from "sonner";
import type { Product, CartItem } from "@/data/products";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CartSidebar from "@/components/CartSidebar";
import CheckoutSection from "@/components/CheckoutSection";
import Footer from "@/components/Footer";
import FallingHearts from "@/components/FallingHearts";

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    toast.success(`${product.name} added to cart! 💖`);
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const applyCoupon = useCallback(() => {
    if (coupon.toUpperCase() === "LOVE10") {
      setDiscount(100);
      toast.success("Coupon applied! ₹100 off 🎉");
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code");
    }
  }, [coupon]);

  const handleOrderPlaced = useCallback(() => {
    setCart([]);
    setDiscount(0);
    setCoupon("");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FallingHearts />
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <ProductGrid onAddToCart={addToCart} />
      <CheckoutSection items={cart} discount={discount} onOrderPlaced={handleOrderPlaced} />
      <Footer />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={updateQty}
        onRemove={removeItem}
        discount={discount}
        coupon={coupon}
        onCouponChange={setCoupon}
        onApplyCoupon={applyCoupon}
      />
    </div>
  );
};

export default Index;
