import { ProjectDetails } from "@/utils/ProjectUtil";
import { Project } from "@/components/Project";
import SectionLayout from "@/components/Section/SectionLayout";

const projects = [
    {
        image: '/assets/projects/unsocial.png',
        title: 'UnSocial',
        description: 'UnSocial facilitates connections within college communities, matching individuals based on shared interests or project needs. Whether seeking collaborators for projects or event participants, UnSocial provides a platform to discover like-minded peers.',
        tech: ['Flutter', 'Dart', 'Figma',],
        github: null,
        live: null
    },
    {
        image: '/assets/projects/anonymousmsg.png',
        title: 'AskAway',
        description: 'AskAway provides a way to ask questions to others while keeping your identity secret, integrated with gemini AI it also suggests messages that can be asked.',
        tech: ['Nextjs', 'Typescript', 'Tailwind CSS', 'Gemini AI'],
        github: 'https://github.com/tanay0209/anonymousmsg',
        live: 'https://ask-away.vercel.app/'
    },
    {
        image: '/assets/projects/cinefolio.png',
        title: 'Cinefolio',
        description: 'Cinefolio is website where ratings for a movie can be checked or if you need some recommendations definitely check Cinefolio out.',
        tech: ['Reactjs', 'Tailwind CSS', 'Bootstrap'],
        github: 'https://github.com/tanay0209/Cinefolio',
        live: null
    },
    {
        image: '/assets/projects/blogpost.png',
        title: 'Blog Post',
        description: 'Blog Post is an application where you can share your thoughts and learnings in form of blogs and read the blogs of others as well.',
        tech: ['Flutter', 'Dart', 'Firebase'],
        github: 'https://github.com/tanay0209/Blog-Post',
        live: null
    },
]

function ProjectSection() {
    return (
        <SectionLayout>
            <h2 className='font-bold md:text-5xl text-3xl mb-8'>Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    projects.map((project: ProjectDetails) => {
                        return <Project key={project.title} {...project} />
                    })
                }
            </div>
        </SectionLayout>
    )
}

export default ProjectSection
