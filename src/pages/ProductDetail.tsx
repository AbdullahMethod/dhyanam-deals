import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const Icon = product.icon;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navbar />

      <section className="pt-28 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-purple-blue flex items-center justify-center glow-purple">
                    <Icon className="text-primary-foreground" size={36} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    {product.badge && (
                      <Badge className="bg-destructive/90 text-destructive-foreground border-none animate-stock-pulse">
                        {product.badge}
                      </Badge>
                    )}
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {product.duration}
                    </Badge>
                  </div>

                  {product.stock !== undefined && (
                    <p className="text-sm font-medium text-destructive mb-3 animate-stock-pulse">
                      ⚡ Only {product.stock} left in stock
                    </p>
                  )}
                  {product.note && (
                    <p className="text-sm text-muted-foreground italic mb-3">{product.note}</p>
                  )}

                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <Check size={16} className="text-primary flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://t.me/dhyanam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-purple-blue text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-purple"
                  >
                    Buy Now
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
