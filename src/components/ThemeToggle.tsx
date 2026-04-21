interface ThemeToggleProps {
  onToggle: () => void;
}

export function ThemeToggle({ onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Tema Değiştir"
      className="text-[#4648d4] dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors scale-95 active:scale-90 duration-200 p-2 rounded-full flex items-center justify-center cursor-pointer"
    >
      <span className="material-symbols-outlined text-2xl">dark_mode</span>
    </button>
  );
}
