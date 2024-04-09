import Background from "@/components/Background";
import GSAP from "@/components/GSAP";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        {/* <Background /> */}
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        {/* <GSAP /> */}
      </div>
    </main>
  );
}
