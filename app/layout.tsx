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
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}