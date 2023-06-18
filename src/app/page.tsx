import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home | hallwack.dev",
  },
};

export default function Home() {
  return (
    <div className="container mx-auto my-8 max-w-4xl">
      <div className="flex flex-col gap-8">
        <h1 className="tracking-tighter font-mono text-5xl font-semibold text-center">
          A learner, interesting about a new thing, especially about web
          development.
        </h1>
        <div className="leading-10 tracking-wide text-justify space-y-8">
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
          {/* <p>
            Throughout my career journey, I have successfully completed various
            exciting web projects that have had a positive impact. I believe
            that technology can provide innovative solutions to everyday
            challenges, which inspires me to continuously develop my skills and
            knowledge in this field.
          </p>
          <p>
            During my tenure at the startup, I have been involved in the
            development of responsive web applications, appealing user
            interfaces, and integration with various APIs. I am also proficient
            in optimizing website performance and ensuring robust data security.
          </p> */}
        </div>
      </div>
    </div>
  );
}
