import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="container mx-auto my-24 lg:max-w-4xl">
      <div className="flex flex-col gap-12">
        <div className="relative w-72 h-96 overflow-hidden self-center">
          <Image src="/ava.jpg"
            alt="Raihan Adam"
            fill
            sizes="100vw"
            className="object-cover object-bottom rounded-md"
          />
        </div>
        <div className="text-justify leading-7 tracking-wide space-y-6">
          <p>
            I am a 8th semester student majoring in Informatics Engineering at
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
          <p>
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
          </p>
          <p>
            I am incredibly enthusiastic about advancing my career in web
            development and making meaningful contributions to the industry. I
            am ready to take on new challenges and continually enhance my skills
            through lifelong learning.
          </p>
        </div>
      </div>
    </div>
  );
}
