// app/discover/library/[category]/page.tsx
import CategoryClient from "./CategoryClient";

export async function generateStaticParams() {
  return [
    { category: "pdfs" },
    { category: "audios" },
    { category: "images" },
    { category: "videos" },
  ];
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  
  // نقوم بتمرير الـ category إلى المكون الذي أنشأناه
  return <CategoryClient category={category} />;
}



