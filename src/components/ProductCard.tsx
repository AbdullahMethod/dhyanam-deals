import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/products/${product.slug}`} className="block group">
        <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(260_80%_60%/0.15)] group-hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-purple-blue flex items-center justify-center">
              <Icon className="text-primary-foreground" size={24} />
            </div>
            <div className="flex gap-2">
              {product.badge && (
                <Badge className="bg-destructive/90 text-destructive-foreground border-none animate-stock-pulse">
                  {product.badge}
                </Badge>
              )}
              <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                {product.duration}
              </Badge>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.shortDescription}
          </p>
          {product.stock !== undefined && (
            <p className="text-xs font-medium text-destructive animate-stock-pulse">
              Only {product.stock} left in stock
            </p>
          )}
          {product.note && (
            <p className="text-xs text-muted-foreground italic">{product.note}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
