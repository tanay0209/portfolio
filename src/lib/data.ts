export const experience = [
	{
		title: "Software Development Engineer 1",
		description: [
			"Working on core collections and user-management module responsible for loan onboarding, allocations, payments, document workflows, status tracking, and related loan lifecycle operations.",
			"Developed configurable external integrations enabling clients to fetch data from their own systems in real time, reducing data duplication and improving platform extensibility.",
			"Developed configurable field aliasing capabilities, allowing clients to map platform defined variables to organization specific business terminology.",
			"Implemented retry handling for transient database failures, achieving zero failures on affected endpoints and improving service reliability.",
			"Centralized receipt generation workflow and implemented Kafka driven PDF generation, enabling configurable client specific templates and business rules across multiple receipt types.",
			"Received a Spot Award for demonstrating strong ownership and cross-team collaboration during feature delivery and inter-pod development initiatives.",
		],
		company: "Credgenics",
		location: "Delhi, India",
		duration: "May 2025 - Present",
		technologies: [
			"Python",
			"ReactJS",
			"PostgreSQL",
			"MongoDB",
			"Kafka",
			"Redis",
			"AWS",
			"JavaScript",
			"Grafana",
		],
	},
	{
		title: "Assistant System Engineer",
		description: [
			"Independently developed responsive frontend interfaces for an airline management system with a focus on usability and maintainability.",
			"Designed and implemented Spring Boot microservices for flight scheduling, booking management, and flight operations.",
			"Gained hands-on experience with enterprise application development and microservice-based architectures.",
		],
		company: "Tata Consultancy Services",
		location: "Delhi, India",
		duration: "Mar 2025 - May 2025",
		technologies: ["Java", "Spring", "Angular", "JavaScript"],
	},
	{
		title: "Frontend Developer Intern",
		description: [
			"Built the frontend of a web application from scratch by translating UI/UX designs into reusable and maintainable React components.",
			"Implemented lazy loading and frontend performance optimizations, reducing page load times by 30% during development testing.",
			"Focused on responsive design, modular architecture, and frontend scalability.",
		],
		company: "Hireloom.ai",
		location: "Remote, India",
		duration: "Aug 2024 - Sept 2024",
		technologies: ["ReactJS", "TailwindCSS", "TypeScript"],
	},
	{
		title: "Software Developer Intern",
		description: [
			"Designed reusable frontend components to improve maintainability and development efficiency.",
			"Evaluated multiple chatbot development frameworks and built a proof-of-concept solution for rapid prototyping.",
			"Worked across frontend and backend technologies while contributing to product experimentation initiatives.",
		],
		company: "PySphere Technologies LLP",
		location: "Remote, India",
		duration: "Dec 2023 - July 2024",
		technologies: ["Spring", "Nextjs", "TailwindCSS", "TypeScript", "Java"],
	},
];

import resourcifyy from "../../public/assets/work/resourcifyy.png";
import codeblock from "../../public/assets/work/code-block.png";
import askaway from "../../public/assets/work/ask-away.png";

export const projects = [
	{
		image: resourcifyy,
		title: "Resourcifyy",
		description:
			"Resourcifyy is a resource aggregation platform built to help people discover and organize high quality resources through structured categorization and community driven interactions. The platform currently hosts over 200 curated resources across 10+ categories and 50+ subcategories, attracting more than 2,000 unique visitors and generating over 5,000 page views. Implementing features such as resource bookmarking, voting, optimistic UI updates, and Redis-based caching to improve responsiveness and user experience.",
		tech: [
			"Nextjs",
			"Typescript",
			"TailwindCSS",
			"PostgreSQL",
			"Prisma",
			"Redis",
			"Zustand",
			"Shadcn",
		],
		live: "https://www.resourcifyy.xyz/",
		github: null,
	},
	{
		image: codeblock,
		title: "Code Block",
		description:
			"Code Block is an online compiler for HTML, CSS, and Vanilla JavaScript. It simplifies the process by eliminating the need to create new folders and files for each project. Users can browse and share other users' code as well as store and share their own.",
		tech: [
			"Reactjs",
			"Typescript",
			"Nodejs",
			"Expressjs",
			"TailwindCSS",
			"Redux",
			"MongoDB",
			"Shadcn",
		],
		github: "https://github.com/tanay0209/code-block",
		live: "https://code-block-dev.vercel.app/",
	},
	{
		image: askaway,
		title: "AskAway",
		description:
			"A platform that allows users to ask questions anonymously, ensuring privacy. Encourages open communication and honest responses without revealing identity. Ideal for seeking advice, opinions, or feedback in a secure environment. Provides a safe space for users to express themselves freely.",
		tech: ["Nextjs", "Typescript", "TailwindCSS", "MongoDB", "Shadcn"],
		github: "https://github.com/tanay0209/AskAway",
		live: "https://ask-away.vercel.app/",
	},
];

