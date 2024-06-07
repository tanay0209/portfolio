'use client'
import Link from 'next/link'
import { SectionLayout } from '..'
import Image from 'next/image'



function HeroSection() {
    return (
        <SectionLayout>
            <div className='min-h-screen flex items-center justify-center flex-col my-[-50px]'>
                <p className='font-bold text-3xl text-center md:text-5xl'>
                    &ldquo;Frontend and Flutter Developer&rdquo;
                </p>
                <p className='text-lg text-gray-300 mt-4 text-center'>Transforming designs into digital magic, one line of code at a time.</p>
                <div className='flex gap-4 mt-6'>
                    <Link
                        locale={false}
                        target='_blank'
                        href='/assets/resume.pdf'
                    >
                        <p className='bg-white flex gap-2 text-black p-2 rounded-md md:w-60 justify-center'>
                            <Image
                                height={25}
                                width={25}
                                alt='Resume'
                                src='/assets/contact/download.svg'
                            />
                            Download Resume
                        </p>
                    </Link>
                    <Link
                        target='_blank'
                        href='mailto:tanayjagnani@gmail.com'
                    >
                        <p className='bg-white flex gap-2 text-black p-2 rounded-md md:w-60 justify-center'>
                            <Image
                                height={25}
                                width={25}
                                alt='Gmail'
                                src='/assets/contact/gmail-colored.svg'
                            />
                            Connect with me
                        </p>
                    </Link>
                </div>
            </div>
        </SectionLayout>
    )
}

export default HeroSection

