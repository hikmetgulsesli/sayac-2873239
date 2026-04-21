interface CounterDisplayProps {
  count: number;
}

export function CounterDisplay({ count }: CounterDisplayProps) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-2">
      <span className="font-headline font-bold text-[6rem] md:text-[8rem] leading-none text-primary tracking-tighter">
        {count}
      </span>
      <span className="font-body text-body-md text-on-surface-variant uppercase tracking-widest opacity-60">
        Mevcut Değer
      </span>
    </div>
  );
}