import findbuddies from "../../public/assets/designs/find-buddies.png";
import clientup from "../../public/assets/designs/client-up.png";
import rmax from "../../public/assets/designs/r-max.png";
import payup from "../../public/assets/designs/payup.png";
import japantravels from "../../public/assets/designs/japan-travels.png";
export const designs = [
	{
		image: findbuddies,
		title: "Find Buddies ( Hero Section )",
		description:
			"Find Buddies is a platform that allows users to find and connect with like-minded individuals.",
		tech: ["Reactjs", "TailwindCSS", "Javascript"],
		live: "https://find-buddies.netlify.app/",
		github: "https://github.com/tanay0209/find-buddies",
	},
	{
		image: clientup,
		title: "ClientUp",
		description:
			"ClientUp is a platform that allows users to find and connect with clients for their business.",
		tech: ["Reactjs", "TailwindCSS", "FramerMotion"],
		live: "https://client-up.netlify.app/",
		github: "https://github.com/tanay0209/client-up",
	},
	{
		image: rmax,
		title: "RMax",
		description:
			"RMax is a website designed to improve business impact by providing tools and resources for better decision-making and strategy development.",
		tech: ["Reactjs", "TailwindCSS", "FramerMotion"],
		live: "https://r-max.netlify.app/",
		github: "https://github.com/tanay0209/r-max",
	},
	{
		image: payup,
		title: "Payup ( Hero Section )",
		description:
			"PayUp is a digital payment solution platform that allows users to split bills and expenses with friends and family.",
		tech: ["Reactjs", "TailwindCSS", "Javascript"],
		live: "https://pay-up.netlify.app/",
		github: "https://github.com/tanay0209/pay-up",
	},
	{
		image: japantravels,
		title: "Japan Travels ( Hero Section )",
		description:
			"Japan Travels is a travel website that provides information about popular tourist destinations in Japan.",
		tech: ["Reactjs", "TailwindCSS", "Javascript"],
		live: "https://japan-travels.netlify.app/",
		github: "https://github.com/tanay0209/japan-travels",
	},
];

export const languages = [
	{ name: "ReactJs", image: "/assets/skills/react.svg" },
	{ name: "NextJs", image: "/assets/skills/nextdotjs.svg" },
	{ name: "Typescript", image: "/assets/skills/typescript.svg" },
	{ name: "Javascript", image: "/assets/skills/javascript.svg" },
	{ name: "NodeJs", image: "/assets/skills/nodedotjs.svg" },

	{ name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
	{ name: "Python", image: "/assets/skills/python.svg" },
	{ name: "Java", image: "/assets/skills/java.svg" },
	{ name: "AWS", image: "/assets/skills/aws.svg" },
	{ name: "Kafka", image: "/assets/skills/kafka.svg" },

	{ name: "Angular", image: "/assets/skills/angular.svg" },
	{ name: "Springboot", image: "/assets/skills/spring.svg" },
	{ name: "Express", image: "/assets/skills/express.svg" },
	{ name: "MongoDB", image: "/assets/skills/mongodb.svg" },
	{ name: "Redis", image: "/assets/skills/redis.svg" },

	{ name: "Prisma", image: "/assets/skills/prisma.svg" },
	{ name: "Tailwind CSS", image: "/assets/skills/tailwindcss.svg" },
	{ name: "Redux", image: "/assets/skills/redux.svg" },
	{ name: "Zustand", image: "/assets/skills/zustand.svg" },
	{ name: "Git", image: "/assets/skills/git.svg" },

	{ name: "Github", image: "/assets/skills/github.svg" },
	{ name: "Postman", image: "/assets/skills/postman.svg" },
	{ name: "Jira", image: "/assets/skills/jira.svg" },
	{ name: "Figma", image: "/assets/skills/figma.svg" },
	{ name: "VS Code", image: "/assets/skills/visualstudiocode.svg" },

	{ name: "Framer Motion", image: "/assets/skills/framer-motion.svg" },
	{ name: "HTML", image: "/assets/skills/html5.svg" },
	{ name: "CSS", image: "/assets/skills/css3.svg" },

	// { name: "Dart", image: "/assets/skills/dart.svg" },
	// { name: "Flutter", image: "/assets/skills/flutter.svg" },
	// { name: "Bootstrap", image: "/assets/skills/bootstrap.svg" },
	// { name: "GSAP", image: "/assets/skills/gsap.svg" },
	// { name: 'Firebase', image: '/assets/skills/firebase.svg' },
	// { name: "MySQL", image: "/assets/skills/mysql.svg" },

	{ name: "Android Studio", image: "/assets/skills/androidstudio.svg" },
];
