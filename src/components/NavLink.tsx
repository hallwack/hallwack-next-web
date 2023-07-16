"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

type Props = {
  link: string;
  children: ReactNode;
};

export default function NavLink({ link, children }: Props) {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <li
        className={clsx("text-base font-medium lg:font-normal lg:text-sm py-3 px-8 lg:py-2 lg:px-5 rounded hover:bg-zinc-300 cursor-pointer transition duration-200", {
          "bg-zinc-300": pathname === link,
        })}
      >
        {children}
      </li>
    </Link>
  );
}
