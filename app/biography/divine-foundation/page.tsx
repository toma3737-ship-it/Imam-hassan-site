export default function DivineFoundationHome() {
  return (
    <main className="min-h-screen bg-background p-8 md:p-20" dir="rtl">
      <header className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="text-5xl text-h1 font-serif mb-6">المرحلة الأولى: التأسيس الإلهي</h1>
        <div className="h-1 w-32 bg-h3 mx-auto opacity-20"></div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* القسم الأول: الهوية والاصطفاء */}
        <section className="group relative bg-white/5 p-10 rounded-[50px] border border-h6/10 hover:border-h1/40 transition-all">
          <h2 className="text-3xl text-h2 mb-4">الهوية والاصطفاء</h2>
          <p className="text-lg text-text-main mb-8 leading-relaxed italic">
            "من عالم الذر إلى سماء المدينة.. كيف نزل جبريل ليسمّي السبط؟ وما هي الآيات التي خلدت ذكر الحسن في محكم التنزيل؟"
          </p>
          <a href="/biography/divine-foundation/identity-and-selection" 
             className="inline-block bg-h1 text-white px-10 py-4 rounded-full font-bold group-hover:scale-105 transition-transform">
             متابعة القسم الأول ←
          </a>
        </section>

        {/* القسم الثاني: التربية النبوية */}
        <section className="group relative bg-white/5 p-10 rounded-[50px] border border-h6/10 hover:border-h4/40 transition-all">
          <h2 className="text-3xl text-h2 mb-4">التربية النبوية</h2>
          <p className="text-lg text-text-main mb-8 leading-relaxed italic">
            "في حجر المصطفى ﷺ، حيث كان كل عناق هو بناءً لإمام المستقبل.. اكتشف كيف صاغ بيت الوحي شخصية المجتبى."
          </p>
          <a href="/biography/divine-foundation/prophetic-upbringing" 
             className="inline-block bg-h4 text-white px-10 py-4 rounded-full font-bold group-hover:scale-105 transition-transform">
             متابعة القسم الثاني ←
          </a>
        </section>

      </div>
    </main>
  );
}