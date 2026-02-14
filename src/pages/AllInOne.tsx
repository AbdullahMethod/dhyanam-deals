import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import { bundleTools, underTestingTools } from "@/data/products";

const AllInOne = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navbar />

      <section className="pt-28 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
              <Package size={14} className="text-primary" />
              All-In-One Bundle
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ultimate Digital Growth Toolkit
            </h1>
            <p className="text-xl text-gradient font-semibold mb-4">Lifetime Access</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Main tools you can access lifetime easily. SEO, design, writing, learning platforms, and much more — all in one package.
            </p>
          </motion.div>

          {/* Tools grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">
              Included Tools <span className="text-gradient">({bundleTools.length}+)</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {bundleTools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="px-3 py-3 rounded-lg bg-secondary/60 text-sm text-center text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Under testing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 mb-12 border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={20} className="text-destructive" />
              <h2 className="text-xl font-bold">Under-Testing Tools</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              These tools usually work but may occasionally be down. No support provided.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {underTestingTools.map((tool) => (
                <div
                  key={tool}
                  className="px-3 py-2 rounded-lg bg-destructive/10 text-sm text-center text-muted-foreground"
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://t.me/dhyanam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-purple-blue text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity glow-purple"
            >
              Buy Now — Get Lifetime Access
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllInOne;
