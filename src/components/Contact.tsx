import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vishy_singh@zohomail.in",
      href: "mailto:vishy_singh@zohomail.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 91556 76582",
      href: "tel:9155676582",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vishydev",
      href: "https://www.linkedin.com/in/vishydev/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vishwajeet-singhh",
      href: "https://github.com/vishwajeet-singhh",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "vishwajeet.me",
      href: "https://vishwajeet.me",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // ⚡ Send email asynchronously
    processFormData(formData)
        .then(() => {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          toast({
            title: "Failed to Send Message",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * @description Dummy function to handle the form data.
   * This is where you can add your logic to send the data to a backend.
   * @param {object} data The form data collected from the user.
   */
  const processFormData = (data) => {
    // Map your form data to the EmailJS template variables
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    const serviceID = 'service_irg2tqs';
    const templateID = 'template_bn2gokc';
    const publicKey = 'P3AEzbFLAgiLPNdtE';

    // This returns a promise which we will handle in handleSubmit
    return emailjs.send(serviceID, templateID, templateParams, publicKey);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Let's discuss how I can help bring your backend projects to life
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 border-border">
              <h3 className="font-bold text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-fast group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-fast">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-border gradient-overlay">
              <h3 className="font-bold text-xl mb-4">Available For</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Full-time opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Freelance projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Technical consulting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Collaboration opportunities
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border-border">
            <h3 className="font-bold text-xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="write your message..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
