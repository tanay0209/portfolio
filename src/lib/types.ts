export type TechType = {
    name: String,
    color: String,
    image: String,
}

export type ProjectDetails = {
    title: string,
    description: string,
    tech: string[],
    github: string | null,
    live: string | null,
}