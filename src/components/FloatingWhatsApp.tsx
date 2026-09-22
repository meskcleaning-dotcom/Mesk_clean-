import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="محادثة واتساب الفورية" className="fixed bottom-20 lg:bottom-8 left-4 sm:left-6 z-40 flex items-center gap-3">
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_INFO.phone1.waUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-600/40 hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping -z-10"></span>

        {/* Tooltip on hover */}
        <span className="hidden sm:inline-block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-cyan-500/20">
          تواصل معنا عبر واتساب
        </span>
      </a>
    </aside>
  );
};
