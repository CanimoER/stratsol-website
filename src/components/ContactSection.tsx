import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send, AlertCircle } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface ContactSectionProps {
  onSubmit?: (data: FormData) => Promise<boolean>;
  isSubmitting?: boolean;
}

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ContactSection = ({
  onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  },
  isSubmitting = false,
}: ContactSectionProps) => {
  const { toast } = useToast();
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const validateForm = (formData: FormData): boolean => {
    const errors: {[key: string]: string} = {};

    // Required fields validation
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    
    // Email validation
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!message.trim()) errors.message = "Message is required";
    
    // Update state with any errors
    setFormErrors(errors);
    
    // Form is valid if there are no errors
    return Object.keys(errors).length === 0;
  };

  const sanitizeInput = (input: string): string => {
    // Basic sanitization - remove script tags and convert HTML entities
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot (bot protection)
    if (honeypot) {
      console.log("Bot detected");
      return;
    }
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Validate the form
    if (!validateForm(formData)) {
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormErrors({});
        form.reset();
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Clear field error when user starts typing
  const clearError = (field: string): void => {
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[10%] top-[20%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] min-w-[250px] min-h-[250px] border-[30px] border-[#62368a]/50 bg-transparent"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business? Let's start a conversation about
            your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Glowing background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-lg" />

          {/* Form content */}
          <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <form 
              name="stratsol-contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="stratsol-contact" />
              
              {/* Netlify's honeypot field */}
              <div className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10 overflow-hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-400 ${
                      formErrors.firstName ? "border-red-500" : ""
                    }`}
                    onChange={() => clearError("firstName")}
                    aria-invalid={formErrors.firstName ? "true" : "false"}
                  />
                  {formErrors.firstName && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{formErrors.firstName}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-400 ${
                      formErrors.lastName ? "border-red-500" : ""
                    }`}
                    onChange={() => clearError("lastName")}
                    aria-invalid={formErrors.lastName ? "true" : "false"}
                  />
                  {formErrors.lastName && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{formErrors.lastName}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-white">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Your organization name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sector" className="text-white">
                    Sector
                  </Label>
                  <select
                    id="sector"
                    name="sector"
                    className="w-full rounded-md bg-white/5 border-white/10 text-white placeholder:text-gray-400 p-2"
                  >
                    <option value="" className="bg-[#0A0A0A]">Select sector</option>
                    <option value="public" className="bg-[#0A0A0A]">Public Sector</option>
                    <option value="private" className="bg-[#0A0A0A]">Private Sector</option>
                    <option value="nonprofit" className="bg-[#0A0A0A]">Non-Profit</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-white">
                  Service Interest
                </Label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="w-full rounded-md bg-white/5 border-white/10 text-white placeholder:text-gray-400 p-2"
                >
                  <option value="" className="bg-[#0A0A0A]">Select service type</option>
                  <option value="strategic" className="bg-[#0A0A0A]">Strategic Planning & Development</option>
                  <option value="research" className="bg-[#0A0A0A]">Research & Analysis</option>
                  <option value="consulting" className="bg-[#0A0A0A]">Management Consulting</option>
                  <option value="advisory" className="bg-[#0A0A0A]">Advisory Services</option>
                  <option value="other" className="bg-[#0A0A0A]">Other Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className={`bg-white/5 border-white/10 text-white placeholder:text-gray-400 ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                  onChange={() => clearError("email")}
                  aria-invalid={formErrors.email ? "true" : "false"}
                />
                {formErrors.email && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{formErrors.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your organization's needs and objectives"
                  className={`min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-gray-400 ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  required
                  onChange={() => clearError("message")}
                  aria-invalid={formErrors.message ? "true" : "false"}
                />
                {formErrors.message && (
                  <div className="flex items-center mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{formErrors.message}</span>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading || isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                {loading || isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
