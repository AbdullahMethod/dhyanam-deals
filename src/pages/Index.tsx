import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import ProductCard from "@/components/ProductCard";
import { products, bundleTools } from "@/data/products";

const Index = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
              <Sparkles size={14} className="text-primary" />
              Lifetime Deals & Exclusive Access
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Premium Digital Tools.{" "}
              <span className="text-gradient">One Place.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get lifetime access to the world's best SaaS tools at unbeatable prices. Trusted by thousands of professionals.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-purple-blue text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-purple"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured <span className="text-gradient">Products</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            All <span className="text-gradient">Products</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* All-In-One Bundle */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 border-primary/20 glow-purple"
          >
            <div className="flex items-center gap-3 mb-4">
              <Package className="text-primary" size={28} />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Special Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ultimate Digital Growth Toolkit
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Get lifetime access to 30+ premium tools in one bundle. SEO, design, writing, learning — everything you need to grow.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-8">
              {bundleTools.slice(0, 16).map((tool) => (
                <div
                  key={tool}
                  className="px-2 py-2 rounded-lg bg-secondary/60 text-xs text-center text-secondary-foreground truncate"
                >
                  {tool}
                </div>
              ))}
            </div>
            <Link
              to="/all-in-one"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-purple-blue text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Full Bundle
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
