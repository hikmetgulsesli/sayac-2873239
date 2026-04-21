import { useState } from 'react';
import { useCounter } from './hooks/useCounter';
import { useHistory } from './hooks/useHistory';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { CounterDisplay } from './components/CounterDisplay';
import { ActionButtons } from './components/ActionButtons';
import { HistoryList } from './components/HistoryList';

type Tab = 'counter' | 'history';

function Header({ onToggleTheme }: { onToggleTheme: () => void }) {
  return (
    <header className="bg-[#f9f9ff] dark:bg-slate-950 flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40">
      <div className="text-lg font-bold text-[#4648d4] dark:text-indigo-300 font-headline tracking-tight">
        Sayac-2873239
      </div>
      <ThemeToggle onToggle={onToggleTheme} />
    </header>
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
        <section className="flex flex-col items-center">
          <CounterDisplay count={count} onReset={handleReset} />
          <ActionButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </section>
        <HistoryList history={history} />
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
