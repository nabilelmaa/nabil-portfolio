import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="lg:p-24">
      <Hero />
      <Skills />
      <Projects />
      <Resume />
    </main>
  );
}
