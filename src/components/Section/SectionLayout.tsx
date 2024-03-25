'use client'

function SectionLayout({ children, id, classname }: {
    children: React.ReactNode,
    id: string,
    classname?: string
}) {
    return (
        <div
            id={id}
            className={`max-w-lg md:max-w-5xl mx-auto p-8 text-left text-white justify-center items-center ${classname}`}>
            {children}
        </div>
    )
}

export default SectionLayout
