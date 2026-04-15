import Link from 'next/link';

export default function BiographyPage() {
  const phases = [
    { id: "divine-foundation", title: "التأسيس الإلهي", label: "المرحلة الأولى", desc: "كيف صاغت السماء ملامح الإمام الأول في بيت النبوة؟", color: "border-[#4A107A]" }, // H2 الملكي
    { id: "post-prophet", title: "ما بعد الرحيل", label: "المرحلة الثانية", desc: "مواجهة العاصفة وحماية الإرث بعد غياب شمس الرسول ﷺ.", color: "border-[#6722A6]" }, // H3 الحيوي
    { id: "ali-school", title: "مدرسة أمير المؤمنين", label: "المرحلة الثالثة", desc: "في ظل علي (ع).. دروس القيادة، والجهاد، وصناعة الإنسان.", color: "border-[#7B2CBF]" }, // H4 متوسط الإشراق
    { id: "caliphate", title: "الإمامة والخلافة", label: "المرحلة الرابعة", desc: "حين آلت إليه شؤون الأمة.. إدارة الصراع وبناء الدولة.", color: "border-[#4A107A]" },
    { id: "peace-treaty", title: "الصلح العظيم", label: "المرحلة الخامسة", desc: "لماذا وضع السيف؟ قصة النصر الذي كُتب بمداد الحلم لا بدم الحرب.", color: "border-[#6722A6]" },
    { id: "quiet-jihad", title: "الجهاد الهادئ", label: "المرحلة السادسة", desc: "صناعة جيل كربلاء من أزقة المدينة.. الجهاد الذي لا يُسمع صليله.", color: "border-[#7B2CBF]" },
    { id: "martyrdom", title: "الشهادة والإرث", label: "المرحلة السابعة", desc: "الرحيل بالسم.. كيد الخصوم وخلود الأثر الذي لم يمحُه غبار القرون.", color: "border-[#4A107A]" }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBFF] text-right font-serif pb-20 px-6 md:px-16" dir="rtl">
      
      {/* القسم الافتتاحي - Hero Section الإبداعي */}
      <section className="py-24 max-w-6xl mx-auto relative overflow-hidden">
        {/* عنصر ديكوري خلفي باهت جداً بلمسة الموف */}
        <div className="absolute top-0 right-0 text-[30vw] font-black text-[#A656E2]/5 leading-none select-none pointer-events-none translate-x-32 -translate-y-16">
          AL MUJTABA
        </div>
        
        <div className="relative z-10 max-w-5xl">
        
          <h1 className="text-7xl md:text-9xl font-black text-[#310055] leading-[0.9] mb-10">
            المجتبى: <br/> 
            <span className="text-[#4A107A] italic">حكاية لم تُروَ</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#5E2D91] max-w-3xl leading-relaxed font-light">
            رحلة في أعماق السيرة، تجمع بين رصانة التحقيق العلمي وجمال الصياغة القصصية، لاستكشاف العقل القيادي للإمام الحسن (ع).
          </p>
        </div>
      </section>

      {/* شبكة المراحل - تصميم اللوحات العائمة */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
        {phases.map((phase) => (
          <Link key={phase.id} href={`/biography/${phase.id}`} className="group">
            <div className="h-full p-10 rounded-[2.5rem] bg-white border-l-8 ${phase.color} shadow-[0_15px_50px_-10px_rgba(49,0,85,0.03)] transition-all duration-500 hover:shadow-[0_25px_60px_-10px_rgba(74,16,122,0.1)] hover:-translate-y-2 flex flex-col justify-between}">
              <div>
                <span className="text-[#A656E2] font-bold text-xs tracking-widest uppercase mb-4 block">
                  {phase.label}
                </span>
                <h2 className="text-4xl font-bold text-[#310055] mb-4 group-hover:text-[#4A107A] transition-colors">{phase.title}</h2>
                <p className="text-[#5E2D91] text-lg leading-relaxed">{phase.desc}</p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-[#4A107A] font-bold group-hover:text-[#6722A6]">
                <span className="text-sm">ابدأ القراءة</span>
                <span className="text-2xl group-hover:translate-x-[-10px] transition-transform">←</span>
              </div>
            </div>
          </Link>
        ))}

        {/* حل جذري ومبدع لصندوق الحياة السياسية: صندوق بنفسجي ملكي مشرق */}
        <Link href="/biography/political-life" className="md:col-span-2 lg:col-span-3 group">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#4A107A] to-[#6722A6] p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-10 transition-all hover:from-[#310055] hover:to-[#4A107A] shadow-xl">
            {/* عنصر ديكوري خلفي في الصندوق */}
            <div className="absolute right-0 top-0 text-[15rem] font-black text-white/5 leading-none select-none translate-y-16">
              POLICY
            </div>

            <div className="text-right relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">الحياة السياسية للإمام الحسن (ع)</h2>
              <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl">
                دراسة تحليلية مركزة تكمل الرؤية التاريخية وتجيب على تساؤلات المنهج والقيادة.
              </p>
            </div>
            <div className="relative z-10 px-10 py-5 bg-white text-[#4A107A] rounded-full font-bold text-lg group-hover:scale-105 transition-transform shadow-md">
              عرض الملحق التحليلي
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}