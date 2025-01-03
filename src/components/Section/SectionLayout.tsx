'use client'

import { cn } from "@/lib/utils"

function SectionLayout({ children, classname }: {
    children: React.ReactNode,
    classname?: string
}) {
    return (
        <section
            className={cn(`max-w-lg md:max-w-5xl p-8 mx-auto text-left justify-center items-center overflow-hidden`, classname)}>
            {children}
        </section>
    )
}

export default SectionLayout
