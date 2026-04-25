"use client";
import { useState, useRef } from "react";
import Script from "next/script";
import { supabase } from "@/lib/supabase"; 

interface LibraryItem {
  id: number;
  title: string;
  file_url?: string;
}

interface PagefindUIOptions {
  element: string;
  showSubResults: boolean;
  bundlePath: string;
  resetStyles?: boolean;
}

declare global {
  interface Window {
    PagefindUI: new (options: PagefindUIOptions) => void;
  }
}

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [dbResults, setDbResults] = useState<LibraryItem[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [dbSearchTerm, setDbSearchTerm] = useState<string>("");
  const pagefindInitialized = useRef(false);

  const handleSupabaseSearch = async (term: string): Promise<void> => {
    setDbSearchTerm(term);
    if (!term || term.length < 2) {
      setDbResults([]);
      return;
    }
    
    setIsSearching(true);
    const { data, error } = await supabase
      .from("library_items")
      .select("id, title, file_url")
      .ilike("title", `%${term}%`);
    
    if (error) {
      console.error("Supabase Error:", error.message);
    } else {
      setDbResults((data as LibraryItem[]) ?? []);
    }
    setIsSearching(false);
  };

  const initPagefind = (): void => {
    if (typeof window !== "undefined" && window.PagefindUI && !pagefindInitialized.current) {
      new window.PagefindUI({
        element: "#pagefind-search",
        showSubResults: true,
        bundlePath: "/pagefind/",
        resetStyles: false
      });
      pagefindInitialized.current = true;
    }
  };

  return (
    <div className="fixed inset-0 bg-purple-900/80 z-100 p-4 flex items-center justify-center backdrop-blur-md">
      {/* تخصيص ألوان Pagefind لكسر اللون الأسود والرمادي */}
      <style jsx global>{`
        :root {
          --pagefind-ui-primary: #7e22ce !important; /* Purple 700 */
          --pagefind-ui-text: #7e22ce !important;
          --pagefind-ui-background: #ffffff !important;
          --pagefind-ui-border: #7e22ce !important;
          --pagefind-ui-tag: #faf5ff !important;
        }
        #pagefind-search .pagefind-ui__search-input {
          color: #7e22ce !important;
          border-color: #7e22ce !important;
          background-color: #faf5ff !important;
        }
        #pagefind-search .pagefind-ui__result-title, 
        #pagefind-search .pagefind-ui__result-excerpt {
          color: #7e22ce !important;
        }
        #pagefind-search mark {
          background-color: #f3e8ff !important;
          color: #6b21a8 !important;
          font-weight: bold;
        }
        /* إخفاء أي حواف رمادية متبقية */
        .pagefind-ui__drawer { border: none !important; }
      `}</style>

      <Script 
        src="/pagefind/pagefind-ui.js" 
        strategy="afterInteractive" 
        onLoad={initPagefind} 
      />

      <div className="bg-white p-6 rounded-3xl w-full max-w-2xl shadow-2xl relative border-4 border-purple-700 max-h-[90vh] overflow-y-auto">
        
        <h2 className="text-purple-700 font-black text-2xl mb-6 text-center">البحث الذكي</h2>

        {/* 1. قسم البحث الثابت */}
        <div className="mb-8">
          <p className="text-purple-600 text-sm font-bold mb-2 mr-2">محتوى الصفحات:</p>
          <div id="pagefind-search" className="overflow-hidden rounded-xl border-2 border-purple-200"></div>
        </div>

        {/* 2. قسم بحث المكتبة (Supabase) */}
        <div className="mt-8 pt-6 border-t-4 border-purple-100">
          <p className="text-purple-600 text-sm font-bold mb-2 mr-2">محتوى المكتبة والملفات:</p>
          <div className="relative">
            <input 
              type="text"
              value={dbSearchTerm}
              placeholder="ابحث في عناوين الكتب والصوتيات..."
              className="w-full p-4 bg-purple-50 border-2 border-purple-700 rounded-2xl text-purple-700 placeholder:text-purple-300 focus:ring-4 focus:ring-purple-200 outline-none transition-all font-medium"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSupabaseSearch(e.target.value)}
            />
          </div>
          
          <div className="mt-6 space-y-3">
            {isSearching && (
              <div className="flex justify-center items-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
                <span className="mr-3 text-purple-700 font-bold">جاري البحث في القاعدة...</span>
              </div>
            )}
            
            {!isSearching && dbResults.length > 0 && (
              <div className="grid gap-3">
                {dbResults.map((item) => (
                  <div key={item.id} className="p-4 bg-purple-50 rounded-2xl border-2 border-purple-100 hover:border-purple-700 transition-colors flex justify-between items-center group">
                    <span className="text-purple-800 font-bold">{item.title}</span>
                    {item.file_url && (
                      <a 
                        href={item.file_url} 
                        target="_blank" 
                        className="bg-purple-700 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-purple-800 shadow-md shadow-purple-200 transition-transform active:scale-95"
                      >
                        فتح الملف
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {!isSearching && dbSearchTerm.length > 1 && dbResults.length === 0 && (
              <div className="text-center p-6 bg-purple-50 rounded-2xl border-2 border-dashed border-purple-200">
                <p className="text-purple-400 font-medium">لم نجد هذا العنوان في المكتبة</p>
              </div>
            )}
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="mt-10 w-full py-4 bg-purple-700 text-white rounded-2xl hover:bg-purple-800 transition-all font-black text-lg shadow-xl shadow-purple-100 uppercase tracking-wider"
        >
          إغلاق
        </button>
      </div>
    </div>
  );
}



















