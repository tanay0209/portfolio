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
        title: 'UnSocial',
        description: 'UnSocial facilitates connections within college communities, matching individuals based on shared interests or project needs. Whether seeking collaborators for projects or event participants, UnSocial provides a platform to discover like-minded peers.',
        tech: ['Flutter', 'Dart', 'Figma',],
        github: null,
        live: null,
        shadow: "shadow-[6px_6px_0px_1px_#C0A81F]"

    },
    {
        title: 'AskAway',
        description: 'AskAway provides a way to ask questions to others while keeping your identity secret, integrated with gemini AI it also suggests messages that can be asked.',
        tech: ['Nextjs', 'Typescript', 'Tailwind CSS', 'MongoDB'],
        github: null,
        live: 'https://ask-away.vercel.app/',
        shadow: "shadow-[6px_6px_0px_1px_#4E5865]"

    },
    {
        title: 'Cinefolio',
        description: 'Cinefolio is website where ratings for a movie can be checked or if you need some recommendations definitely check Cinefolio out.',
        tech: ['Reactjs', 'Tailwind CSS', 'Bootstrap'],
        github: 'https://github.com/tanay0209/Cinefolio',
        live: null,
        shadow: "shadow-[6px_6px_0px_1px_#11879A]"

    },
    {
        title: 'TicTacBattle',
        description: 'TicTacBattle is a multiplayer tic-tac-toe application built using flutter and nodejs leveraging sockets to provide realtime functionlaity.',
        tech: ['Nodejs', 'Express.js', 'Flutter', "Socket.io", "MongoDB"],
        github: 'https://github.com/tanay0209/tictactoe',
        live: null,
        shadow: "shadow-[6px_6px_0px_1px_#091A53]"

    },
    {
        title: 'Blog Post',
        description: 'Blog Post is an application where you can share your thoughts and learnings in form of blogs and read the blogs of others as well.',
        tech: ['Flutter', 'Dart', 'Firebase'],
        github: 'https://github.com/tanay0209/Blog-Post',
        live: null,
        shadow: "shadow-[6px_6px_0px_1px_#BB25CC]"
    },
    {
        title: 'Chatter',
        description: 'Chatter is a web application where users can chat with their friends, developed using Reactjs, ChakraUI and Nodejs, leveraging Sockets for realtime chatting.',
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
