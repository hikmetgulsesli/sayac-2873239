interface ActionButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function ActionButtons({ onIncrement, onDecrement, onReset }: ActionButtonsProps) {
  return (
    <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-center gap-6">
      <button
        onClick={onDecrement}
        className="bg-secondary-container text-on-secondary-container rounded-lg px-8 py-5 flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto justify-center shadow-sm"
      >
        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          remove
        </span>
        <span className="font-label text-label-md font-medium tracking-wide">Azalt</span>
      </button>
      
      <button
        onClick={onIncrement}
        className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl px-12 py-6 flex items-center gap-4 transition-transform hover:scale-[1.05] active:scale-[0.95] hover:shadow-[0_8px_32px_rgba(70,72,212,0.3)] w-full sm:w-auto justify-center shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          add
        </span>
        <span className="font-label text-lg font-semibold tracking-wide">Arttır</span>
      </button>
      
      <button
        onClick={onReset}
        className="bg-transparent text-primary hover:bg-primary/5 rounded-lg px-6 py-4 flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
      >
        <span className="material-symbols-outlined text-lg">rotate_left</span>
        <span className="font-label text-label-md font-medium tracking-wide opacity-80">Sıfırla</span>
      </button>
    </div>
  );
}