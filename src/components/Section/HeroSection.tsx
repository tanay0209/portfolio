'use client'
import Link from 'next/link'
import { SectionLayout } from '..'
import Image from 'next/image'
import Typewriter from '../ui/typewriter-effect'
import FlipLinks from '../ui/text-flip'



function HeroSection() {
    return (
        <div className='h-screen relative w-full overflow-hidden'>
            <div className='absolute h-[150vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-gradient-radial from-sky-200 rounded-full'></div>
            <SectionLayout>
                <div className='relative min-h-screen flex items-center justify-center flex-col my-[-50px]'>
                    <div className='flex font-bold text-4xl md:text-7xl'>
                        <FlipLinks first='Frontend Developer' second='Flutter Developer' />
                        <p className='cursor-default'></p>
                    </div>
                    <div>
                        <Typewriter className='text-slate-700 font-medium text-center' string={"Transforming designs into digital magic, one line of code at a time."} />
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default HeroSection

