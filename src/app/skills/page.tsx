import { dataSkillsLang, dataSkillsLib, dataTools } from "@/constant";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Skills",
};

export default function Page() {
  return (
    <div className="container mx-auto my-24 max-w-4xl">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold font-mono self-start">
          Skills and Tools
        </h1>
        <div className="space-y-6">
          <h2 className="font-mono font-semibold text-2xl">
            Libraries and Frameworks
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {dataSkillsLib.map((data, index) => (
              <div
                key={index}
                className="lg:w-56 w-full flex lg:flex-col flex-row border border-zinc-400 rounded-lg overflow-hidden"
              >
                <div className="lg:bg-zinc-200 bg-transparent p-8 lg:w-full w-28">
                  <div className="relative lg:w-24 h-24 w-full mx-auto">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="font-semibold text-lg">{data.name}</p>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="font-mono font-semibold text-2xl">
            Programming Language
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {dataSkillsLang.map((data, index) => (
              <div
                key={index}
                className="lg:w-56 w-full flex lg:flex-col flex-row border border-zinc-400 rounded-lg overflow-hidden"
              >
                <div className="lg:bg-zinc-200 bg-transparent p-8 lg:w-full w-28">
                  <div className="relative lg:w-24 h-24 w-full mx-auto">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="font-semibold text-lg">{data.name}</p>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-mono font-semibold text-2xl">Tools</h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {dataTools.map((data, index) => (
              <div
                key={index}
                className="lg:w-56 w-full flex lg:flex-col flex-row border border-zinc-400 rounded-lg overflow-hidden"
              >
                <div className="lg:bg-zinc-200 bg-transparent p-8 lg:w-full w-28">
                  <div className="relative lg:w-24 h-24 w-full mx-auto">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="font-semibold text-lg">{data.name}</p>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
