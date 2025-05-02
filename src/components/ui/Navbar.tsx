import Image from "next/image";
import logo from "../../../public/assets/logo-tanay.png";
import Link from "next/link";

export default function Navbar() {

    return (
        <nav className="w-full">
            <div className="flex md:max-w-5xl w-full items-center justify-between mx-auto py-6 px-8">
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

                <ul className="flex gap-8 *:cursor-pointer">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                </ul>
            </div>
        </nav>
    );
}
