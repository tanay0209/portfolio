import Link from "next/link";
import { ProjectDetails } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { skills } from "@/lib/constants";
import Image from "next/image";

export function WorkCard({ image, title, description, tech, github, live }: ProjectDetails) {
    return (
        <div className={cn('flex-col flex gap-4 justify-between shadow-md pb-4')}>
            <Image src={image} alt={title} className="w-full rounded-sm" />

            <h2 className='text-2xl mt-2 font-bold font-bubblegum'>{title}</h2>
            <p className="text-sm text-justify">{description}</p>
            <div className="flex text-sm items-center gap-2 flex-wrap">
                {tech.map((tech, idx) => {
                    const skill = skills[tech.toUpperCase()];
                    return (
                        skill ?
                            <span
                                key={idx}
                                className={`flex items-center hover:cursor-default gap-1 border px-2 py-1 rounded text-sm`}
                                style={{ borderColor: skill.color, color: skill.color }}
                            >
                                <Image alt={skill.name} src={skill.icon} width={16} height={16} />
                                {skill.name}
                            </span> :
                            <span key={idx} className="border hover:cursor-default px-2 py-1 rounded text-sm">
                                {tech}
                            </span>
                    )
                })}
            </div>
            <div className="flex gap-4 text-sm">
                {live && <Link
                    href={live}
                    target="_blank"
                    className="flex gap-2 items-center border px-2 py-1 rounded hover:bg-white hover:text-black"
                >
                    Live{" "}<ExternalLink size={18} />
                </Link>}
                {github && <Link
                    href={github}
                    target="_blank"
                    className="flex gap-2 items-center border px-2 py-1 rounded hover:bg-white hover:text-black"
                >
                    Github {" "}<Github size={18} />
                </Link>}
            </div>
        </div >
    );
}

