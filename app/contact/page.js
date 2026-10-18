 "use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  // फॉर्म का डेटा स्टोर करने के लिए
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  // जब यूज़र फॉर्म सबमिट करे
  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ हम WhatsApp पर मैसेज भेजने का लिंक बना रहे हैं
    const whatsappMessage = `Hello NeelAnjali Properties,%0A%0AMy Name: ${formData.name}%0AMy Phone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919999138802?text=${whatsappMessage}`, "_blank");
  };

  // साल (Year) को बिल्ड एरर से बचाने के लिए यहाँ सेट किया है
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-blue-100">Get in touch with us for any property enquiry</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Side: Contact Details */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Details</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-xl">📍</div>
                <div>
                  <h3 className="font-bold text-gray-700">Address</h3>
                  <p className="text-gray-600">B1/18, Gali no.-2, New Ashok Nagar, Delhi, Pincode - 110096</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 text-xl">📞</div>
                <div>
                  <h3 className="font-bold text-gray-700">Call / SMS / WhatsApp</h3>
                  <a href="tel:+919999138802" className="text-blue-600 font-semibold hover:underline">+91-9999138802</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-600 text-xl">✉️</div>
                <div>
                  <h3 className="font-bold text-gray-700">Email ID</h3>
                  <a href="mailto:neelanaliproperties@gmail.com" className="text-blue-600 font-semibold hover:underline">neelanaliproperties@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-800 text-xl">📘</div>
                <div>
                  <h3 className="font-bold text-gray-700">Facebook Page</h3>
                  <p className="text-gray-600 font-semibold">NeelAnjali Properties</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="mt-8">
              <a 
                href="https://wa.me/919999138802" 
                target="_blank" 
                className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Which property are you looking for?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
           <Link href="/" className="text-blue-600 font-semibold hover:underline">
             ← Back to Home
           </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center border-t border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <h5 className="text-xl font-bold text-white mb-2">NeelAnjali Properties</h5>
          <p className="text-sm mb-4">Property SALE / PURCHASE & CONSTRUCTION</p>
          <p className="text-sm mb-2">📞 Call: <span className="text-white font-semibold">+91-9999138802</span></p>
          <div className="border-t border-gray-700 mt-6 pt-4 text-xs text-gray-500">
            © {currentYear} NeelAnjali Properties. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}