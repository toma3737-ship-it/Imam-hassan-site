"use client";

import { useState } from 'react';

interface StoryPageProps {
  title: string;
  phaseName: string;
  source: string;
  investigation: string;
  children: React.ReactNode;
}

export default function StoryPage({
  title,
  phaseName,
  source,
  investigation,
  children,
}: StoryPageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="max-w-4xl mx-auto my-24 px-4 md:px-0 text-right border-b border-[#A656E2]/10 pb-16 last:border-0 relative">
      
      {/* الرأس والتحقيق */}
      <header className="mb-8 border-r-4 border-[#4A107A] pr-6">
        <span className="text-[#A656E2] font-bold text-sm block mb-2">{phaseName}</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#310055] leading-tight mb-4">
          {title}
        </h2>
        
        <div className="bg-[#A656E2]/5 p-6 rounded-2xl border border-[#A656E2]/10 shadow-sm">
          <p className="text-[#5E2D91] text-lg md:text-xl leading-relaxed font-medium italic">
             {investigation}
          </p>
          <div className="mt-4 pt-4 border-t border-[#A656E2]/10">
             <span className="text-sm text-[#A656E2] font-bold tracking-widest uppercase">
               المصدر: {source}
             </span>
          </div>
        </div>
      </header>

      {/* منطقة النص والكبسة */}
      <div className="relative mt-10">
        <div 
          className={`
            text-xl md:text-2xl text-[#310055] leading-[1.8] space-y-8 overflow-hidden transition-all duration-1000 ease-in-out
            ${isExpanded ? 'max-h-[none] opacity-100' : 'max-h-60 opacity-60'}
          `}
        >
          {children}
        </div>

        {/* تأثير التلاشي - أضفنا pointer-events-none لكي لا يمنع الضغط */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FDFBFF] via-[#FDFBFF]/90 to-transparent pointer-events-none" />
        )}
      </div>

      {/* وضعنا الكبسة خارج حاوية التلاشي لضمان عملها */}
      <div className="relative z-20 flex justify-center md:justify-start mt-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#4A107A] text-white px-10 py-4  rounded-full font-bold text-p hover:bg-[#5E2D91] shadow-xl transition-all active:scale-95 flex items-center gap-4 cursor-pointer"
        >
          <span>{isExpanded ? '▲' : '▼'}</span>
          <span className="text-p">{isExpanded ? 'طيّ التفاصيل' : 'متابعة القراءة'}</span>
        </button>
      </div>

    </article>
  );
}