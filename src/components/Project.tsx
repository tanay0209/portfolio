import Link from "next/link";
import { ProjectDetails } from "@/utils/ProjectUtil";
import Image from "next/image";

export function Project({ image, title, description, tech, github, live }: ProjectDetails) {
    return (
        <div className='flex-col flex p-4 rounded-md shadow-md justify-between border-2 border-gray-300'>
            <div className="w-full h-full justify-center flex items-center">
                <Image
                    height={400}
                    width={400}
                    src={image}
                    alt={title} />
            </div>
            <div className="flex flex-col justify-between gap-4 mt-2">
                <div className="flex items-center justify-between">
                    <h2 className='text-2xl mt-2 font-bold'>{title}
                    </h2>
                    <div className="flex gap-4">
                        {live && <Link
                            href={live}
                            target="_blank"
                        >
                            <Image
                                style={{
                                    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                                }}
                                alt="Github"
                                height={25}
                                width={25}
                                src='/assets/skills/link.svg'
                            />
                        </Link>}
                        {github && <Link
                            href={github}
                            target="_blank"
                        >
                            <Image
                                style={{
                                    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                                }}
                                alt="Github"
                                height={20}
                                width={20}
                                src='/assets/skills/github.svg'
                            />
                        </Link>}
                    </div>
                </div>

                <p className='text-base flex gap-2 flex-wrap'>{tech.map(item => {
                    return <span className="text-sm bg-slate-700 py-1 px-3 rounded-3xl" key={item}>{item}</span>
                })}</p>
                <p className='text-sm text-gray-200 text-justify'>{description}</p>

            </div>
        </div >
    );
}

