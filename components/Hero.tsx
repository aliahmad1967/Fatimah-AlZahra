import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fatima-dark text-white snap-start">
      <div className="absolute inset-0 z-0">
        {/* Added 'fixed' via style since Tailwind bg-fixed applies to background-image, not img tag. 
             Wait, object-cover with fixed position is tricky. 
             Standard parallax for img tag: position fixed? No, that breaks layout.
             Correct way: Use background-image property for fixed attachment or use sticky.
             User said "fix when slide". 
             Let's try standard 'bg-fixed' with a div instead of img tag for better compatibility.
          */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
          style={{ backgroundImage: "url('/images/hero_banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-fatima-dark/80 via-fatima-dark/60 to-fatima-teal/90 mix-blend-multiply"></div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-kufi text-fatima-gold tracking-widest mb-4">
            السلام عليكِ يا
          </h2>
          <h1 className="text-6xl md:text-8xl font-amiri font-bold mb-2 leading-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-fatima-cream">
            فاطمة الزهراء
          </h1>
          <h3 className="text-3xl md:text-4xl font-amiri text-fatima-gold mt-4">
            سيدة نساء العالمين
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mx-auto mt-8 p-6 border-y border-fatima-gold/30 bg-white/5 backdrop-blur-sm rounded-lg"
        >
          <p className="text-lg md:text-xl font-kufi leading-loose text-fatima-cream/90">
            "فاطمة بضعة مني، فمن أغضبها أغضبني"
            <br />
            <span className="text-sm opacity-70">
              - رسول الله (صلى الله عليه وآله)
            </span>
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-fatima-gold/80 hover:text-fatima-gold"
      >
        <ChevronDown size={40} />
      </motion.div>

      {/* Hero Image Download Button */}
      <div className="absolute bottom-6 right-6 z-20">
        <a
          href="/images/hero_banner.jpg"
          download="Fatima_Al_Zahra_Wallpaper.jpg"
          className="flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white/80 hover:text-white transition-all duration-300 text-sm font-kufi"
          title="تحميل الصورة"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          <span className="hidden md:inline">تحميل الخلفية</span>
        </a>
      </div>
    </div>
  );
};
