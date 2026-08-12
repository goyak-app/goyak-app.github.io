import { useTranslation } from 'react-i18next';
import { Download, Code, Languages, Settings2, ShieldCheck, Zap } from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fa' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/mascot.png" alt="Goyak Mascot" className="w-10 h-10 object-contain drop-shadow-md" />
          <span className="font-bold text-xl tracking-tight text-white">{t('title')}</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
          >
            <Languages className="w-4 h-4" />
            {i18n.language === 'en' ? 'فارسی' : 'English'}
          </button>
          <a href="#" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
            <Code className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        <section className="w-full max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            {t('title')} <br/>
            <span className="text-primary">
              {t('subtitle')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary hover:bg-violet-600 text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
              <Download className="w-5 h-5" />
              {t('download')}
            </button>
            <a href="#" className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold transition-all active:scale-95 sm:hidden">
              <Code className="w-5 h-5" />
              {t('github')}
            </a>
          </div>
        </section>

        <section className="w-full max-w-6xl px-6 py-20 flex flex-col gap-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">{t('features.realtime.title')}</h2>
              <p className="text-xl text-zinc-400 leading-relaxed">{t('features.realtime.desc')}</p>
            </div>
            <div className="flex-1">
              <img src="/screen1.png" alt="Dashboard" className="w-full rounded-2xl shadow-2xl border border-white/10" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">{t('features.voice.title')}</h2>
              <p className="text-xl text-zinc-400 leading-relaxed">{t('features.voice.desc')}</p>
            </div>
            <div className="flex-1">
              <img src="/screen2.png" alt="Dubbing in action" className="w-full rounded-2xl shadow-2xl border border-white/10" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-white">{t('features.local.title')}</h2>
              <p className="text-xl text-zinc-400 leading-relaxed">{t('features.local.desc')}</p>
            </div>
            <div className="flex-1">
              <img src="/screen3.png" alt="Settings" className="w-full rounded-2xl shadow-2xl border border-white/10" />
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 border-t border-white/10 text-center text-sm text-zinc-500">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}

export default App
