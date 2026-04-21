interface CounterDisplayProps {
  count: number;
  onReset: () => void;
}

export function CounterDisplay({ count, onReset }: CounterDisplayProps) {
  return (
    <section className="flex flex-col items-center relative">
      <button
        onClick={onReset}
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
    </section>
  );
}