"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

// حافظنا على اسم المكون BackButton كما هو في مشروعك
export default function BackButton() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-6 flex justify-between items-center py-4">
      {/* الزر الأول: للرجوع خطوة للخلف */}
      <button 
        onClick={() => router.back()} 
        className="inline-flex items-center gap-2 text-[#A656E2] hover:text-[#310055] font-bold text-lg transition-colors group bg-transparent border-none cursor-pointer p-0"
      >
        <span className="text-small group-hover:translate-x-2 transition-transform">→</span>
        <span className="font-small">الرجوع للخلف</span>
      </button>

      {/* الزر الثاني: للعودة للفهرس العام */}
      <Link 
        href="/biography" 
        className="text-[#5E2D91] hover:text-[#310055] font-small text-md border-b border-[#A656E2]/30 hover:border-[#310055] transition-all"
      >
        الفهرس العام للمشروع
      </Link>
    </div>
  );
}