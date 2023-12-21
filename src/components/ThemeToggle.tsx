"use client";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useState } from "react";

export default function ThemeToggle() {
  const [themeToggle, setThemeToggle] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = useCallback(() => {
    setThemeToggle(!themeToggle);
  }, [themeToggle]);

  return (
    <div className="py-2 px-3 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded">
      <button className="flex items-center justify-center" onClick={handleToggleTheme}>
        {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
      <ul
        className={clsx(
          "absolute mt-4 py-2 bg-zinc-50 dark:bg-zinc-800 px-2 rounded right-0 space-y-2",
          {
            hidden: !themeToggle,
            block: themeToggle,
          },
        )}
      >
        <li
          onClick={() => setTheme("light")}
          className="inline-flex gap-2 py-2 px-6 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded"
        >
          <span>Light</span>
        </li>
        <li
          onClick={() => setTheme("dark")}
          className="inline-flex gap-2 py-2 px-6 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded"
        >
          <span>Dark</span>
        </li>
      </ul>
    </div>
  );
}
