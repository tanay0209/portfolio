"use client";
import { SectionLayout } from '..'
import Link from 'next/link'

function About() {
    return (
        <SectionLayout>
            <h2 className='font-bold md:text-5xl text-3xl'>A little about me!</h2>
            <div className='flex flex-col gap-4 md:text-xl text-base text-justify font-sans'>
                <p className='mt-4'>Hey, I&apos;m Tanay Jagnani. I am final year student purusing my Bachelor&apos;s degree in Computer Science and Engineerning.  </p>
                <p>I&apos;m a Frontend Web Developer and Flutter Developer based in India. My expertise lies in JavaScript, ReactJS, and Flutter. Presently, I&apso;m exploring Next.js and TypeScript to enhance my skill set and expand my development capabilities.</p>
                <p>Other than coding I have interest in Animes and Cricket and I also love to explore and learn new languages be it spoken or technical, as of now I am learning how to speak Japanese.</p>
                <p>I wish to travel the world, explore different countries and interact with new people.</p>
            </div>

        </SectionLayout>

    )
}

export default About
