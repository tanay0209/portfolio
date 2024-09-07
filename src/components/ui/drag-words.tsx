'use client'

import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

interface WordProps {
    containerRef: React.RefObject<HTMLDivElement>;
    text: string;
    position: { top: string; left: string; rotate: string };
    className?: string;
}

const predefinedPositions = [
    { top: '15%', left: '10%', rotate: '12deg' },
    { top: '70%', left: '20%', rotate: '-8deg' },
    { top: '25%', left: '75%', rotate: '5deg' },
    { top: '60%', left: '85%', rotate: '-15deg' },
    { top: '45%', left: '50%', rotate: '20deg' },
];

const Word: React.FC<WordProps> = ({ containerRef, text, position, className }) => {
    const [zIndex, setZIndex] = useState(1000);

    const updateZIndex = () => {
        const elements = document.querySelectorAll('.drag-elements');
        let maxZ = Math.max(...Array.from(elements).map(el => parseInt(getComputedStyle(el).zIndex) || 0));
        setZIndex(maxZ + 1);
    };

    return (
        <motion.p
            onMouseDown={updateZIndex}
            style={{ ...position, zIndex }}
            drag
            dragConstraints={containerRef}
            className={cn('drag-elements cursor-grab absolute font-black text-4xl md:text-6xl text-gray-100 opacity-20', className)}
            whileTap={{ cursor: 'grabbing' }}
        >
            {text}
        </motion.p>
    );
};

const DragWords: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const words = ['JAVASCRIPT', 'REACT', 'TYPESCRIPT', 'NEXTJS', 'FLUTTER'];

    return (
        <div ref={containerRef} className='absolute inset-0 overflow-hidden pointer-events-none'>
            {words.map((word, index) => (
                <Word
                    key={index}
                    containerRef={containerRef}
                    text={word}
                    position={predefinedPositions[index]}
                    className="pointer-events-auto"
                />
            ))}
        </div>
    );
};

export default DragWords;