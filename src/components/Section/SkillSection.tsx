import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export const languages = [
    { name: 'Javascript', image: '/assets/skills/javascript.svg' },
    { name: 'Dart', image: '/assets/skills/dart.svg' },
    { name: 'Java', image: '/assets/skills/java.svg' },
    { name: 'Typescript', image: '/assets/skills/typescript.svg' },
];

export const frontendSkills = [
    { name: 'ReactJs', image: '/assets/skills/react.svg' },
    { name: 'NextJs', image: '/assets/skills/nextdotjs.svg' },
    { name: 'Flutter', image: '/assets/skills/flutter.svg' },
    { name: 'HTML', image: '/assets/skills/html5.svg' },
    { name: 'CSS', image: '/assets/skills/css3.svg' },
    { name: 'Tailwind CSS', image: '/assets/skills/tailwindcss.svg' },
    { name: 'Bootstrap', image: '/assets/skills/bootstrap.svg' },
];

export const backendSkills = [
    { name: 'NodeJs', image: '/assets/skills/nodedotjs.svg' },
    { name: 'Express', image: '/assets/skills/express.svg' },
    { name: 'MongoDB', image: '/assets/skills/mongodb.svg' },
    { name: 'Firebase', image: '/assets/skills/firebase.svg' },
    { name: 'Redis', image: '/assets/skills/redis.svg' }

];

export const otherSkills = [
    { name: 'Git', image: '/assets/skills/git.svg' },
    { name: 'Jira', image: '/assets/skills/jira.svg' },
    { name: 'Figma', image: '/assets/skills/figma.svg' },
    { name: 'Android Studio', image: '/assets/skills/androidstudio.svg' },
    { name: 'Github', image: '/assets/skills/github.svg' },
    { name: 'VS Code', image: '/assets/skills/visualstudiocode.svg' },
    { name: 'Postman', image: '/assets/skills/postman.svg' },
];

function SkillSection() {
    return (
        <>
            <h2 className='font-bold md:text-5xl text-3xl max-w-lg md:max-w-7xl p-8 mx-auto text-left'>Technologies</h2>
            <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={languages}
                    direction="right"
                    speed="slow"
                />

                <InfiniteMovingCards
                    items={frontendSkills}
                    direction="left"
                    speed="slow"
                />

                <InfiniteMovingCards
                    items={backendSkills}
                    direction="right"
                    speed="slow"
                />

                <InfiniteMovingCards
                    items={otherSkills}
                    direction="left"
                    speed="slow"
                />
            </div>
        </>
    )
}

export default SkillSection


