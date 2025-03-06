"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

const Navbar = () => {
    const SECTIONS = [
        { id: "home", text: "Home", url: "/home" },
        { id: "about", text: "About", url: "/about" },
        { id: "skill", text: "Skill", url: "/skill" },
        { id: "project", text: "Project", url: "/project" },
        { id: "contact", text: "Contact", url: "/contact" },
    ];

    const pathname = usePathname();
    const currentSection = SECTIONS.find((section) => pathname.startsWith(section.url))?.url;

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.3 } });
        tl.from("#navbar", { x: -150, opacity: 0 })
            .from("#navbar-section-home", { x: -10, opacity: 0 })
            .from("#navbar-section-about", { x: -10, opacity: 0 }, "-=0.2")
            .from("#navbar-section-skill", { x: -10, opacity: 0 }, "-=0.2")
            .from("#navbar-section-project", { x: -10, opacity: 0 }, "-=0.2")
            .from("#navbar-section-contact", { x: -10, opacity: 0 }, "-=0.2")
            .from("#navbar-link-github", { y: 10, opacity: 0 })
            .from("#navbar-link-notion", { y: 10, opacity: 0 }, "-=0.2");
    });

    return (
        <div
            id="navbar"
            className="w-[150px] bg-neutral-900 h-screen fixed z-10 flex flex-col items-center justify-center space-y-14"
        >
            <div className="flex flex-col gap-5">
                {SECTIONS.map((section, i) => (
                    <Link id={`navbar-section-${section.id}`} key={i} href={section.url}>
                        <button
                            className={clsx(
                                "text-left font-bold text-lg transition-all",
                                section.url === currentSection ? "text-teal-300" : "text-neutral-100",
                                section.url !== currentSection ? "hover:text-neutral-300 text-neutral-500" : ""
                            )}
                        >
                            {section.text}
                        </button>
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-4">
                <Link id="navbar-link-github" href="https://github.com/kade704" className="cursor-pointer" target="_blank">
                    <FaGithub size={24} className="text-neutral-100 hover:text-neutral-300 transition-all" />
                </Link>
                <Link
                    id="navbar-link-notion"
                    href="https://absorbing-tsunami-9bd.notion.site/1ab56c97f2a8801eb237dd7e543e34e1?pvs=4"
                    className="cursor-pointer"
                    target="_blank"
                >
                    <RiNotionFill size={28} className="text-neutral-100 hover:text-neutral-300 transition-all" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
