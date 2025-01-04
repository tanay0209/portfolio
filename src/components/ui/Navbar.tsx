"use client";

import Image from "next/image";
import logo from "../../../public/assets/logo-tanay.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
    ];

    const renderLinks = (isMobile = false) =>
        links.map(({ href, label }) => (
            <li key={href} className={`${isMobile ? "text-lg" : ""}`}>
                <Link
                    href={href}
                    onClick={isMobile ? handleLinkClick : undefined}
                    className={`hover:text-gray-300 ${isMobile ? "text-white" : ""}`}
                >
                    {label}
                </Link>
            </li>
        ));

    return (
        <nav className="w-full fixed backdrop-blur-xl top-0 left-0 z-50">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="text-2xl font-bold">
                    <Link href="/" aria-label="Navigate to Home">
                        <Image
                            className="w-12 h-12"
                            src={logo}
                            alt="Tanay Jagnani Logo"
                            priority
                        />
                    </Link>
                </div>

                <ul className="hidden md:flex gap-8">{renderLinks()}</ul>

                <button
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div
                className={`fixed top-0 left-0 w-64 h-full bg-slate-900 transform transition-transform duration-300 ease-in-out text-white md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-4">
                    <button
                        className="mb-8 text-white hover:text-gray-300"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X size={24} />
                    </button>
                    <ul className="flex flex-col gap-6">{renderLinks(true)}</ul>
                </div>
            </div>
        </nav>
    );
}
