import { HistoryEntry } from '../types';
import { HistoryItem } from './HistoryItem';

interface HistoryListProps {
  history: HistoryEntry[];
}

export function HistoryList({ history }: HistoryListProps) {
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
          <HistoryItem key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
