import React, { useState } from "react";
import { Mail, Send, Phone, MapPin, Clock, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What industries do you primarily serve?",
      answer: "We serve a wide range of industries including oil & gas, manufacturing, healthcare, construction, and water treatment sectors with our comprehensive product offerings."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we have extensive experience in international logistics and can ship products to most countries worldwide with proper documentation and compliance."
    },
    {
      question: "What is your typical response time for inquiries?",
      answer: "We respond to all inquiries within 24 hours during business days. For urgent matters, please call our direct line for immediate assistance."
    },
    {
      question: "Can you source products not listed on your website?",
      answer: "Absolutely. Our global network allows us to source specialized industrial products upon request. Contact us with your specific requirements."
    },
    {
      question: "What are your payment terms?",
      answer: "We offer flexible payment options including LC, TT, and credit terms for established customers. Specific terms are determined based on order value and customer relationship."
    }
  ];

  return (
    <div>
      {/* Hero Header Section */}
      <div 
        className="relative py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('img/banner 3.jpg')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-5">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're ready to serve you. Reach out today to explore how we can support your business.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 mb-2">+1 (555) 123-4567</p>
              <p className="text-sm text-slate-500">Mon-Fri, 8:00 AM - 6:00 PM</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 mb-2">info@company.com</p>
              <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Office</h3>
              <p className="text-slate-600 mb-2">123 Commerce Street</p>
              <p className="text-sm text-slate-500">Business District, City 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 shadow-xl">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Send us a Message</h2>
                  <p className="mt-3 text-slate-600">Your reliable trading partner is just a click away.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        placeholder="John Doe"
                        required
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        value={formData.name}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        value={formData.email}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="How can we help you today?"
                      className="min-h-[150px] w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      required
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      value={formData.message}
                    />
                  </div>
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-blue-900 hover:bg-blue-800 text-white rounded-full px-8 py-4 text-base font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center mx-auto"
                    >
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Map & Business Hours */}
            <div>
              <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl h-96 mb-8">
                {/* Replace with your actual map embed code */}
                <div className="w-full h-full flex items-center justify-center bg-slate-700 text-white">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-slate-300 mt-2">Location would be displayed here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-8 h-8 text-blue-800" />
                  <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Monday - Friday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Saturday</span>
                    <span className="font-medium text-slate-900">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Sunday</span>
                    <span className="font-medium text-slate-900">Holiday</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-blue-200">
                    <p className="text-sm text-slate-600">Emergency support available outside business hours for critical needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">Find answers to common questions about our products and services.</p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-medium text-slate-900 hover:bg-slate-50 transition-all duration-150"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}