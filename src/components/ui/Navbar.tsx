'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconMail
} from "@tabler/icons-react";

export default function Navbar() {
    const links = [
        {
            title: "Tanay Jagnani",
            icon: (
                <p className="h-full w-full flex items-center justify-center text-neutral-500 dark:text-neutral-300 font-black">TJ</p>
            ),
            href: "https://drive.google.com/drive/folders/1JAJkTCOukxwgJgKUsZ2XZSKJmwNnqFXp?usp=sharing",
        },

        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/tanay-jagnani-b90322241/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/_tanay01_"
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/tanay0209",
        },
        {
            title: "Gmail",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "mailto:tanayjagnani@gmail.com",
        },
    ];
    return (
        <div className="fixed bottom-4 z-50 right-5 md:right-0 md:w-full md:items-center flex">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
