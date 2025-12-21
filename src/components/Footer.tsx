
const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vishwajeet Pratap Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
