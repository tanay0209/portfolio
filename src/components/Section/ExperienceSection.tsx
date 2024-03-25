import React from 'react'
import { SectionLayout } from '..'
import Image from 'next/image'

function Experience() {
    return (
        <SectionLayout id='about'>
            <h2 className='font-bold md:text-5xl text-3xl'>Experience</h2>
            <div className='flex flex-col gap-4 mt-8 rounded p-6'>
                <div className='flex justify-between'>
                    <h3 className='text-xl font-semibold'>PySphere Research & Development Labs</h3>
                    <p className='text-sm text-gray-300'>Dec&apos;23 - Mar&apos;24</p>
                </div>
                <p className='text-lg text-gray-200'>Developer Intern</p>
                <ul className='ml-4 list-disc text-md'>
                    <li>Developed an efficient user migration service, increasing the efficieny by 20%</li>
                    <li>Developed reusuable component reducing redudancy.</li>
                    <li>Performed research on available chatbot development platforms.</li>
                </ul>
                <div className='flex gap-6 w-full'>
                    <Image
                        height={40}
                        width={40}
                        src="/assets/skills/nextjs.png" alt="" />
                    <Image
                        height={40}
                        width={40}
                        src="/assets/skills/typescript.png" alt="" />
                    <Image
                        height={40}
                        width={40}
                        src="/assets/skills/java.png" alt="" />
                    <Image
                        height={40}
                        width={40}
                        src="/assets/skills/tailwind.png" alt="" />
                </div>
            </div>

        </SectionLayout>
    )
}

export default Experience
