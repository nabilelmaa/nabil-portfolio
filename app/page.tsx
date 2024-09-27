import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import { FindMe } from "@/components/FindMe";

export default function Home() {
  return (
    <main className="lg:px-24 custom-cursor-auto ">
      <Hero />
      <Skills />
      <Projects />
      <FindMe />
      <Resume />
    </main>
  );
}
