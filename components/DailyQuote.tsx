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
    <article className="max-w-2xl w-full mx-auto my-8 pb-16 px-4 md:px-0 text-right font-serif relative">
      
      {/* الترويسة والقول */}
      <header className="mb-6 border-r-4 border-[#4A107A] pr-4">
        <h2 className="text-2xl font-black text-[#310055] leading-tight mb-4">رسالة الإمام لك اليوم</h2>
        
        <div className="bg-[#A656E2]/5 p-6 rounded-xl border border-[#A656E2]/10 shadow-sm">
          <p className="text-[#5E2D91] text-lg leading-relaxed font-medium italic">
             "{dailyQuote}"
          </p>
          <div className="mt-4 pt-3 border-t border-[#A656E2]/20 flex justify-between items-center text-[10px] font-bold text-[#A656E2]">
             <span>المصدر: كلمة الإمام الحسن (ع)</span>
             <span className="text-xs text-[#4A107A] italic">-الإمام الحسن (ع)</span>
          </div>
        </div>
      </header>

      {/* بوكس رسالتك للإمام */}
      <div className="pr-4">
        <h2 className="text-2xl font-black text-[#310055] leading-tight mb-4">رسالتك للإمام اليوم</h2>
        
        <div className="flex items-center bg-[#A656E2]/5 text-h6 border border-[#A656E2]/10 rounded-xl p-1 shadow-inner w-full">
          <input 
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-[#310055]  text-h6 text-md placeholder-[#A656E2]/40 outline-none"
          />
          <button 
            onClick={handleSend}
            className="bg-[#A656E2] text-white rounded-lg px-6 py-2 font-bold hover:bg-[#5E2D91] transition-all active:scale-95 text-sm"
          >
            {isSent ? "تم ✓" : "إرسال"}
          </button>
        </div>
      </div>

    </article>
  );
}

