export type SkillProp = {
    iconSrc: string,
    title: string
}

function Skills(props: SkillProp) {
    return (
        <div className='flex gap-4 shadow-md p-6 justify-center items-center rounded-md hover:scale-110 bg-gradient-to-br from-zinc-500 text-center'>
            <img
                width={45}
                height={45}
                src={props.iconSrc} alt={props.title} />
            <p
                className='text-lg font-bold'
            >{props.title}</p>
        </div>
    )
}

export default Skills
