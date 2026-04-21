import { HistoryEntry } from '../types';
import { formatTime } from '../utils/time';

interface HistoryItemProps {
  entry: HistoryEntry;
}

function getActionInfo(action: 'increment' | 'decrement' | 'reset') {
  switch (action) {
    case 'increment':
      return { icon: 'add', label: 'Değer Arttırıldı (+1)', iconClass: 'text-primary' };
    case 'decrement':
      return { icon: 'remove', label: 'Değer Azaltıldı (-1)', iconClass: 'text-secondary-container' };
    case 'reset':
      return { icon: 'restart_alt', label: 'Sayaç Sıfırlandı', iconClass: 'text-tertiary' };
  }
}

export function HistoryItem({ entry }: HistoryItemProps) {
  const action = entry.action || 'increment';
  const info = getActionInfo(action);

  return (
    <div className="bg-surface-container-lowest/80 backdrop-blur-[12px] p-5 rounded-lg flex items-center justify-between border border-outline-variant/20 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className={`bg-surface-container-high ${info.iconClass} w-10 h-10 rounded-full flex items-center justify-center`}>
          <span className="material-symbols-outlined text-sm">{info.icon}</span>
        </div>
        <div>
          <p className="font-body text-body-md font-medium text-on-surface">
            {info.label}
          </p>
          <p className="font-body text-xs text-on-surface-variant opacity-70 mt-1">
            Sayaç: {entry.value}
          </p>
        </div>
      </div>
      <span className="font-body text-xs text-on-surface-variant whitespace-nowrap">{formatTime(entry.timestamp)}</span>
    </div>
  );
}
