"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const pathname = usePathname();
  const savedPathname = useRef(pathname);

  const handleSidebar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  useEffect(() => {
    if (savedPathname.current !== pathname) {
      handleSidebar();
      savedPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <nav className="w-full z-50 bg-transparent px-8 lg:px-16 h-20 flex justify-between items-center sticky top-0 backdrop-blur-lg border-b-[0.5px] border-zinc-400">
        <h1 className="font-bold lg:text-3xl text-2xl">Raihan Adam</h1>
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
          <div className="inline-block relative">
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <ul
        className={clsx(
          "z-10 lg:hidden w-full bg-zinc-100 dark:bg-zinc-900 fixed h-screen flex flex-col items-center justify-center gap-8 delay-150 transition-all duration-300",
          sidebar ? "translate-x-0" : "translate-x-full",
        )}
      >
        <NavLink link="/">Home</NavLink>
        <NavLink link="/about">About</NavLink>
        <NavLink link="/projects">Projects</NavLink>
        <NavLink link="/skills">Skills</NavLink>
      </ul>
    </>
  );
}
