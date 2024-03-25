import Link from "next/link";
import { ProjectDetails } from "@/utils/ProjectUtil";

export function Project({ image, title, description, tech, github, live }: ProjectDetails) {
    return (
        <div className='flex flex-col md:flex-row p-4 rounded-md shadow-md justify-between md:h-64'>
            <div className="md:w-1/2 items-center flex justify-center">
                <img
                    className="h-full"
                    src={image} alt={title} />
            </div>
            <div className="flex flex-col justify-between md:ml-4 gap-4 md:gap-0 md:w-1/2">
                <h2 className='text-2xl mt-4 md:mt-0'>{title}</h2>
                <p className='text-base flex gap-2 flex-wrap'>{tech.map(item => {
                    return <span className="p-2 rounded-lg text-sm bg-cyan-700 shadow-sm" key={item}>{item}</span>
                })}</p>
                <p className='text-sm text-gray-200 text-justify'>{description}</p>
                <div className='flex justify-between gap-2 w-full'>

                    {live && <Link
                        href={live}
                        target="_blank"
                        className='border-2 border-black hover:bg-black p-2 rounded-md text-sm px-4 w-full text-center'>Live</Link>}
                    {github && <Link
                        href={github}
                        target="_blank"
                        className='bg-black hover:bg-white hover:text-black transition-all duration-300 p-2 rounded-md text-sm px-4 w-full text-center'>Github</Link>}
                </div>
            </div>
        </div>
    );
}

