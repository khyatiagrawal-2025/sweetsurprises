import ProductCard from "./ProductCard";
import { products, type Product } from "@/data/products";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Trending Gifts 🎁
          </h2>
          <p className="text-muted-foreground text-lg">
            Hand-picked best sellers for your loved ones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
