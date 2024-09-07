import React from "react";
import { Mail, Github, Linkedin, Twitter, Download } from "lucide-react";


export default function ContactForm() {
    return (
        <div className="md:py-12 py-8 w-full">
            <div className="text-white space-y-6">
                <h3 className="text-2xl font-semibold mb-4 font-serif">Let's Connect</h3>
                <p className="text-lg">
                    I'm always open to new opportunities and interesting projects. Feel free to reach out!
                </p>
                <div className="flex items-center space-x-2">
                    <Mail className="text-white" />
                    <a href="mailto:tanayjagnani@gmail.com" className="text-white hover:underline transition-all duration-300 ease-in-out hover:text-sky-200">
                        tanayjagnani@gmail.com
                    </a>
                </div>
                <div className="flex space-x-4">
                    {[
                        { name: "github", icon: Github, url: "https://github.com/tanay0209" },
                        { name: "linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/tanay-jagnani-b90322241/" },
                        { name: "twitter", icon: Twitter, url: "https://x.com/_tanay01_" },
                        { name: "resume", icon: Download, url: "https://drive.google.com/file/d/1rWzAhFnVEJS1IVS0sGpVXeQR9cL2925G/view?usp=drive_link" } //  
                    ].map(({ name, icon: Icon, url }) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-white hover:text-blue-200 transition-all duration-300 ease-in-out flex gap-2 cursor-pointer transform hover:scale-110 origin-left`}
                            aria-label={`Visit my ${name} profile`}
                        >
                            <Icon size={24} />
                            <p className="hidden md:block">{name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}