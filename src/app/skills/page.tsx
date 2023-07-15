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
          <div className="grid grid-cols-3 gap-4">
            {dataSkillsLib.map((data, index) => (
              <div
                key={index}
                className="w-56 border border-zinc-400 rounded-lg overflow-hidden"
              >
                <div className="bg-zinc-200 p-8 w-full">
                  <div className="relative w-24 h-24 mx-auto">
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
          <div className="grid grid-cols-3 gap-4">
            {dataSkillsLang.map((data, index) => (
              <div
                key={index}
                className="w-56 border border-zinc-400 rounded-lg overflow-hidden"
              >
                <div className="bg-zinc-200 p-8 w-full">
                  <div className="relative w-24 h-24 mx-auto">
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
          <div className="grid grid-cols-3 gap-4">
            {dataTools.map((data, index) => (
              <div
                key={index}
                className="w-56 border border-zinc-400 rounded-lg overflow-hidden"
              >
                <div className="bg-zinc-200 p-8 w-full">
                  <div className="relative w-24 h-24 mx-auto">
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
