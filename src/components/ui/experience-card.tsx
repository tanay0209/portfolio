import { cn } from '@/lib/utils'
import React from 'react'
import { easeInOut, motion } from "framer-motion"

function ExperienceCard({ title, description, company, location, technologies, duration }: {
    title: string,
    description: string[],
    company: string,
    technologies: string[],
    duration: string,
    location: string,
}) {
    return (
        <motion.div
            initial={{
                boxShadow: '8px 8px 0px 1px rgba(17,190,247,1)'
            }}
            whileHover={{
                boxShadow: '0'
            }}
            transition={{
                duration: 0.2,
                ease: easeInOut
            }}
            className={cn('border flex flex-col w-full gap-4 border-white p-4 rounded-sm')}>
            <div className='flex w-full gap-2 text-sm justify-end'>
                <p className='text-orange-400 font-medium'>{location}</p>
                <p>&#9679;</p>
                <p className='text-yellow-400'>{duration}</p>
            </div>
            <p className='text-2xl font-black'>{company}</p>
            <p className='text-xl font-semibold'>{title}</p>
            <div>
                {description.map((desc, index) => (
                    <p key={index} className='pl-2 text-justify'> - {desc}</p>
                ))}
            </div>
            <div className='text-emerald-500 font-medium'>{technologies.join(', ')}</div>
        </motion.div>
    )
}

export default ExperienceCard
