import { useState } from 'react';
import { useCounter } from './hooks/useCounter';
import { useHistory } from './hooks/useHistory';
import { useTheme } from './hooks/useTheme';
import { HistoryEntry } from './types';

type Tab = 'counter' | 'history';

function formatTime(timestamp: number): string {
  const d = new Date(timestamp);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
}

function Header({ onToggleTheme }: { onToggleTheme: () => void }) {
  return (
    <header className="bg-[#f9f9ff] dark:bg-slate-950 flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40">
      <div className="text-lg font-bold text-[#4648d4] dark:text-indigo-300 font-headline tracking-tight">
        Sayac-2873239
      </div>
      <button
        onClick={onToggleTheme}
        aria-label="Tema Değiştir"
        className="text-[#4648d4] dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors scale-95 active:scale-90 duration-200 p-2 rounded-full flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-2xl">dark_mode</span>
      </button>
    </header>
  );
}

function HistorySection({ history }: { history: HistoryEntry[] }) {
  if (history.length === 0) {
    return (
      <section className="mt-8 bg-surface-container-low rounded-[24px] p-8 flex flex-col items-center text-center gap-4 border border-outline-variant/10">
        <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant mb-2">
          <span className="material-symbols-outlined text-3xl opacity-80" style={{ fontVariationSettings: "'FILL' 0" }}>hourglass_empty</span>
        </div>
        <h2 className="font-body text-[1.375rem] font-semibold text-on-surface">Geçmiş</h2>
        <p className="font-body text-[0.875rem] text-on-surface-variant max-w-[280px] leading-[120%]">
          Henüz işlem yapılmadı. Başlamak için yukarıdaki butonları kullanın.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col gap-6 max-w-2xl">
      <h2 className="font-headline text-headline-md font-bold text-on-surface px-2">Geçmiş İşlemler</h2>
      <div className="flex flex-col gap-4">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="bg-surface-container-lowest/80 backdrop-blur-[12px] p-5 rounded-lg flex items-center justify-between border border-outline-variant/20 shadow-sm transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-high text-primary w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">add</span>
              </div>
              <div>
                <p className="font-body text-body-md font-medium text-on-surface">
                  Değer Arttırıldı (+1)
                </p>
                <p className="font-body text-xs text-on-surface-variant opacity-70 mt-1">
                  Sayaç: {entry.value}
                </p>
              </div>
            </div>
            <span className="font-body text-xs text-on-surface-variant whitespace-nowrap">{formatTime(entry.timestamp)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function BottomNav({
  activeTab,
  onTabChange,
}: {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}) {
  return (
    <nav className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl docked full-width bottom-0 rounded-t-[32px] shadow-[0_-4px_20px_rgba(70,72,212,0.08)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4">
      <button
        onClick={() => onTabChange('counter')}
        className={`flex flex-col items-center justify-center rounded-[20px] px-6 py-2 transition-all duration-300 ${
          activeTab === 'counter'
            ? 'bg-[#f0f3ff] dark:bg-indigo-900/40 text-[#4648d4] dark:text-indigo-200'
            : 'text-slate-400 dark:text-slate-500'
        }`}
      >
        <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: activeTab === 'counter' ? "'FILL' 1" : "'FILL' 0" }}>add_circle</span>
        <span className="font-body text-[11px] font-medium">Sayaç</span>
      </button>
      <button
        onClick={() => onTabChange('history')}
        className={`flex flex-col items-center justify-center rounded-[20px] px-6 py-2 transition-all duration-300 ${
          activeTab === 'history'
            ? 'bg-[#f0f3ff] dark:bg-indigo-900/40 text-[#4648d4] dark:text-indigo-200'
            : 'text-slate-400 dark:text-slate-500'
        }`}
      >
        <span className="material-symbols-outlined text-2xl mb-1" style={{ fontVariationSettings: activeTab === 'history' ? "'FILL' 1" : "'FILL' 0" }}>history</span>
        <span className="font-body text-[11px] font-medium">Geçmiş</span>
      </button>
    </nav>
  );
}

export default function App() {
  const { count, increment, decrement, reset } = useCounter();
  const { history, addEntry, clearHistory } = useHistory();
  const { toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<Tab>('counter');

  const handleIncrement = () => {
    increment();
    addEntry(count + 1, 'increment');
  };

  const handleDecrement = () => {
    decrement();
    addEntry(count - 1, 'decrement');
  };

  const handleReset = () => {
    reset();
    clearHistory();
    addEntry(0, 'reset');
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container pb-24 md:pb-0">
      <Header onToggleTheme={toggleTheme} />
      <main className="flex-1 w-full max-w-md mx-auto px-6 py-8 flex flex-col gap-12 md:max-w-2xl md:justify-center">
        <section className="flex flex-col items-center relative">
          <button
            onClick={handleReset}
            className="absolute -top-4 right-0 md:right-8 text-primary font-label text-[0.75rem] font-medium hover:bg-surface-container px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">restart_alt</span>
            Sıfırla
          </button>
          <div className="py-12 flex justify-center items-center">
            <h1 className="font-headline text-[8rem] sm:text-[10rem] font-bold text-on-surface leading-none tracking-tighter">
              {count}
            </h1>
          </div>
          <div className="flex items-end justify-center gap-6 mt-4">
            <button
              onClick={handleDecrement}
              className="w-16 h-16 rounded-[12px] bg-secondary-container text-on-secondary-container flex items-center justify-center transition-transform active:scale-95 hover:bg-secondary-fixed cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl">remove</span>
            </button>
            <button
              onClick={handleIncrement}
              className="w-24 h-24 rounded-[16px] bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center transition-transform active:scale-90 shadow-[0_12px_24px_-8px_rgba(70,72,212,0.4)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-5xl font-light">add</span>
            </button>
          </div>
        </section>
        <HistorySection history={history} />
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
