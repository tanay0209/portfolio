import React from 'react'
import { SectionLayout } from '..'
import Image from 'next/image'

function Experience() {
    return (
        <SectionLayout>
            <h2 className='font-bold md:text-5xl text-3xl'>Experience</h2>
            <div className='flex flex-col gap-4 mt-8 rounded p-6'>
                <div className='flex justify-between'>
                    <h3 className='text-xl font-semibold'>PySphere Research & Development Labs</h3>
                    <p className='text-sm font-semibold text-gray-300'>Dec&apos;23 - Jun&apos;24</p>
                </div>
                <p className='text-lg text-gray-200'>Developer Intern</p>
                <ul className='ml-4 list-disc text-md'>
                    <li>Developed an efficient user migration helper for onboarding new customers.</li>
                    <li>Developed reusuable component reducing redudancy.</li>
                    <li>Performed research on available chatbot development platforms.</li>
                </ul>
                <div className='flex gap-2 w-full'>
                    <span className="text-sm bg-slate-700 py-1 px-3 rounded-3xl">Nextjs</span>
                    <span className="text-sm bg-slate-700 py-1 px-3 rounded-3xl">Typescript</span>
                    <span className="text-sm bg-slate-700 py-1 px-3 rounded-3xl">TailwindCSS</span>
                    <span className="text-sm bg-slate-700 py-1 px-3 rounded-3xl">Java</span>

                </div>
            </div>

        </SectionLayout>
    )
}

export default Experience
