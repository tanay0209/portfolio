'use client'

import SectionLayout from '@/components/Section/SectionLayout'
import Typewriter from '@/components/ui/typewriter-effect'
import FlipLinks from '@/components/ui/text-flip'
import DragWords from '../ui/drag-words'


const HeroSection: React.FC = () => {
    return (
        <SectionLayout classname='h-screen overflow-hidden relative'>
            <DragWords />
            <div className='min-h-screen flex items-center justify-center w-full'>
                <div className='flex flex-col items-center z-10'>
                    <div className='relative flex font-bold text-4xl md:text-7xl'>
                        <FlipLinks main='Frontend Developer' alternative='Flutter Developer' />
                    </div>
                    <div>
                        <Typewriter className='font-medium text-center' string="Transforming designs into digital magic, one line of code at a time." />
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default HeroSection

