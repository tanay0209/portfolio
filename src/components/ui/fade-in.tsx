import React from 'react'
import { easeInOut, motion } from "framer-motion"
import { cn } from '@/lib/utils';


function FadeIn({ string, className, index }: {
    string: string,
    className?: string,
    index: number
}) {
    return (
        <div className=''>
            <motion.div
                initial={
                    {
                        translateX: index % 2 === 0 ? -100 : 100,
                        opacity: 0
                    }
                }
                whileInView={{
                    translateX: 0,
                    opacity: 1
                }}
                transition={{ staggerChildren: 0.017, duration: 0.7, delay: index * 0.1, ease: easeInOut }}
                className={cn('mt-4 text-white overflow-hidden', className)}
            >
                <motion.p>{string}</motion.p>
            </motion.div>
        </div>
    )
}

export default FadeIn