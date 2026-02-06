import { Plus } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onAddToCart, index }: ProductCardProps) => {
  return (
    <div
      className="opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
    >
      <div className="bg-card rounded-xl sm:rounded-2xl overflow-hidden card-hover border border-border/50 group">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-36 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 gradient-cta text-primary-foreground text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            {product.badge}
          </span>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5 text-center">
          <h3 className="font-heading font-bold text-sm sm:text-lg text-card-foreground mb-0.5 sm:mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-primary font-bold text-base sm:text-xl mb-2 sm:mb-4">
            ₹{product.price}
          </p>
          <button
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center gap-1.5 sm:gap-2 border-2 border-primary text-primary rounded-full py-2 sm:py-2.5 font-semibold text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Add to </span>Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
