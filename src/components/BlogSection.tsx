import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { getStoredBlog } from '../data/store';
import { BlogPost } from '../types';
import { BlogDetailModal } from './BlogDetailModal';
import { useLanguage } from '../context/LanguageContext';

interface BlogSectionProps {
  onBookService: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onBookService }) => {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const loadPosts = () => {
    setPosts(getStoredBlog());
  };

  useEffect(() => {
    loadPosts();
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.type === 'blog') {
        loadPosts();
      }
    };
    window.addEventListener('mesk_store_updated', handleUpdate);
    return () => window.removeEventListener('mesk_store_updated', handleUpdate);
  }, []);

  return (
    <section id="blog" className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/60 dark:bg-[#011427]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('blog.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t('blog.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => {
            const title = language === 'ar' ? post.title : (post.titleEn || post.title);
            const excerpt = language === 'ar' ? post.excerpt : (post.excerptEn || post.excerpt);
            const date = language === 'ar' ? post.date : (post.dateEn || post.date);
            const readTime = language === 'ar' ? post.readTime : (post.readTimeEn || post.readTime);

            return (
              <article
                key={post.slug}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={post.image}
                      alt={title}
                      style={{ objectPosition: post.imagePosition }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                    <span className="absolute bottom-3 start-3 px-2.5 py-1 rounded-md bg-cyan-500 text-slate-950 text-xs font-black">
                      {language === 'ar' ? 'دليل جدة' : 'Jeddah Guide'}
                    </span>
                  </div>

                  {/* Article Header & Excerpt */}
                  <div className="p-5 sm:p-6 text-start">
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-cyan-300/80 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                      {title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-5 sm:p-6 pt-0 mt-auto border-t border-slate-100 dark:border-cyan-950/60 pt-4">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-[#072448] hover:bg-cyan-100 dark:hover:bg-[#092d59] transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>{t('blog.readMore')}</span>
                    <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-1 ${language === 'en' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Reader Modal */}
      <BlogDetailModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onBookService={onBookService}
      />
    </section>
  );
};
