export const experience = [
    {
        title: "Frontend Developer Intern",
        description: [
            "Developed the frontend of a Progressive Web Application (PWA)",
            "Converted the design mockups into responsive, user friendly website.",
            "Handled the states using Redux toolkit"
        ],
        company: "Hireloom.ai",
        location: "Remote, India",
        duration: "Aug 2024 - Aug 2024",
        technologies: ["ReactJS", "TailwindCSS", "Javascript",]
    },
    {
        title: "Software Developer Intern",
        description: [
            "Developed an efficient user migration helper for onboarding new customers.",
            "Developed reusable component reducing code redundancy.",
            "Performed research on available chatbot development platforms."
        ],
        company: "PySphere Technologies LLP",
        location: "Remote, India",
        duration: "Dec 2023 - May 2024",
        technologies: ["Nextjs", "TailwindCSS", "Typescript", "Java"]
    }
]


import resourcifyy from '../../public/assets/work/resourcifyy.png'
import codeblock from '../../public/assets/work/code-block.png'
import ideaflow from '../../public/assets/work/idea-flow.png'
import askaway from '../../public/assets/work/ask-away.png'

export const projects = [
    {
        image: resourcifyy,
        title: 'Resourcifyy',
        description: 'A community driven platform to find the best resources for learning andt tools available over internet. Users can upvote or downvote them, and add new resources to the platform. The platform is designed to help users find the best resources for learning new skills and technologies.',
        tech: ['Nextjs', 'Typescript', 'TailwindCSS', 'PostgreSQL', "Prisma", "Zustand", "Shadcn"],
        live: 'https://www.resourcifyy.xyz/',
        github: null
    },
    {
        image: askaway,
        title: 'AskAway',
        description: 'A platform that enables users to ask questions anonymously, fostering open communication and genuine responses without revealing identity. Perfect for seeking advice, opinions, or feedback in a safe and private environment.',
        tech: ['Nextjs', 'Typescript', 'TailwindCSS', 'MongoDB', "Shadcn"],
        github: "https://github.com/tanay0209/AskAway",
        live: 'https://ask-away.vercel.app/',
    },
    {
        image: ideaflow,
        title: 'IdeaFlow',
        description: 'A collaborative tool for idea generation and brainstorming. With real-time updates and collaboration features, users may set up organizations, collaborate on a shared canvas board, and develop ideas intuitively. Ideal for groups wishing to foster invention and creativity among themselves.',
        tech: ['Nextjs', 'TailwindCSS', 'Typescript', "Convex", "Clerk", "Shadcn"],
        github: 'https://github.com/tanay0209/IdeaFlow',
        live: "https://idea-flow-dev.vercel.app/",

    },
    {
        image: codeblock,
        title: 'Code Block',
        description: 'Code Block is an online compiler for HTML, CSS, and Vanilla JavaScript. It makes the procedure easier by eliminating the requirement to make new folders and files for every project. Users are able to browse and share other users code as well as store and share their own.',
        tech: ['Reactjs', 'Typescript', 'Nodejs', "Expressjs", "TailwindCSS", "Redux", "MongoDB", "Shadcn"],
        github: 'https://github.com/tanay0209/code-block',
        live: "https://code-block-dev.vercel.app/",
    },
]

import findbuddies from "../../public/assets/designs/find-buddies.png"
import clientup from "../../public/assets/designs/client-up.png"
import rmax from "../../public/assets/designs/r-max.png"
import payup from "../../public/assets/designs/payup.png"
import japantravels from "../../public/assets/designs/japan-travels.png"
export const designs = [
    {
        image: findbuddies,
        title: 'Find Buddies ( Hero Section )',
        description: 'Find Buddies is a platform that allows users to find and connect with like-minded individuals. Users can create a profile, search for other users based on their interests, and connect with them. The platform is designed to help users find friends with similar interests and hobbies.',
        tech: ["Reactjs", "TailwindCSS", "Javascript"],
        live: 'https://find-buddies.netlify.app/',
        github: "https://github.com/tanay0209/find-buddies"
    },
    {
        image: clientup,
        title: 'ClientUp',
        description: 'ClientUp is a platform that allows users to find and connect with clients for their business. Users can create a profile, search for clients based on their requirements, and connect with them. The platform is designed to help users find clients for their business and grow their network.',
        tech: ["Reactjs", "TailwindCSS", "Javascript", "FramerMotion"],
        live: 'https://client-up.netlify.app/',
        github: "https://github.com/tanay0209/client-up"
    },
    {
        image: rmax,
        title: 'RMax',
        description: 'RMax is a website designed to improve business impact by providing tools and resources for better decision-making and strategy development.',
        tech: ["Reactjs", "TailwindCSS", "Javascript", "FramerMotion"],
        live: 'https://r-max.netlify.app/',
        github: "https://github.com/tanay0209/r-max"
    },
    {
        image: payup,
        title: 'Payup ( Hero Section )',
        description: 'PayUp is a digital payment solution platform that allows users to split bills and expenses with friends and family. Users can create a group, add expenses, and split the bill with friends. The platform is designed to help users manage their expenses and split bills easily.',
        tech: ["Reactjs", "TailwindCSS", "Javascript"],
        live: 'https://pay-up.netlify.app/',
        github: "https://github.com/tanay0209/pay-up"
    },
    {
        image: japantravels,
        title: 'Japan Travels ( Hero Section )',
        description: 'Japan Travels is a travel website that provides information about popular tourist destinations in Japan. Users can explore different cities, attractions, and activities in Japan. The platform is designed to help users plan their trip to Japan and discover new places to visit.',
        tech: ["Reactjs", "TailwindCSS", "Javascript"],
        live: 'https://japan-travels.netlify.app/',
        github: "https://github.com/tanay0209/japan-travels"
    }
]
