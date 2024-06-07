import { HeroSection, About, Experience, SkillSection, ContactSection } from "@/components";
import ProjectSection from "@/components/Section/ProjectSection";


export default function Home() {
  return (
    <div className="text-white bg-black">
      <HeroSection />
      <About />
      <Experience />
      <ProjectSection />
      <SkillSection />
      <footer
        className="px-4"
      >Designed and Developed by Tanay</footer>
    </div>
  );
}
