import Link from "next/link";

export type ProjectDetails = {
    image: string,
    title: string,
    description: string,
    tech: string[],
    github: string | null,
    live: string | null
}

const Content = ({ image, title, description, tech, github, live }: ProjectDetails) => {
    return (
        <div className='flex flex-col p-4 rounded-md gap-4 z-10'  >
            <img
                src={image} alt={title} />
            <div className="flex flex-col justify-between gap-4">
                <h2 className='text-2xl'>{title}</h2>
                <p className='text-base flex gap-2 flex-wrap justify-center'>{tech.map(item => {
                    return <span className="p-2 rounded-lg text-sm" key={item}>{item}</span>
                })}</p>
                <p className='text-sm text-gray-200 text-justify'>{description}</p>
                <div className='flex justify-between gap-2 w-full'>
                    {live && <Link
                        href={live}
                        target="_blank"
                        className='p-2 text-sm hover:text-black px-4 w-full text-center'>Live</Link>}
                    {github && <Link
                        href={github}
                        target="_blank"
                        className='p-2 flex justify-center gap-4 items-center text-sm px-4 w-full text-center'>
                        Github
                        <img
                            height={25}
                            width={25}
                            src="/assets/skills/github1.png" />
                    </Link>}
                </div>
            </div>
        </div>
    );
};

export const ProjectsArray = [
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

export function ProjectContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-2xl text-xl md:text-4xl text-white bg-gradient-to-br from-purple-700 to-violet-900 p-4 md:w-1/2 justify-center items-center">
            {children}
        </div>
    )
}

export const tabs = [
    {
        title: "UnSocial",
        value: "unsocial",
        content: (
            <ProjectContainer>
                <Content {...ProjectsArray[0]} />
            </ProjectContainer>
        ),
    },
    {
        title: "NewsPulse",
        value: "newspulse",
        content: (
            <ProjectContainer>
                <Content {...ProjectsArray[1]} />
            </ProjectContainer>
        ),
    },
    {
        title: "Cinefolio",
        value: "cinefolio",
        content: (
            <ProjectContainer>
                <Content {...ProjectsArray[2]} />
            </ProjectContainer>
        ),
    },
    {
        title: "Blog Post",
        value: "blog-post",
        content: (
            <ProjectContainer>
                <Content {...ProjectsArray[3]} />
            </ProjectContainer>
        ),
    },
];


