// تعريف بنية البيانات لضمان عدم استخدام any
export interface PageContent {
  title: string;
  url: string;
  content: string; // هنا نضع النص الكامل للصفحة أو القصة
  type: "قصة" | "سيرة" | "نص أدبي";
}

export const SITE_FULL_CONTENT: PageContent[] = [
  {
    title: "سيرة الإمام الحسن",
    url: "/biography",
    content: "هنا تضعين النص الكامل المتواجد في صفحة السيرة... ولد الإمام الحسن في المدينة المنورة... كرمه وحلمه...",
    type: "سيرة"
  },
  {
    title: "قصة الكرم",
    url: "/stories/generosity",
    content: "في يوم من الأيام جاء رجل إلى الإمام... النص الكامل للقصة يوضع هنا لكي يجد المحرك أي كلمة بداخلها",
    type: "قصة"
  },
  // أضيفي كل صفحاتك ونصوصك هنا بنفس الطريقة
];
