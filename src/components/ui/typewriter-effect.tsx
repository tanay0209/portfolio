import React from 'react'
import { motion } from "framer-motion"
import { cn } from '@/lib/utils';

/*     const baseCharDelay = 0.017;
    const paraDelayBuffer = 0.5;
    let cumulativeDelay = 0;
    const paraDelay = para.length * baseCharDelay + paraDelayBuffer;
    const delay = cumulativeDelay;
    cumulativeDelay += paraDelay;
*/
const splitUsingRegex = (str: string) => {
    const characters = []
    const regex = /[\s\S]/g;
    let match
    while ((match = regex.exec(str)) != null) {
        characters.push(match[0])
    }
    return characters
}

const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
}

function Typewriter({ string, className, delay = 0 }: {
    string: string,
    className?: string,
    delay?: number
}) {
    const textChars = splitUsingRegex(string)
    return (
        <div className=''>
            <motion.p
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.017, delayChildren: delay }}
                className={cn('mt-4 text-white', className)}
            >
                {textChars.map((char, index) => {
                    return <motion.span
                        key={index}
                        className='text-sm md:text-xl'
                        variants={charVariants}
                        transition={{ duration: 0.35 }}
                    >{char}</motion.span>
                })}
            </motion.p>
        </div>
    )
}

export default Typewriter