import { ProjectDetails } from "@/utils/ProjectUtil";
import { Project } from "./Project";
import { SectionLayout } from ".";


const projects = [
    {
        image: '/assets/projects/unsocial.png',
        title: 'UnSocial',
        description: 'UnSocial is an intra college application to find people with similar interests, find people to help you out with your projects or if you need people for some event UnSocial is the right spot to find some.',
        tech: ['Flutter', 'Dart', 'Figma',],
        github: null,
        live: null
    },
    {
        image: '/assets/projects/newspulse.png',
        title: 'NewsPulse',
        description: 'NewsPulse is an one stop solution for all the daily news related to technology, sports, healthcare etc.',
        tech: ['Reactjs', 'Tailwind CSS'],
        github: 'https://github.com/tanay0209/NewsPulse',
        live: null
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
        description: 'It is an application where you can share your thoughts and learnings in form blogs and read the blogs of others as well.',
        tech: ['Flutter', 'Dart', 'Firebase'],
        github: 'https://github.com/tanay0209/Blog-Post',
        live: null
    },
]

function ProjectSection() {
    return (
        <SectionLayout id="projects">
            <h2 className='font-bold md:text-5xl text-3xl mb-8'>Projects</h2>
            <div className="flex flex-col gap-8">
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
