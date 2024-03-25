'use client'
import { SectionLayout } from '..'
import Typewriter from 'typewriter-effect'
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from 'next/link';
import Image from 'next/image';




function HeroSection() {
    const strings = [
        'Frontend Web Developer',
        'Flutter Developer'
    ];
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <SectionLayout id='home'>
                    <div className='flex flex-col gap-4 justify-center items-center w-full h-screen text-center'>
                        <h2 className='md:text-7xl text-5xl font-bold bg-gradient-to-br from-cyan-500 to-indigo-900 bg-clip-text text-transparent'>Tanay Jagnani</h2>
                        <div className='text-2xl'>

                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(strings[0])
                                        .pauseFor(4000)
                                        .deleteAll()
                                        .pauseFor(2000)
                                        .typeString(strings[1])
                                        .pauseFor(4000)
                                        .deleteAll()
                                        .pauseFor(2000)
                                        .start();
                                }}
                            />
                        </div>
                        <p className='text-gray-300'>Based in Bangalore, India</p>
                        <div className='flex gap-4'>
                            <Link
                                target='_blank'
                                href='mailto:tanayjagnani@gmail.com'
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/contact/gmail.png" alt="Gmail" />
                            </Link>
                            <Link
                                target='_blank'

                                href={'https://github.com/tanay0209'}
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/contact/github.png" alt="Github" />
                            </Link>

                            <Link
                                target='_blank'

                                href={'https://twitter.com/_tanay01_'}
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/contact/twitter.png" alt="Twitter" />
                            </Link>

                            <Link
                                target='_blank'
                                href={'https://www.linkedin.com/in/tanay-jagnani-b90322241/'}
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/contact/linkedin.png" alt="LinkedIn" />
                            </Link>


                        </div>
                    </div>
                </SectionLayout>
            </motion.div>
        </AuroraBackground>
    )
}

export default HeroSection


