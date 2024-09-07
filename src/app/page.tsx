
import About from "@/components/Section/AboutSection";
import ContactSection from "@/components/Section/ContactSection";
import Experience from "@/components/Section/ExperienceSection";
import HeroSection from "@/components/Section/HeroSection";
import ProjectSection from "@/components/Section/ProjectSection";
import SkillSection from "@/components/Section/SkillSection";




export default function Home() {
  const footerText = "Developed with <3"
  return (
    <div className="text-white bg-slate-800 overflow-hidden">
      <HeroSection />
      <About />
      <Experience />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <footer
        className="p-4 text-left md:text-right text-lg text-lime-200"
      >{footerText}</footer>
    </div>
  );
}
