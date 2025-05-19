export const experience = [
    {
        title: "Assistant System Engineer",
        description: [
            "Independently developed the entire frontend using HTML, CSS, and JavaScript, focusing on responsiveness and user experience",
            "Collaborating in a team project to design and build an Airline Management System simulating real-time flight booking and administrative operations",
            "Developed microservices for flight scheduling, booking management, and flight management using Springboot",
        ],
        company: "Tata Consultancy Services",
        location: "Delhi, India",
        duration: "Mar 2025 - Present",
        technologies: ["Java", "Spring", "Angular", "TailwindCSS", "Typescript", "Javascript"]
    },
    {
        title: "Frontend Developer Intern",
        description: [
            "Created a scalable Progressive Web App (PWA), achieving a 30% reduction in load times and significantly improving user experience.",
            "Implemented a responsive, cross-device UI with lazy loading and code splitting, providing improved performance across desktop and mobile platforms.",
            "Improved front end performance by implementing efficient rendering techniques, reducing initial page load time by 20% and improving overall usability"
        ],
        company: "Hireloom.ai",
        location: "Remote, India",
        duration: "Aug 2024 - Sept 2024",
        technologies: ["ReactJS", "TailwindCSS", "Javascript",]
    },
    {
        title: "Software Developer Intern",
        description: [
            "Developed a scalable user migration service, improving data transfer efficiency by 25% through seamless API integrations",
            "Designed and built reusable, modular components, reducing development time for new features by 15%.",
            "Researched and selected optimal chatbot development tool, creating a fully functional prototype that was successfully demonstrated to the product team.",
        ],
        company: "PySphere Technologies LLP",
        location: "Remote, India",
        duration: "Dec 2023 - July 2024",
        technologies: ["Spring", "Python", "Vue", "Nextjs", "TailwindCSS", "Typescript", "Java"]
    }
]


import resourcifyy from '../../public/assets/work/resourcifyy.png'
import codeblock from '../../public/assets/work/code-block.png'
import askaway from '../../public/assets/work/ask-away.png'

export const projects = [
    {
        image: resourcifyy,
        title: 'Resourcifyy',
        description:
            "A community-driven platform to find the best resources for learning and tools available over the internet. Users can upvote or downvote them, and add new resources to the platform. With 1000+ unique visitors, 4000+ page views, and 200+ resources.",
        tech: ['Nextjs', 'Typescript', 'TailwindCSS', 'PostgreSQL', "Prisma", "Zustand", "Shadcn"],
        live: 'https://www.resourcifyy.xyz/',
        github: null
    },
    {
        image: codeblock,
        title: 'Code Block',
        description:
            "Code Block is an online compiler for HTML, CSS, and Vanilla JavaScript. It simplifies the process by eliminating the need to create new folders and files for each project. Users can browse and share other users' code as well as store and share their own.",
        tech: ['Reactjs', 'Typescript', 'Nodejs', "Expressjs", "TailwindCSS", "Redux", "MongoDB", "Shadcn"],
        github: 'https://github.com/tanay0209/code-block',
        live: "https://code-block-dev.vercel.app/",
    },
    {
        image: askaway,
        title: 'AskAway',
        description:
            "A platform that allows users to ask questions anonymously, ensuring privacy. Encourages open communication and honest responses without revealing identity. Ideal for seeking advice, opinions, or feedback in a secure environment. Provides a safe space for users to express themselves freely.",
        tech: ['Nextjs', 'Typescript', 'TailwindCSS', 'MongoDB', "Shadcn"],
        github: "https://github.com/tanay0209/AskAway",
        live: 'https://ask-away.vercel.app/',
    },
];


