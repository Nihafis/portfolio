import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/useToast";

export const ContactSection = () => {
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Success!", "Your message has been sent successfully.");
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 ">
          Get In
          <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question, a project in mind, or just want to say hi, I'll do my best
          to get back to you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="spac-y-8 p-6 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Inforamtion</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:nihafis3603@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nihafis3603@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+66993033603"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +66993033603
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    52 Phaholyothin Saimai Bangkok,Thailand 10220
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 ">
              <h4 className=" font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="" target="_blank">
                  <Linkedin />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
                <a href="" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nihafis Hasamoh... "
                  className="w-full px-4 py-3  border border-input bg-background focus:outline-hidden 
              rounded-md p-2 focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@gmail.com"
                  className="w-full px-4 py-3  border border-input bg-background focus:outline-hidden 
              rounded-md p-2 focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Hello,I'd like to talk about..."
                  className="w-full px-4 py-3  border border-input bg-background focus:outline-hidden 
              rounded-md p-2 focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139, 92, 246, 0.5)] hover:scale-105 active:scale-95 w-fit  flex items-center mx-auto gap-2 w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} className="w-6 h-6 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
