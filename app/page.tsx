 import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. NAVIGATION BAR (ऊपर का मेनू) */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative overflow-hidden rounded">
               <Image src="/logo.png" alt="NeelAnjali Properties Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-800 leading-tight">NeelAnjali Properties</h1>
              <p className="text-xs text-gray-500">Since 2012</p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 font-medium">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <Link href="/properties" className="hover:text-blue-600">Properties</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>

          <a href="tel:+919999138802" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Call Now
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION (मुख्य बैनर) */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Property SALE / PURCHASE <br className="hidden md:block"/> & CONSTRUCTION
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            आपके सपनों का घर अब दूर नहीं। हमारे पास है दिल्ली, नोएडा और गाज़ियाबाद में बेहतरीन रेजिडेंशियल फ्लैट्स।
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/properties" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition">
              View Properties
            </Link>
            <a href="https://wa.me/919999138802" target="_blank" className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (हमारी सेवाएं) */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:-translate-y-1 transition duration-300">
            <h4 className="text-xl font-bold mb-3 text-gray-800">Residential Flats</h4>
            <p className="text-gray-600 mb-4">1 RK, 1 BHK, 2 BHK, और 3 BHK लो-राइज़ बिल्डर फ्लोर फ्लैट्स उपलब्ध हैं।</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>✔️ Re-sale Flats</li>
              <li>✔️ Ready To Move in Flats</li>
              <li>✔️ Brand New Flats</li>
              <li>✔️ Under Construction Flats</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500 hover:-translate-y-1 transition duration-300">
            <h4 className="text-xl font-bold mb-3 text-gray-800">Top Locations</h4>
            <p className="text-gray-600 mb-4">हम इन इलाकों में प्रॉपर्टी खरीदने और बेचने की सर्विस देते हैं:</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>✔️ New Ashok Nagar, Delhi</li>
              <li>✔️ Vasundhara Enclave, Delhi</li>
              <li>✔️ Noida & Greater Noida</li>
              <li>✔️ Vasundhara, Ghaziabad</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:-translate-y-1 transition duration-300">
            <h4 className="text-xl font-bold mb-3 text-gray-800">Trusted Since 2012</h4>
            <p className="text-gray-600 mb-4">पिछले 10+ सालों से हम दिल्ली-NCR में लोगों को उनका सपनों का घर दिला रहे हैं।</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>✔️ 100% Verified Properties</li>
              <li>✔️ Best Market Price</li>
              <li>✔️ Legal Documentation Help</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION (यहाँ होम पेज पर ही कॉन्टैक्ट डाल दिया है) */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-900">Contact Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Address Box */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-bold text-gray-800 mb-2">Our Address</h4>
              <p className="text-gray-600 text-sm">B1/18, Gali no.-2, New Ashok Nagar, Delhi - 110096</p>
            </div>

            {/* Phone Box */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="font-bold text-gray-800 mb-2">Call / WhatsApp</h4>
              <a href="tel:+919999138802" className="text-blue-600 font-bold text-lg hover:underline block mb-1">+91-9999138802</a>
              <p className="text-gray-500 text-sm">Name: Ajay Biswas</p>
            </div>

            {/* Email Box */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">✉️</div>
              <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
              <a href="mailto:neelanaliproperties@gmail.com" className="text-blue-600 font-semibold text-sm hover:underline break-all">neelanaliproperties@gmail.com</a>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Go to Full Contact Page
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (सबसे नीचे का हिस्सा) */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h5 className="text-xl font-bold text-white mb-2">NeelAnjali Properties</h5>
          <p className="text-sm mb-4">Property SALE / PURCHASE & CONSTRUCTION</p>
          <p className="text-sm mb-2">📞 Call: <span className="text-white font-semibold">+91-9999138802</span></p>
          <div className="border-t border-gray-700 mt-6 pt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} NeelAnjali Properties. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}