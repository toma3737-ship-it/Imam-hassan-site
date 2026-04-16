import localFont from "next/font/local";
import "./globals.css";

// تعريف الخط الأساسي
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
      <body className={`${primaryFont.variable} antialiased bg-[#FDFBFF]}`}>
        
        {/* الحاوية المرنة (The Responsive Wrapper) */}
        <div className="min-h-screen w-full overflow-x-hidden">
          
          {/* هذا الجزء هو الذي سيحتوي المحتوى ويمنعه من التداخل على الهاتف */}
          <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 transition-all duration-300">
            {children}
          </main>
          
        </div>

      </body>
    </html>
  );
}