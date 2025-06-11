import {
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/useToast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import { useState } from "react";

export const ContactSection = () => {
  const form = useRef();
  const { showToast } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_20sq9u1", "template_udfii56", form.current, {
        publicKey: "epuLB95HFQ7vEvoKL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          showToast("Success!", "Your message has been sent successfully.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e) => {
  //   // e.preventDefault();
  //   // setIsSubmitting(true);
  //   //   const formData = new FormData(e.target);
  //   //   // Send the form data to FormSubmit
  //   //   await fetch("https://formsubmit.co/nihafis3603@gmail.com", {
  //   //     method: "POST",
  //   //     body: formData,
  //   //   });
  //   // showToast("Success!", "Your message has been sent successfully.");
  //   // e.target.reset(); // Optionally reset the form
  //   // setIsSubmitting(false);
  // };

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
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
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
                  <h4 className="font-medium">Phone</h4>
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
                <a
                  href="https://www.linkedin.com/in/nihafis-hasamoh-1aab38230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/fisguxsoe/" target="_blank">
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com/fis.nihafis.2025"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.tiktok.com/@fisguxsoe?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill={"currentColor"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 3 3 0 0 1 .88.13V9.4a7 7 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5 5 0 0 1-1-.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
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
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
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
