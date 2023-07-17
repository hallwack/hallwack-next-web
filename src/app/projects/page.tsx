import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <div className="container mx-auto my-24 lg:max-w-4xl">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold font-mono self-start">Projects</h1>
        <div className="flex flex-col gap-16">
          <div className="w-full flex flex-col gap-4">
            <div className="relative overflow-hidden">
              <Image
                src="/projects/Hairnerds.png"
                width={800}
                height={180}
                alt="Hairnerds Studio"
                className="rounded-md object-contain w-full h-full"
              />
            </div>
            <div className="px-12 flex flex-col gap-4">
              <h2 className="font-mono text-3xl font-semibold tracking-tighter">
                Hairnerds Studio
              </h2>
              <p className="text-justify">
                A website for ordering haircuts and hairstyling. Working on
                improvements in user interface.
              </p>
              <a
                href="http://hairnerds.id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-400 transition duration-200 w-fit py-2 px-4 rounded-full inline-flex"
              >
                hairnerds.id <ArrowUpRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="relative overflow-hidden">
              <Image
                src="/projects/Tanoseal.png"
                width={800}
                height={180}
                alt="Tanoseal"
                className="rounded-md object-contain w-full h-full"
              />
            </div>
            <div className="px-12 flex flex-col gap-4">
              <h2 className="font-mono text-3xl font-semibold tracking-tighter">
                Tanoseal E-Commerce
              </h2>
              <p className="text-justify">
                A e-commerce website for companies in Japan. Working on building
                in user and admin interface with some logical business.
              </p>
              <a
                href="http://tanoseal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-400 transition duration-200 w-fit py-2 px-4 rounded-full inline-flex"
              >
                tanoseal.com <ArrowUpRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="relative overflow-hidden">
              <Image
                src="/projects/Hellowork.png"
                width={800}
                height={180}
                alt="Hellowork Edu"
                className="rounded-md object-contain w-full h-full"
              />
            </div>
            <div className="px-12 flex flex-col gap-4">
              <h2 className="font-mono text-3xl font-semibold tracking-tighter">
                Hellowork Education
              </h2>
              <p className="text-justify">
                A website for applying course. Working on building user
                interface and logic in backend.
              </p>
              <a
                href="http://edu.hellowork-asia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-400 transition duration-200 w-fit py-2 px-4 rounded-full inline-flex"
              >
                edu.hellowork-asia.com <ArrowUpRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
