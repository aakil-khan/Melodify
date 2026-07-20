import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        p-3
        rounded-xl
        transition
        bg-slate-800
        hover:bg-slate-700
        dark:bg-slate-800
        dark:hover:bg-slate-700
        bg-gray-200
        hover:bg-gray-300
      "
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-slate-800" />
      )}
    </button>
  );
}