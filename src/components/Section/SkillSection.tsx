import React from 'react'
import { SectionLayout, Skills } from '..'
import { skills } from '@/data/skills'


function SkillSection() {
    return (
        <SectionLayout classname=''>
            <h2 className='font-bold md:text-5xl text-3xl'>Technologies</h2>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mt-4 justify-start gap-4'>
                {skills.map(skill => {
                    return <Skills key={skill.title} {...skill} />
                })}
            </div>
        </SectionLayout>
    )
}

export default SkillSection
