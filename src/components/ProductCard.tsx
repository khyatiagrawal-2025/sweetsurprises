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
      <div className="bg-card rounded-2xl overflow-hidden card-hover border border-border/50 group">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 gradient-cta text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <h3 className="font-heading font-bold text-lg text-card-foreground mb-1">
            {product.name}
          </h3>
          <p className="text-primary font-bold text-xl mb-4">
            ₹{product.price}
          </p>
          <button
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center gap-2 border-2 border-primary text-primary rounded-full py-2.5 font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
