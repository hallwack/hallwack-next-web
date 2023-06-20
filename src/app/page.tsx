import { Figma, Github, Instagram, Linkedin, Mails } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home | hallwack.dev",
  },
};

export default function Home() {
  return (
    <div className="container mx-auto my-24 lg:max-w-4xl">
      <div className="flex flex-col gap-16">
        <h1 className="tracking-tighter font-mono text-5xl font-semibold text-center">
          A learner, interesting about a new thing, especially about web
          development.
        </h1>
        <div className="leading-8 tracking-wide text-justify space-y-8">
          <p>
            I am a 7th semester student majoring in Informatics Engineering at
            UIN Sunan Gunung Djati Bandung. Over the past two years, I have been
            working as a junior web developer at a startup in Bandung. I have
            expertise in utilizing various frameworks and libraries to build
            websites, including Laravel, React, and ExpressJs.
          </p>
          <p>
            I am highly motivated to learn new things, work diligently, and
            thrive in a team environment. Additionally, I take responsibility
            for assigned tasks, possess a strong willingness to learn and
            improve myself, and have excellent interpersonal skills, especially
            in new and diverse environments.
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <a
            href="https://www.linkedin.com/in/raihan-adam-4011ba1b9"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 hover:bg-zinc-300 rounded-md transition duration-200"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://www.figma.com/@raihanadam"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 hover:bg-zinc-300 rounded-md transition duration-200"
          >
            <Figma size={28} />
          </a>
          <a
            href="https://github.com/hallwack"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 hover:bg-zinc-300 rounded-md transition duration-200"
          >
            <Github size={28} />
          </a>
          <a
            href="https://instagram.com/raihanadamstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 hover:bg-zinc-300 rounded-md transition duration-200"
          >
            <Instagram size={28} />
          </a>
          <a
            href="mailto:hallwack.id@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 hover:bg-zinc-300 rounded-md transition duration-200"
          >
            <Mails size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