import findbuddies from "../../public/assets/designs/find-buddies.png"
import clientup from "../../public/assets/designs/client-up.png"
import rmax from "../../public/assets/designs/r-max.png"
import payup from "../../public/assets/designs/payup.png"
import japantravels from "../../public/assets/designs/japan-travels.png"
export const designs = [
    {
        image: findbuddies,
        title: 'Find Buddies ( Hero Section )',
        description:
            "Find Buddies is a platform that allows users to find and connect with like-minded individuals.",
        tech: ["Reactjs", "TailwindCSS", "Javascript"],
        live: 'https://find-buddies.netlify.app/',
        github: "https://github.com/tanay0209/find-buddies"
    },
    {
        image: clientup,
        title: 'ClientUp',
        description:
            "ClientUp is a platform that allows users to find and connect with clients for their business.",
        tech: ["Reactjs", "TailwindCSS", "FramerMotion"],
        live: 'https://client-up.netlify.app/',
        github: "https://github.com/tanay0209/client-up"
    },
    {
        image: rmax,
        title: 'RMax',
        description:
            "RMax is a website designed to improve business impact by providing tools and resources for better decision-making and strategy development.",
        tech: ["Reactjs", "TailwindCSS", "FramerMotion"],
        live: 'https://r-max.netlify.app/',
        github: "https://github.com/tanay0209/r-max"
    },
    {
        image: payup,
        title: 'Payup ( Hero Section )',
        description:
            "PayUp is a digital payment solution platform that allows users to split bills and expenses with friends and family.",
        tech: ["Reactjs", "TailwindCSS", "Javascript"],
        live: 'https://pay-up.netlify.app/',
        github: "https://github.com/tanay0209/pay-up"
    },
    {
        image: japantravels,
        title: 'Japan Travels ( Hero Section )',
        description:
            "Japan Travels is a travel website that provides information about popular tourist destinations in Japan.",
        tech: ["Reactjs", "TailwindCSS", "Javascript"],
        live: 'https://japan-travels.netlify.app/',
        github: "https://github.com/tanay0209/japan-travels"
    }
];



export const languages = [
    { name: 'HTML', image: '/assets/skills/html5.svg' },
    { name: 'CSS', image: '/assets/skills/css3.svg' },
    { name: 'Javascript', image: '/assets/skills/javascript.svg' },
    { name: 'Dart', image: '/assets/skills/dart.svg' },
    { name: 'Java', image: '/assets/skills/java.svg' },
    { name: 'Typescript', image: '/assets/skills/typescript.svg' },
    { name: 'ReactJs', image: '/assets/skills/react.svg' },
    { name: 'NextJs', image: '/assets/skills/nextdotjs.svg' },
    { name: 'Flutter', image: '/assets/skills/flutter.svg' },
    { name: 'Tailwind CSS', image: '/assets/skills/tailwindcss.svg' },
    { name: 'Bootstrap', image: '/assets/skills/bootstrap.svg' },
    { name: 'Redux', image: '/assets/skills/redux.svg' },
    { name: 'GSAP', image: '/assets/skills/gsap.svg' },
    { name: 'Framer Motion', image: '/assets/skills/framer-motion.svg' },
    { name: 'NodeJs', image: '/assets/skills/nodedotjs.svg' },
    { name: 'Springboot', image: '/assets/skills/spring.svg' },
    { name: 'Express', image: '/assets/skills/express.svg' },
    { name: 'MongoDB', image: '/assets/skills/mongodb.svg' },
    { name: "Python", image: "/assets/skills/python.svg" },
    // { name: 'Firebase', image: '/assets/skills/firebase.svg' },
    { name: 'Redis', image: '/assets/skills/redis.svg' },
    { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    { name: "Prisma", image: "/assets/skills/prisma.svg" },
    { name: 'Git', image: '/assets/skills/git.svg' },
    { name: 'Jira', image: '/assets/skills/jira.svg' },
    { name: "MySQL", image: "/assets/skills/mysql.svg" },
    { name: 'Figma', image: '/assets/skills/figma.svg' },
    { name: 'Android Studio', image: '/assets/skills/androidstudio.svg' },
    { name: 'Github', image: '/assets/skills/github.svg' },
    { name: 'VS Code', image: '/assets/skills/visualstudiocode.svg' },
    { name: 'Postman', image: '/assets/skills/postman.svg' }
];