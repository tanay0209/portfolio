
import SectionLayout from "@/components/Section/SectionLayout";
import ExperienceCard from "@/components/ui/experience-card";
import { Project } from "@/components/ui/Project";
import { experience, projects } from "@/lib/data";

export default function Home() {
  const footerText = "Developed with <3"
  return (
    <SectionLayout classname="flex flex-col items-start min-h-dvh space-y-8 w-full">
      {/* HERO SECTION */}
      <div>
        <h1>Konnichiwa! I&apos;m Tanay Jagnani</h1>
        <p>I&apos;m a full stack developer from India. Converting ideas into products, passionate about learning new things and building cool products. </p>
      </div>
      {/* EXPERIENCE SECTION */}
      <h2 className="text-4xl font-bold">Experience</h2>
      <div className="w-full flex-col space-y-4">
        {experience.map((exp, idx) => (
          <ExperienceCard
            title={exp.title}
            description={exp.description}
            company={exp.company}
            location={exp.location}
            duration={exp.duration}
            technologies={exp.technologies}
            key={idx}
          />
        )
        )}
      </div>
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="w-full gap-4 grid grid-cols-1">
        {projects.map((project, idx) => (
          <Project key={idx} description={project.description} title={project.title} github={project.github} live={project.live} tech={project.tech} />
        ))}
      </div>
      <footer
        className="p-4 text-left md:text-right text-lg text-lime-200"
      >{footerText}</footer>
    </SectionLayout>
  );
}
