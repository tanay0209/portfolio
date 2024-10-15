import { Project } from "@/components/ui/Project";
import SectionLayout from "@/components/Section/SectionLayout";

export type ProjectDetails = {
    title: string,
    description: string,
    tech: string[],
    github: string | null,
    live: string | null,
    shadow: string
}

const projects = [
    {
        title: 'AskAway',
        description: 'A platform that enables users to ask questions anonymously, fostering open communication and genuine responses without revealing identity. Perfect for seeking advice, opinions, or feedback in a safe and private environment.',
        tech: ['Nextjs', 'Typescript', 'Tailwind CSS', 'MongoDB'],
        github: "https://github.com/tanay0209/AskAway",
        live: 'https://ask-away.vercel.app/',
        shadow: "shadow-[6px_6px_0px_1px_#4E5865]"

    },
    {
        title: 'IdeaFlow',
        description: 'A collaborative tool for idea generation and brainstorming. With real-time updates and collaboration features, users may set up organizations, collaborate on a shared canvas board, and develop ideas intuitively. Ideal for groups wishing to foster invention and creativity among themselves.',
        tech: ['Nextjs', 'Tailwind CSS', 'Typescript', "Convex", "Clerk", "Shadcn"],
        github: 'https://github.com/tanay0209/IdeaFlow',
        live: "https://idea-flow-dev.vercel.app/",
        shadow: "shadow-[6px_6px_0px_1px_#11879A]"

    },
    {
        title: 'Code Block',
        description: 'Code Block is an online compiler for HTML, CSS, and Vanilla JavaScript. It makes the procedure easier by eliminating the requirement to make new folders and files for every project. Users are able to browse and share other users code as well as store and share their own.',
        tech: ['Reactjs', 'Typescript', 'Nodejs', "Expressjs", "TailwindCSS", "Redux Toolkit", "Shadcn", "MongoDB"],
        github: 'https://github.com/tanay0209/code-block',
        live: "https://code-block-dev.vercel.app/",
        shadow: "shadow-[6px_6px_0px_1px_#BB25CC]"
    },
    {
        title: 'Chatter',
        description: 'A dynamic web application that facilitates smooth communication, allowing users to stay in touch with real-time notifications, communicate with friends, and establish group conversations. Designed to facilitate easy, conversational interactions in private and public spaces.',
        tech: ['Reactjs', 'Tailwind CSS', 'Chakra UI', "Socket.io", "MongoDB"],
        github: 'https://github.com/tanay0209/Chatter',
        live: null,
        shadow: "shadow-[6px_6px_0px_1px_#093260]"

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
