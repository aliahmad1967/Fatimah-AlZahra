import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fatima-teal text-white snap-start">
      
      {/* Abstract Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-fatima-dark via-fatima-teal to-fatima-teal opacity-90"></div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Golden Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fatima-gold/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-kufi text-fatima-gold tracking-widest mb-4">السلام عليكِ يا</h2>
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
            <span className="text-sm opacity-70">- رسول الله (صلى الله عليه وآله)</span>
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
    </div>
  );
};