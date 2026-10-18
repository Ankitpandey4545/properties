"use client"; // यह लाइन ज़रूरी है क्योंकि हम इसमें फ़िल्टर (Search) का इस्तेमाल कर रहे हैं

import { useState } from "react";
import Link from "next/link";

// यहाँ हमने कुछ डेमो प्रॉपर्टीज़ का डेटा डाला है (बाद में इसे डेटाबेस से जोड़ेंगे)
const allProperties = [
  { id: 1, title: "1 BHK Builder Floor", location: "New Ashok Nagar, Delhi", price: "₹15,00,000", type: "1 BHK", status: "Ready to Move" },
  { id: 2, title: "2 BHK Brand New Flat", location: "Vasundhara Enclave, Delhi", price: "₹35,00,000", type: "2 BHK", status: "Brand New" },
  { id: 3, title: "3 BHK Low-Rise Flat", location: "Noida", price: "₹65,00,000", type: "3 BHK", status: "Under Construction" },
  { id: 4, title: "1 RK Flat", location: "New Ashok Nagar, Delhi", price: "₹8,00,000", type: "1 RK", status: "Re-sale" },
  { id: 5, title: "2 BHK Flat", location: "Vasundhara, Ghaziabad", price: "₹28,00,000", type: "2 BHK", status: "Ready to Move" },
  { id: 6, title: "3 BHK Builder Floor", location: "Greater Noida West", price: "₹55,00,000", type: "3 BHK", status: "Brand New" },
];

export default function Properties() {
  const [filterType, setFilterType] = useState("All");

  // फ़िल्टर लॉजिक (अगर 'All' चुना है तो सब दिखाओ, वरना उसी टाइप के फ्लैट्स दिखाओ)
  const filteredProperties = filterType === "All" 
    ? allProperties 
    : allProperties.filter(prop => prop.type === filterType);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Available Properties</h1>
        <p className="text-lg text-blue-100">Find your dream home in Delhi NCR</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["All", "1 RK", "1 BHK", "2 BHK", "3 BHK"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors border ${
                filterType === type 
                  ? "bg-blue-600 text-white border-blue-600" 
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type} Flats
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                
                {/* Image Placeholder (अभी के लिए एक साधारण बैकग्राउंड) */}
                <div className="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-500">
                   <span>Property Image Coming Soon</span>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold uppercase tracking-wide">
                      {property.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-4">📍 {property.location}</p>
                  
                  <div className="mt-auto">
                    <p className="text-2xl font-extrabold text-blue-700 mb-4">{property.price}</p>
                    <a 
                      href={`https://wa.me/919999138802?text=Hello, I am interested in ${property.title} at ${property.location} priced at ${property.price}.`}
                      target="_blank"
                      className="block w-full text-center bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-lg">
              No properties found for this category.
            </div>
          )}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
           <Link href="/" className="text-blue-600 font-semibold hover:underline">
             ← Back to Home
           </Link>
        </div>

      </div>
    </div>
  );
}