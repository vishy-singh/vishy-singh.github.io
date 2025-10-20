import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vishwajeet Pratap Singh. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with <Heart size={16} className="text-accent fill-accent" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
