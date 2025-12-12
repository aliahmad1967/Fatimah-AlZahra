import React from "react";
import { FatimiyyaBanner } from "../components/FatimiyyaBanner";
import { Hero } from "../components/Hero";
import { TreeVisualization } from "../components/TreeVisualization";
import { APP_DATA } from "../constants";
import { SectionType } from "../types";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Infographic Section */}
      <section className="py-20 bg-fatima-cream relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-amiri font-bold text-fatima-teal mb-12 relative inline-block">
            الأسماء المباركة
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fatima-gold to-transparent"></span>
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-4 md:p-8 border border-fatima-gold/20">
            <img
              src="/images/infographic.png"
              alt="أسماء السيدة فاطمة الزهراء (ع)"
              className="w-full h-auto rounded-2xl hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="mt-6">
              <a
                href="/images/infographic.png"
                download="Fatima_Names_Infographic.png"
                className="inline-flex items-center gap-2 px-6 py-3 bg-fatima-teal text-white rounded-full hover:bg-fatima-accent transition-colors duration-300 font-kufi shadow-lg"
              >
                <span>تحميل التصميم</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        {APP_DATA.map((section, index) => {
          if (section.id === SectionType.MARTYRDOM) {
            return (
              <React.Fragment key="banner-wrapper">
                <FatimiyyaBanner />
                <TreeVisualization
                  key={section.id}
                  data={section}
                  index={index}
                />
              </React.Fragment>
            );
          }
          return (
            <TreeVisualization key={section.id} data={section} index={index} />
          );
        })}
        })}
      </div>

       {/* Social Share Section for the Website */}
       <div className="container mx-auto px-4 py-8 mb-8">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-fatima-gold/20 max-w-2xl mx-auto">
           <SocialShare 
             url="https://fatimah-al-zahra.vercel.app/" 
             title="موقع السيدة فاطمة الزهراء (عليها السلام) - سيدة نساء العالمين" 
           />
        </div>
      </div>
    </>
  );
};
