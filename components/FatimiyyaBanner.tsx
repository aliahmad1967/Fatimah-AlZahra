import React from 'react';
import { Calendar } from 'lucide-react';

export const FatimiyyaBanner: React.FC = () => {
  return (
    <div className="bg-fatima-dark py-16 relative overflow-hidden snap-start">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-amiri text-white mb-4">الأيام الفاطمية: موسم أحزان عالمي</h2>
                <div className="w-32 h-1 bg-fatima-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-fatima-teal/30 border border-fatima-gold/30 rounded-xl p-8 backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-fatima-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fatima-gold/20">
                        <Calendar className="text-fatima-dark w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-amiri text-fatima-gold mb-2">الفاطمية الأولى</h3>
                    <p className="text-white font-kufi text-lg">13 - 15 جمادى الأولى</p>
                    <p className="text-white/60 text-sm mt-2">استشهادها بعد 75 يوماً من وفاة النبي (ص)</p>
                </div>

                <div className="bg-fatima-teal/30 border border-fatima-gold/30 rounded-xl p-8 backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-fatima-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-fatima-gold/20">
                        <Calendar className="text-fatima-dark w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-amiri text-fatima-gold mb-2">الفاطمية الثانية</h3>
                    <p className="text-white font-kufi text-lg">3 - 5 جمادى الثانية</p>
                    <p className="text-white/60 text-sm mt-2">استشهادها بعد 95 يوماً من وفاة النبي (ص)</p>
                </div>
            </div>
        </div>
    </div>
  );
};