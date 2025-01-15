import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Resources } from "@/components/main/projects";
import { About } from "@/components/main/about";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Encryption />
        <Resources />
      </div>
    </main>
  );
}
