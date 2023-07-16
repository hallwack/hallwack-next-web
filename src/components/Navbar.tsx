"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLink from "./NavLink";
import { Menu } from "lucide-react";

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
  }, [handleSidebar, pathname]);

  return (
    <>
      <nav className="w-full z-50 bg-transparent px-16 h-20 flex justify-between items-center sticky top-0 backdrop-blur-lg border-b-[0.5px] border-zinc-400">
        <h1 className="font-bold text-3xl">
          <Link href="/">Raihan Adam</Link>
        </h1>
        <ul className="lg:flex hidden items-center gap-2 text-sm">
          <NavLink link="/">Home</NavLink>
          <NavLink link="/about">About</NavLink>
          <NavLink link="/projects">Projects</NavLink>
          <NavLink link="/skills">Skills</NavLink>
        </ul>
        <div className="lg:hidden">
          <Menu onClick={handleSidebar} />
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
