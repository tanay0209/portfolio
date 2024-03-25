"use client";
import { SectionLayout, ShimmerButton } from '..'
import Link from 'next/link'

function About() {
    return (
        <SectionLayout id='about'>
            <h2 className='font-bold md:text-5xl text-3xl'>A little about me!</h2>
            <div className='flex flex-col gap-4 md:text-xl text-base text-justify font-sans'>
                <p className='mt-4'>Hey, I&apos;m Tanay Jagnani. I am final year student purusing my Bachelor&apos;s degree in Computer Science and Engineerning.  </p>
                <p>I&apos;m a Frontend Web Developer and Flutter Developer from India. I have proficieny in Javascript, ReactJs and Flutter. Currently I am experimenting with Nextjs and Typescript</p>
                <p>Other than coding I have interest in Animes and Cricket and I also love to explore and learn new languages be it spoken or technical, as of now I am learning how to speak Jappanese.</p>
                <p>I wish to travel the world, explore different countries and interact with new people.</p>
            </div>
            <Link
                href='/assets/resume.pdf'
                locale={false}
                target='_blank'
            >
                <ShimmerButton text='Resume' classname='mt-4 hover:scale-110 transition-all duration-200 text-base cursor-pointer' />
            </Link>

        </SectionLayout>

    )
}

export default About
