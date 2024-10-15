import Link from "next/link";
import { ProjectDetails } from "@/components/Section/ProjectSection";
import { cn } from "@/lib/utils";
import { Github, LinkIcon } from "lucide-react";

export function Project({ title, description, tech, github, live, shadow }: ProjectDetails) {
    return (
        <div className={cn('flex-col flex p-4 gap-4 rounded-sm justify-between', shadow)}>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl mt-2 font-bold'>{title}</h2>
                <div className="flex gap-4">
                    {live && <Link
                        href={live}
                        target="_blank"
                    >
                        <LinkIcon />
                    </Link>}
                    {github && <Link
                        href={github}
                        target="_blank"
                    >
                        <Github />
                    </Link>}
                </div>
            </div>
            <div className="flex text-sm items-center gap-2">
                <p className="text-sm text-gray-200 text-justify">{description}</p>
            </div>
            <div className="flex text-sm items-center gap-2">
                <p>&#9679;</p>
                <p className='flex gap-2 flex-wrap'>
                    {tech.join(', ')}
                </p>
            </div>
        </div >
    );
}

