import localFont from "next/font/local";
import "./globals.css";

const primaryFont = localFont({
  src: "../public/خطوط 10 3 2026/DARK.ttf", 
  variable: "--font-base",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* استخدمت اللون #FAF9FF ليكون بنفسجياً بارداً وموحداً لكل الصفحة */}
      <body className={`${primaryFont.variable} antialiased bg-[#FAF9FF] m-0 p-0`}>
        
        {/* إلغاء الـ max-width والـ padding لجعل المحتوى يلمس أطراف الشاشة تلقائياً */}
        <div className="w-full min-h-screen overflow-x-hidden">
          <main className="w-full">
             <header className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden  bg-[#FAF9FF]">
        <div className="relative z-10 ">
          {}
          <h1 className="text-6xl md:text-7xl mb-6 drop-shadow-sm ">
            كريمُ آلِ البيت
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed ">
            حيث يلتقي الحلمُ النبوي، بالكرمِ العلوي، في سيرةِ سبطِ المصطفى 
            <span className="font-bold"> (صلى الله عليه وآله وسلم) </span>
          </p>
          <div className="mt-10 animate-bounce text-4xl ">↓</div>
        </div>
        
        
      </header>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}