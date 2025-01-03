
import SectionLayout from "@/components/Section/SectionLayout";
import ExperienceCard from "@/components/ui/experience-card";
import { WorkCard } from "@/components/ui/work-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { designs, experience, projects } from "@/lib/data";

export default function Home() {
  const footerText = "Developed with <3"
  return (
    <SectionLayout classname="flex flex-col items-start min-h-dvh space-y-8 w-full">
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex md:flex-row items-start gap-4">
        <div className="space-y-2 gap-4">
          <h1 className="text-4xl font-black">Konnichiwa! I&apos;m Tanay Jagnani</h1>
          <p className="text-justify">I&apos;m a full stack developer from India. Converting ideas into products, passionate about learning new things and building cool products. </p>
        </div>
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
      <h2 className="text-4xl font-bold">Work</h2>
      <Tabs defaultValue="project" className="w-full">
        <TabsList className="w-full bg-transparent border">
          <TabsTrigger className="w-1/2 text-white" value="project">
            Projects
          </TabsTrigger>
          <TabsTrigger className="w-1/2 bg-transparent text-white" value="design">
            Web Designs
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="project"
        >
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2">
            {projects.map((project, idx) => (
              <WorkCard key={idx} image={project.image} description={project.description} title={project.title} github={project.github} live={project.live} tech={project.tech} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="design">
          <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2">
            {designs.map((design, idx) => (
              <WorkCard image={design.image} key={idx} description={design.description} title={design.title} github={design.github} live={design.live} tech={design.tech} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <footer
        className="p-4 text-left md:text-right text-lg text-lime-200"
      >{footerText}</footer>
    </SectionLayout>
  );
}
