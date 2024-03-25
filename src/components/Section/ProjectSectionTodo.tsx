'use client'
import { tabs } from '@/utils/ProjectUtil'
import { SectionLayout } from '..'

import { Tabs } from '../ui/tabs'


function Projects() {
    return (
        <SectionLayout id='projects'>
            <h2 className='font-bold md:text-5xl text-3xl'>Projects</h2>
            <div className="md:h-[40rem] h-[35rem] [perspective:1000px] relative max-w-5xl mx-auto w-full flex flex-col items-center justify-center mb-40 mt-10">
                <Tabs tabs={tabs} containerClassName='flex-wrap justify-center overflow-hidden my-10' contentClassName='justify-center items-center flex' />
            </div>
        </SectionLayout>
    )
}

export default Projects
