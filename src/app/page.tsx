import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home | hallwack.dev",
  },
};

export default function Home() {
  return <div className="my-4">Home</div>;
}
