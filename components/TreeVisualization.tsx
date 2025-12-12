import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check } from 'lucide-react';
import { Section, Branch } from '../types';

interface TreeVisualizationProps {
  data: Section;
  index: number;
}

export const TreeVisualization: React.FC<TreeVisualizationProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = async (branch: Branch) => {
    const textToShare = `${branch.title}\n\n${branch.points.map(p => `• ${p.text}`).join('\n')}\n\n#فاطمة_الزهراء\n${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: branch.title,
          text: textToShare,
          url: window.location.href,
        });
      } catch (error) {
        // Ignore AbortError (user cancelled)
        if ((error as any).name !== 'AbortError') {
             console.error('Error sharing:', error);
        }
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(textToShare);
        setCopiedId(branch.id);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="py-16 md:py-24 relative overflow-hidden snap-start">
        {/* Background Decorative Element */}
        <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-1/2 h-full opacity-5 pointer-events-none`}>
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-fatima-teal">
                <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.6,33.3C59.1,44.5,47.8,53.7,35.4,60.6C23,67.5,9.6,72.1,-2.9,77.1C-15.4,82.1,-27,87.5,-37.2,84.1C-47.4,80.7,-56.2,68.5,-64.3,56.6C-72.4,44.7,-79.8,33.1,-82.9,20.3C-86,7.5,-84.8,-6.5,-78.9,-19.1C-73,-31.7,-62.4,-42.9,-50.3,-50.6C-38.2,-58.3,-24.6,-62.5,-11.6,-64.5C1.4,-66.5,14.4,-66.3,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-amiri font-bold text-fatima-teal mb-4 relative inline-block">
            {data.title}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fatima-gold to-transparent"></span>
          </h2>
          <p className="text-xl text-fatima-dark/80 font-kufi max-w-2xl mx-auto mt-4 leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-fatima-gold/30 -translate-x-1/2 rounded-full"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {data.branches.map((branch, idx) => {
              const isRight = idx % 2 === 0;
              
              return (
                <motion.div 
                  key={branch.id}
                  initial={{ opacity: 0, x: isRight ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  
                  {/* Content Card */}
                  <div className={`flex-1 w-full md:w-5/12 ${isRight ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white rounded-2xl shadow-xl border border-fatima-gold/20 overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                      <div className="bg-fatima-teal/5 p-6 border-b border-fatima-gold/10 flex items-center justify-between">
                        <h3 className="text-2xl font-amiri font-bold text-fatima-teal group-hover:text-fatima-accent transition-colors">
                          {branch.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => handleShare(branch)}
                            className="text-fatima-teal/50 hover:text-fatima-teal hover:bg-fatima-teal/10 p-2 rounded-full transition-all duration-300"
                            title="مشاركة"
                            aria-label="Share this section"
                          >
                            {copiedId === branch.id ? <Check size={20} className="text-green-600" /> : <Share2 size={20} />}
                          </button>
                          <div className="text-fatima-gold bg-white p-2 rounded-full shadow-sm">
                              {branch.icon}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {branch.points.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3 text-fatima-dark/80 font-kufi text-base leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-fatima-gold flex-shrink-0" />
                              <span>{point.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Connector Node */}
                  <div className="relative flex items-center justify-center w-12 h-12 md:w-2/12 z-20">
                    <div className="w-4 h-4 rounded-full bg-fatima-gold shadow-[0_0_0_8px_rgba(197,160,101,0.2)]"></div>
                    {/* Horizontal Connector Line */}
                    <div className={`hidden md:block absolute top-1/2 h-0.5 bg-fatima-gold/30 w-full ${isRight ? 'right-1/2' : 'left-1/2'} -z-10`}></div>
                  </div>

                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};