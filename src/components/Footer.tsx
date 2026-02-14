import { Link } from "react-router-dom";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-3">DHYANAM</h3>
            <p className="text-sm text-muted-foreground">
              Premium digital tools & lifetime deals. Your one-stop marketplace for the best SaaS tools.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link>
              <Link to="/all-in-one" className="text-sm text-muted-foreground hover:text-primary transition-colors">All-In-One Bundle</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Get in Touch</h4>
            <a
              href="https://t.me/dhyanam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-purple-blue text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Join us on Telegram
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DHYANAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
