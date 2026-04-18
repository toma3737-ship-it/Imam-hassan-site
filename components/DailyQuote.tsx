"use client";
import { useEffect, useState } from "react";

export default function DailyQuote() {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    fetch("/data/quotes.json")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  const handleSend = () => {
    if (!userMessage.trim()) return;
    setIsSent(true);
    setUserMessage("");
    setTimeout(() => setIsSent(false), 3000);
  };

  if (quotes.length === 0) return null;

  const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const dailyQuote = quotes[dayOfYear % quotes.length];

  return (
    <article className="max-w-3xl w-full mx-auto my-8 pb-16 px-4 md:px-0 text-right font-serif relative">
      
      {/* الترويسة والقول */}
      <header className="mb-6 border-r-4 border-[#4A107A] pr-4">
        <h2 className="text-2xl font-black text-[#310055] leading-tight mb-4">رسالة الإمام لك اليوم</h2>
        
        <div className="bg-[#A656E2]/5 p-6 rounded-xl border border-[#A656E2]/10 shadow-sm">
          <p className="text-[#5E2D91] text-lg leading-relaxed font-medium italic">
             "{dailyQuote}"
          </p>
          <div className="mt-4 pt-3 border-t border-[#A656E2]/20 flex justify-between items-center text-[10px] font-bold text-[#A656E2]">
             <span>المصدر: كلمة الإمام الحسن (ع)</span>
          </div>
        </div>
      </header>

      {/* بوكس رسالتك للإمام - الحاوية الموحدة */}
      <div className="pr-4">
        <h2 className="text-2xl font-black text-[#310055] leading-tight mb-4">رسالتك للإمام اليوم</h2>
        
        {/* الحاوية (الكبسولة) */}
        <div className="flex flex-row items-center w-full bg-[#A656E2]/5 border border-[#A656E2]/10 rounded-full p-0.5 shadow-inner">
          
          <input 
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="اكتب رسالتك هنا..."
            className="flex-grow w-full bg-transparent border-none focus:ring-0 px-3 py-2.5 md:px-5 md:py-3 text-[#310055] text-md placeholder-[#A656E2]/40 outline-none"
          />
          
          <button 
            onClick={handleSend}
            className="flex-shrink-0 bg-[#4A107A] text-white rounded-full px-4 py-3 text-xs md:text-sm font-bold hover:bg-[#5E2D91] transition-all active:scale-95 text-sm"
          >
            {isSent ? "تم ✓" : "إرسال"}
          </button>
        </div>
      </div>

    </article>
  );
}


