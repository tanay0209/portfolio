
import SectionLayout from "@/components/SectionLayout";
import ExperienceCard from "@/components/ui/experience-card";
import { WorkCard } from "@/components/ui/work-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { designs, experience, languages, projects } from "@/lib/data";
import Navbar from "@/components/ui/Navbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";
import { File, Mail } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

export default function Home() {
  const footerText = "Developed with <3 by Tanay"
  return (
    <>
      <Navbar />
      <SectionLayout classname="flex flex-col items-start space-y-8 w-full">

        {/* HERO SECTION */}
        <h1 className="text-4xl pt-4 font-black font-bubblegum">Konnichiwa! I&apos;m Tanay Jagnani</h1>
        <div className="flex flex-col space-y-4 text-justify">
          <p>Welcome to my website! I am Tanay Jagnani, a software engineer from India. I love converting ideas into products and I have been primarily working on frontend development & currently working on my backend development skills.</p>

          <p>I have previously interned at 2 startups, currently working as a system engineer and I love to work in fast faced environment where I get to contribute to the products.</p>

          <p>Currently I am working on <Link href="https://resourcifyy.xyz" className="text-cyan-400" target="_blank">Resourcifyy</Link> <span className="text-sm">(4000+ visits)</span> and <span className="text-cyan-400">Smart Stock</span> (WIP)</p>

          <p>I&apos;m open for work, collaboration and freelance projects.</p>
        </div>

        {/* EXPERIENCE SECTION */}
        <h2 className="text-4xl font-bold font-bubblegum">Experience</h2>
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

        {/* WORK SECTION */}
        <h2 id="projects" className="text-4xl font-bold font-bubblegum">Work</h2>
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
            <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 mt-6">
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


        {/* SKILLS */}
        <h2 id="skills" className="text-4xl font-bold font-bubblegum">What I Know!</h2>
        <div>
          <InfiniteMovingCards
            items={languages.slice(0, 10)}
          />
          <InfiniteMovingCards
            items={languages.slice(10, 20)}
            direction="right"
          />
          <InfiniteMovingCards
            items={languages.slice(20)}
          />
        </div>
        {/* CONTACT */}
        <h2 className="text-4xl font-bold font-bubblegum">Contact</h2>
        <div className="flex flex-col md:flex-row h-full gap-4">
          <div className="space-y-8 justify-between h-full gap-4 w-full md:w-1/2">
            <p className="text-justify">I&apos;m open to new opportunities, collaborations and projects. Feel free to reach out to me on any of the platforms below.</p>
            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <Mail /> tanayjagnani@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <File /> <Link href="https://drive.google.com/drive/folders/1JAJkTCOukxwgJgKUsZ2XZSKJmwNnqFXp" target="_blanks" >Resume</Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link target="_blank" href="https://github.com/tanay0209" className="p-2  hover:border-gray-500 border rounded-full hover:bg-gray-500 hover:text-white cursor-pointer">
                <IconBrandGithub />
              </Link>

              <Link target="_blank" href="https://x.com/_tanay01_" className="p-2 rounded-full  hover:border-black border hover:bg-black hover:text-white cursor-pointer">
                <IconBrandX />
              </Link>

              <Link target="_blank" href="https://www.linkedin.com/in/tanay-jagnani-b90322241/" className="p-2 rounded-full hover:border-blue-700 border hover:bg-blue-700 hover:text-white cursor-pointer">
                <IconBrandLinkedin />
              </Link>

              <Link target="_blank" href="https://www.instagram.com/__k.a.k.a.r.o.t.__" className="p-2 rounded-full  hover:border-pink-500 border hover:bg-pink-500 hover:text-white cursor-pointer">
                <IconBrandInstagram />
              </Link>

              <Link target="_blank" href="https://discord.com/users/479285563019493376" className="p-2 rounded-full  hover:border-indigo-600 border hover:bg-indigo-600 hover:text-white cursor-pointer">
                <IconBrandDiscord />
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
        {/* FOOTER */}
        <footer
          className="py-2 text-left font-bubblegum md:text-right text-lg text-lime-200"
        >{footerText}</footer>
      </SectionLayout>
    </>
  );
}
