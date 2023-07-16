"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import { Laptop, Menu, Moon, Sun } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [themeToggle, setThemeToggle] = useState<boolean>(false);
  const pathname = usePathname();
  const savedPathname = useRef(pathname);

  const handleToggleTheme = useCallback(() => {
    setThemeToggle(!themeToggle);
  }, [themeToggle]);

  const handleSidebar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  useEffect(() => {
    if (savedPathname.current !== pathname) {
      handleSidebar();
      savedPathname.current = pathname;
    }
  }, [handleSidebar, pathname]);

  return (
    <>
      <nav className="w-full z-50 bg-transparent px-16 h-20 flex justify-between items-center sticky top-0 backdrop-blur-lg border-b-[0.5px] border-zinc-400">
        <h1 className="font-bold text-3xl">
          <Link href="/">Raihan Adam</Link>
        </h1>
        <div className="flex gap-4 items-center">
          <ul className="lg:flex hidden items-center gap-2 text-sm">
            <NavLink link="/">Home</NavLink>
            <NavLink link="/about">About</NavLink>
            <NavLink link="/projects">Projects</NavLink>
            <NavLink link="/skills">Skills</NavLink>
          </ul>
          <div className="lg:hidden">
            <Menu onClick={handleSidebar} />
          </div>
          <div className="inline-block relative group">
            <button
              onClick={handleToggleTheme}
              className="py-2 px-3 hover:bg-zinc-300 rounded"
            >
              <Moon size={20} />
              <ul
                className={clsx(
                  "absolute mt-4 py-2 bg-zinc-50 px-2 rounded right-0 space-y-2",
                  {
                    hidden: !themeToggle,
                    block: themeToggle,
                  }
                )}
              >
                <li className="inline-flex gap-2 py-2 px-6 hover:bg-zinc-300 rounded">
                  <span>Light</span>
                </li>
                <li className="inline-flex gap-2 py-2 px-6 hover:bg-zinc-300 rounded">
                  <span>Dark</span>
                </li>
                <li className="inline-flex gap-2 py-2 px-6 hover:bg-zinc-300 rounded">
                  <span>System</span>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </nav>
      {sidebar && (
        <ul className="absolute z-10 lg:hidden w-full bg-zinc-100 h-screen flex flex-col items-center justify-center gap-8">
          <NavLink link="/">Home</NavLink>
          <NavLink link="/about">About</NavLink>
          <NavLink link="/projects">Projects</NavLink>
          <NavLink link="/skills">Skills</NavLink>
        </ul>
      )}
    </>
  );
}
