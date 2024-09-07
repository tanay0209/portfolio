"use client";
import SectionLayout from '@/components/Section/SectionLayout';
import FadeIn from '../ui/fade-in';
import Typewriter from '../ui/typewriter-effect';

function About() {
    const aboutMe = [
        "Hey, I'm Tanay Jagnani. I am a Computer Science and Engineering graduate.",
        "I'm a Frontend Web Developer and Flutter Developer based in India. My expertise lies in JavaScript, ReactJS, and Flutter. Presently, I'm exploring Next.js and TypeScript to enhance my skill set and expand my development capabilities.",
        "Other than coding, I have an interest in anime and cricket, and I also love to explore and learn new languages, whether spoken or technical. Currently, I am learning how to speak Japanese.",
        "I wish to travel the world, explore different countries, and interact with new people."
    ];

    return (
        <SectionLayout>
            <h2 className='font-bold md:text-5xl text-3xl'>A little about me!</h2>
            <div className='flex flex-col gap-2 md:text-xl text-base text-justify font-sans'>
                {aboutMe.map((para, index) => {
                    return (
                        <FadeIn
                            key={index}
                            index={index} string={para} />
                    );
                })}
            </div>
        </SectionLayout>
    );
}

export default About;
