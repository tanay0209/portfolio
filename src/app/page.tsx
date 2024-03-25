import { HeroSection, About, Experience, SkillSection, ContactSection } from "@/components";
import ProjectSection from "@/components/ProjectSection";


export default function Home() {
  return (
    <div className="text-white bg-gradient-to-br from-zinc-900 to-slate-700">
      <HeroSection />
      <About />
      <Experience />
      <ProjectSection />
      <SkillSection />
      <footer
        className="text-center p-4"
      >Designed and Developed by Tanay | 2024</footer>
    </div>
  );
}
