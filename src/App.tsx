import { useTranslation } from 'react-i18next';
import { Download, Code, Languages, X, Loader2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

function App() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fa' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleManualDownload = () => {
    window.location.href = "https://github.com/goyak-app/goyak-desktop/releases/latest";
  };

  const handleAutoDownload = async () => {
    setIsDownloading(true);
    setDownloadError(false);
    try {
      const response = await fetch("https://api.github.com/repos/goyak-app/goyak-desktop/releases/latest");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      const asset = data.assets.find((a: any) => a.name.endsWith('.exe') || a.name.endsWith('.msi'));
      if (asset && asset.browser_download_url) {
        window.location.href = asset.browser_download_url;
        setTimeout(() => setIsModalOpen(false), 1000);
      } else {
        throw new Error("No Windows installer found");
      }
    } catch (e) {
      setDownloadError(true);
      setTimeout(() => {
        handleManualDownload();
      }, 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
          <a href="https://github.com/goyak-app/goyak-desktop" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
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
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary hover:bg-violet-600 text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              <Download className="w-5 h-5" />
              {t('download')}
            </button>
            <a href="https://github.com/goyak-app/goyak-desktop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold transition-all active:scale-95 sm:hidden">
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

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h3 className="text-xl font-bold text-white">{t('modal.title')}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title={t('modal.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {downloadError ? (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center flex flex-col items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <p>{t('modal.error_fallback')}</p>
                </div>
              ) : isDownloading ? (
                <div className="p-8 rounded-xl bg-primary/10 border border-primary/20 text-primary text-center flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-8 h-8 animate-spin" />
                  <p className="font-medium">{t('modal.downloading')}</p>
                </div>
              ) : (
                <>
                  <button 
                    onClick={handleAutoDownload}
                    className="w-full text-start p-4 rounded-2xl bg-zinc-800/50 hover:bg-primary/20 border border-transparent hover:border-primary/50 transition-all flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                      <Download className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t('modal.auto_download')}</h4>
                      <p className="text-sm text-zinc-400 mt-1">{t('modal.auto_download_desc')}</p>
                    </div>
                  </button>

                  <button 
                    onClick={handleManualDownload}
                    className="w-full text-start p-4 rounded-2xl bg-zinc-800/50 hover:bg-white/10 border border-transparent hover:border-white/20 transition-all flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-zinc-700 text-zinc-300 group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{t('modal.manual_download')}</h4>
                      <p className="text-sm text-zinc-400 mt-1">{t('modal.manual_download_desc')}</p>
                    </div>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
