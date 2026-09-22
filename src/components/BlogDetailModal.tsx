import React from 'react';
import { X, Calendar, Clock, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onBookService: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  onClose,
  onBookService,
}) => {
  const { language, t } = useLanguage();

  if (!post) return null;

  const postTitle = language === 'ar' ? post.title : (post.titleEn || post.title);
  const postIntro = language === 'ar' ? post.intro : (post.introEn || post.intro);
  const postDate = language === 'ar' ? post.date : (post.dateEn || post.date);
  const postReadTime = language === 'ar' ? post.readTime : (post.readTimeEn || post.readTime);

  return (
    <div
      id="blog-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="blog-detail-modal-container"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#04162c] border border-slate-200 dark:border-cyan-800/60 shadow-2xl text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-2xl bg-slate-900">
          <img
            src={post.image}
            alt={postTitle}
            style={{ objectPosition: post.imagePosition }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 start-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 transition-all cursor-pointer"
            aria-label={t('modal.close')}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & metadata */}
          <div className="absolute bottom-4 start-6 end-6 text-start">
            <div className="flex items-center gap-3 text-xs text-cyan-300 font-bold mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {postDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {postReadTime}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
              {postTitle}
            </h3>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6 text-start">
          {/* Intro paragraph */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#061d38] border-s-4 border-cyan-500 text-slate-700 dark:text-slate-200 text-base leading-relaxed font-medium">
            {postIntro}
          </div>

          {/* Article sections */}
          <div className="space-y-6">
            {post.sections.map((sec, idx) => {
              const secTitle = language === 'ar' ? sec.title : (sec.titleEn || sec.title);
              const secBody = language === 'ar' ? sec.body : (sec.bodyEn || sec.body);

              return (
                <div key={idx} className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-cyan-300">
                    {secTitle}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {secBody}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to action at end of article */}
          <div className="mt-8 p-6 rounded-2xl bg-cyan-50 dark:bg-[#061e3b] border border-cyan-200 dark:border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-bold text-base text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <span>{t('modal.helpNeeded')}</span>
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-cyan-200/80">
                {t('modal.helpDesc')}
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookService();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              {t('modal.bookNow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
