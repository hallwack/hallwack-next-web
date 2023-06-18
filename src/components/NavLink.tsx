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
        className={clsx("py-2 px-5 rounded hover:bg-zinc-600 cursor-pointer", {
          "bg-zinc-600": pathname === link,
        })}
      >
        {children}
      </li>
    </Link>
  );
}
