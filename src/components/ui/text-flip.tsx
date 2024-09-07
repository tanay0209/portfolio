import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cn } from '@/lib/utils'

const DURATION = 0.25
const STAGGER = 0.07

const FlipLinks = ({ main, alternative, className }: { main: string, alternative: string, className?: string }) => {
    const controls = useAnimation()

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start("hovered")
            setTimeout(() => {
                controls.start("initial")
            }, (DURATION + STAGGER) * 1000)
        }

        startAnimation()
    }, [controls])

    return (
        <motion.div
            initial="initial"
            animate={controls}
            whileHover="hovered"
            className={cn('relative block overflow-hidden whitespace-nowrap text-4xl md:text-7xl font-black uppercase text-white', className)}
        >
            <div>
                {main.split("").map((l: string, index: number) => {
                    return <motion.span
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * index
                        }}
                        className='inline-block'
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" }
                        }}
                        key={index * 4}>{l === " " ? "\u00A0" : l}</motion.span>
                })}
            </div>

            <div className='absolute inset-0 cursor-pointer'>
                {alternative.split("").map((l: string, index: number) => {
                    return <motion.span
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * index
                        }}
                        className='inline-block'
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 }
                        }}
                        key={index * 7}>{l === " " ? "\u00A0" : l}</motion.span>
                })}
            </div>
        </motion.div>
    )
}

export default FlipLinks
