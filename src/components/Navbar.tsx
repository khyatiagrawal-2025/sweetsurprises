import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar = ({ cartCount, onCartClick }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-surface border-b border-border/50">
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
        <a href="#" className="font-heading text-xl sm:text-2xl font-bold text-primary flex items-center gap-1.5 sm:gap-2">
          💖 GlowGift
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">
            Gifts
          </a>
          <a href="#checkout" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">
            Checkout
          </a>
          <ThemeToggle />
          <button
            onClick={onCartClick}
            className="gradient-cta text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity glow-shadow"
          >
            <ShoppingCart className="w-4 h-4" />
            Cart ({cartCount})
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onCartClick}
            className="relative gradient-cta text-primary-foreground p-2.5 rounded-full"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-1">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-surface border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#products" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              Gifts
            </a>
            <a href="#checkout" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition-colors py-2 font-medium">
              Checkout
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
