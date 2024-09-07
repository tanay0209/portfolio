'use client'

import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import ExperienceCard from './experience-card'

interface TimelineItemProps {
    duration: string,
    company: string,
    title: string
    description: string[]
    technologies: string[]
    isLeft: boolean,
    location: string,
}

const TimelineItem: React.FC<TimelineItemProps> = ({ duration, title, location, company, description, technologies, isLeft }) => {
    return (
        <motion.div
            className={`my-8 flex justify-between items-center max-w-3xl mx-auto ${isLeft ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.div
                className='w-full px-6 py-4'
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <ExperienceCard duration={duration} location={location} title={title} description={description} company={company} technologies={technologies} />
            </motion.div>
        </motion.div>
    )
}

const experienceData: Omit<TimelineItemProps, 'isLeft'>[] = [
    {
        duration: 'Aug 2024 - Aug 2024',
        title: 'Frontend Developer Intern',
        description: [
            'Developed the frontend of a Progressive Web Application (PWA).',
            'Converted the design mockups into responsive, user friendly website.',
            'Handled the states using Redux toolkit'
        ],
        company: "Hireloom.ai",
        technologies: ['React.js', 'Javascript', 'TailwindCSS'],
        location: "Remote, India",

    },
    {
        duration: 'Dec 2023 - May 2024 ',
        title: 'SDE Intern',
        description: [
            'Developed an efficient user migration helper for onboarding new customers.',
            'Developed reusable component reducing redundancy.',
            'Performed research on available chatbot development platforms.'
        ],
        company: "PySphere Research & Development Labs",
        technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Java'],
        location: "Remote, India",

    },
]

export default function Timeline() {
    const { scrollYProgress } = useScroll()
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="">
            <div className="relative wrap overflow-hidden h-full">
                <motion.div
                    className="absolute left-1/2 h-full w-1"
                    style={{ scaleY, originY: 0 }}
                />
                {experienceData.map((item, index) => (
                    <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
                ))}
            </div>
        </div>
    )
}