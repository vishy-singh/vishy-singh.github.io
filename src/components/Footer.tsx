
const Footer = () => {
  return (
    <footer className="py-6 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vishwajeet Pratap Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
