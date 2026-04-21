interface ThemeToggleProps {
  onToggle: () => void;
}

export function ThemeToggle({ onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Karanlık Mod Değiştir"
      className="text-primary dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors rounded-full p-2 scale-95 active:scale-90 transition-transform duration-200"
    >
      <span className="material-symbols-outlined text-2xl">dark_mode</span>
    </button>
  );
}