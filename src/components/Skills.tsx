'use client'
import { useState } from 'react';
import Image from 'next/image';

export type SkillProp = {
    iconSrc: string,
    title: string
}

function Skills(props: SkillProp) {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleTap = () => {
        setShowTooltip(!showTooltip);
    };

    const handleTapRemoved = () => {
        setShowTooltip(!showTooltip)
    }

    return (
        <div
            className='flex gap-4 shadow-md p-6 justify-around items-center rounded-md md:hover:scale-110 border-2 border-gray-300 relative'
            onTouchStart={handleTap}
            onTouchEnd={handleTapRemoved}
        >
            <Image
                width={45}
                height={45}
                src={props.iconSrc}
                alt={props.title}
                style={{
                    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                }}
            />
            <p className='text-lg font-bold hidden md:block'>{props.title}</p>
            {showTooltip && (
                <div className='absolute bottom-16 bg-black text-white text-sm rounded-md p-2 z-10'>
                    {props.title}
                </div>
            )}
        </div>
    );
}

export default Skills;
