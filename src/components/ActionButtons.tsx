interface ActionButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

export function ActionButtons({ onIncrement, onDecrement }: ActionButtonsProps) {
  return (
    <div className="flex items-end justify-center gap-6 mt-4">
      <button
        onClick={onDecrement}
        className="w-16 h-16 rounded-[12px] bg-secondary-container text-on-secondary-container flex items-center justify-center transition-transform active:scale-95 hover:bg-secondary-fixed cursor-pointer"
      >
        <span className="material-symbols-outlined text-3xl">remove</span>
      </button>
      <button
        onClick={onIncrement}
        className="w-24 h-24 rounded-[16px] bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center transition-transform active:scale-90 shadow-[0_12px_24px_-8px_rgba(70,72,212,0.4)] cursor-pointer"
      >
        <span className="material-symbols-outlined text-5xl font-light">add</span>
      </button>
    </div>
  );
}
