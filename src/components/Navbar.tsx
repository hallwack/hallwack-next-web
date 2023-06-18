import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent px-16 h-20 flex justify-between items-center sticky border-b-[0.5px] border-zinc-400">
      <div>
        <h1 className="font-bold text-3xl">
          <Link href="/">Raihan Adam</Link>
        </h1>
      </div>
      <ul className="flex items-center gap-2 text-sm">
        <NavLink link="/">Home</NavLink>
        <NavLink link="/about">About</NavLink>
        <NavLink link="/projects">Projects</NavLink>
        <NavLink link="/skills">Skills</NavLink>
        <NavLink link="/contacts">Contacts</NavLink>
      </ul>
    </nav>
  );
}
