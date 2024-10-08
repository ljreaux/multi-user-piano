import Piano from "@/components/Piano";
import PianoWrapper from "@/components/PianoWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center cursor-none">
      <PianoWrapper />
    </main>
  );
}
