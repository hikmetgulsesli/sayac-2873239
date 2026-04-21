import type { HistoryEntry } from '../types';

interface HistoryListProps {
  history: HistoryEntry[];
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function getActionLabel(action: HistoryEntry['action']): string {
  switch (action) {
    case 'increment':
      return 'Değer Arttırıldı (+1)';
    case 'decrement':
      return 'Değer Azaltıldı (-1)';
    case 'reset':
      return 'Sıfırlandı';
  }
}

function getActionIcon(action: HistoryEntry['action']): string {
  switch (action) {
    case 'increment':
      return 'add';
    case 'decrement':
      return 'remove';
    case 'reset':
      return 'refresh';
  }
}

export function HistoryList({ history }: HistoryListProps) {
  if (history.length === 0) {
    return (
      <div className="w-full flex flex-col gap-6 max-w-2xl">
        <h2 className="font-headline text-headline-md font-bold text-on-surface px-2">Geçmiş İşlemler</h2>
        <div className="bg-surface-container-lowest/80 backdrop-blur-[12px] p-8 rounded-lg flex flex-col items-center justify-center border border-outline-variant/20">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-40 mb-2">history</span>
          <p className="font-body text-body-md text-on-surface-variant">Henüz işlem yok</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6 max-w-2xl">
      <h2 className="font-headline text-headline-md font-bold text-on-surface px-2">Geçmiş İşlemler</h2>
      <div className="flex flex-col gap-4">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="bg-surface-container-lowest/80 backdrop-blur-[12px] p-5 rounded-lg flex items-center justify-between border border-outline-variant/20 shadow-sm transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-high text-primary w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">{getActionIcon(entry.action)}</span>
              </div>
              <div>
                <p className="font-body text-body-md font-medium text-on-surface">{getActionLabel(entry.action)}</p>
                <p className="font-body text-xs text-on-surface-variant opacity-70 mt-1">Sayaç: {entry.value}</p>
              </div>
            </div>
            <span className="font-body text-xs text-on-surface-variant whitespace-nowrap">{formatTime(entry.timestamp)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}