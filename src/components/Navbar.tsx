"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from "@/utils/cn";
import Link from "next/link";
import { links } from '@/data/navlinks'
export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                {links.map(link => (
                    <Link
                        key={link.name}
                        href={`/#${link.address}`}
                    >
                        <MenuItem setActive={setActive} active={active} item={link.name} />
                    </Link>
                ))}
            </Menu>
        </div>
    );
}
