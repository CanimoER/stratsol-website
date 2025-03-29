import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import Header from "../components/Header";

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      // Let Netlify handle the form submission natively
      const form = e.currentTarget;
      form.submit();
      
      // We won't reach here since the page will navigate away
      // This is just as a fallback
      setSuccess(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <div className="relative w-full py-24 overflow-hidden">
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
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* Glowing background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-lg" />

            {/* Form content */}
            <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {success ? (
                <div className="py-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-gray-400 mb-6">
                    We've received your message and will get back to you soon.
                  </p>
                  <Button 
                    onClick={() => setSuccess(false)} 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form 
                  name="contact"
                  method="POST"
                  action="/thank-you"
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Honeypot field for spam protection */}
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
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
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
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
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
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your organization's needs and objectives"
                      className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-900/30 border border-red-500 rounded text-red-300 text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 