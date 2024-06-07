'use client'

function SectionLayout({ children, classname }: {
    children: React.ReactNode,
    classname?: string
}) {
    return (
        <div
            className={`max-w-lg md:max-w-7xl mx-auto p-8 text-left text-white justify-center items-center ${classname}`}>
            {children}
        </div>
    )
}

export default SectionLayout
