import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div
            className='bg-black flex items-center justify-between text-white p-4 text-lg'>
            <p>Tanay Jagnani</p>
            <div className='flex items-center gap-2'>
                <Link
                    target='_blank'
                    href='https://www.linkedin.com/in/tanay-jagnani-b90322241/'
                >
                    <Image
                        width={15}
                        height={15}
                        style={{
                            filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                        }}
                        src="/assets/contact/linkedin.svg" alt="Linkedin" />
                </Link>

                <Link
                    target='_blank'
                    href='https://twitter.com/_tanay01_'
                >
                    <Image
                        width={15}
                        height={15}
                        style={{
                            filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                        }}
                        src="/assets/contact/x.svg" alt="X" />
                </Link>

                <Link
                    target='_blank'
                    href='https://github.com/tanay0209'
                >
                    <Image
                        width={15}
                        height={15}
                        style={{
                            filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                        }}
                        src="/assets/skills/github.svg" alt="X" />
                </Link>


            </div>
        </div>
    )
}

export default Navbar