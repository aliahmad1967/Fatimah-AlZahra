import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-fatima-dark text-fatima-cream py-12 border-t-4 border-fatima-gold snap-start">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-amiri text-3xl mb-4">السلام عليك أيتها الصديقة الشهيدة</h2>
        <p className="font-kufi opacity-70 mb-8">
          اللهم صل على فاطمة وأبيها وبعلها وبنيها والسر المستودع فيها
        </p>
        <div className="w-24 h-1 bg-fatima-gold mx-auto rounded-full mb-8"></div>
        <p className="text-sm opacity-50 font-kufi">
          تصميم ومحتوى مستوحى من الإنفوجرافيك والمشجرات الفاطمية المباركة
        </p>
      </div>
    </footer>
  );
};