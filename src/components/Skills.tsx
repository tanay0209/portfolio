import Image from "next/image";

export type SkillProp = {
    iconSrc: string,
    title: string
}

function Skills(props: SkillProp) {
    return (
        <div className='flex gap-4 shadow-md p-6 justify-around items-center rounded-md hover:scale-110 border-2 border-gray-300'>
            <Image
                width={45}
                height={45}
                src={props.iconSrc}
                alt={props.title}
                style={{
                    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                }}
            />
            <p className='text-lg font-bold'>{props.title}</p>
        </div>
    );
}

export default Skills;
