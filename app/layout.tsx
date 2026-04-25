"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Script from "next/script"; // استيراد سكربت نيكست
import "./globals.css";
import SearchModal from "@/components/SearchModal";

const primaryFont = localFont({
  src: "../public/خطوط 10 3 2026/DARK.ttf", 
  variable: "--font-base",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* تحميل ملفات الـ CSS الخاصة بالبحث عالمياً */}
        <link rel="stylesheet" href="/pagefind/pagefind-ui.css" />
      </head>
      
      <body className={`${primaryFont.variable} antialiased bg-[#FAF9FF] m-0 p-0 font-base`}>
        
        {/* زر البحث العائم */}
        <button 
          onClick={() => setShowSearch(true)}
          className="fixed bottom-8 left-8 z-50 bg-[#310055] text-white w-16 h-16 rounded-full shadow-[0_0_20px_rgba(49,0,85,0.4)] flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all border-2 border-white"
          title="بحث شامل"
        >
          🔍
        </button>

        {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
        
        <div className="w-full min-h-screen overflow-x-hidden">
          <main className="w-full">
            <header className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden bg-[#FAF9FF]">
              <div className="relative z-10">
                <h1 className="text-6xl md:text-7xl mb-6 drop-shadow-sm text-[#310055]">
                  كريمُ آلِ البيت
                </h1>
                <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed text-[#310055]">
                  حيث يلتقي الحلمُ النبوي، بالكرمِ العلوي، في سيرةِ سبطِ المصطفى 
                  <span className="font-bold"> (صلى الله عليه وآله وسلم) </span>
                </p>
                <div className="mt-10 animate-bounce text-4xl text-[#310055]">↓</div>
              </div>
            </header>
     
            {children}
          </main>

          <footer className="w-full bg-[#310055] text-white py-8 mt-12 text-center border-t border-purple-800">
            <h3 className="text-xl font-bold mb-4 text-white">للتواصل مع المطور</h3>
            <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-white">
              <a href="https://t.me/Tamtam3737" target="_blank" className="hover:text-purple-300">تلغرام</a>
              <a href="https://wa.me/78952582" target="_blank" className="hover:text-purple-300">واتساب</a>
              <a href="https://www.instagram.com/imam_hasan1509?igsh=Ym1zeHp3ZnVqYmRx" target="_blank" className="hover:text-purple-300">انستغرام</a>
              <a href="mailto:forimamhasan@gmail.com" className="hover:text-purple-300">البريد الإلكتروني</a>
            </div>
            <p className="mt-6 text-sm text-gray-200">جميع الحقوق محفوظة © 2026</p>
          </footer>
        </div>

      </body>
    </html>
  );
}
