import localFont from "next/font/local";
import "./globals.css";

// تعريف الخط الأساسي من المجلد الذي حددتِهِ
// ملاحظة: استبدلي "اسم_الملف_الحقيقي.otf" بالاسم الموجود داخل المجلد عندك
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
      <body className={`${primaryFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}