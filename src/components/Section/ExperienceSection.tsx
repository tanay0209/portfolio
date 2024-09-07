import React from 'react'
import SectionLayout from '@/components/Section/SectionLayout';

import ExperienceCard from '../ui/experience-card'
import Timeline from '../ui/timeline'


function Experience() {
    return (
        <SectionLayout classname='mt-8'>
            <h2 className='font-bold md:text-5xl text-3xl'>Experience</h2>
            <Timeline />
        </SectionLayout>
    )
}

export default Experience