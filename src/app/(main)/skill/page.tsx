"use client";

import { FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaReact, FaRust } from "react-icons/fa";
import { SiJavascript, SiMysql, SiPrisma, SiSupabase, SiSvelte } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillPage = () => {
    const SKILLS = [
        {
            id: "language",
            text: "언어",
            items: [
                { id: "python", icon: FaPython, text: "Python" },
                { id: "js", icon: SiJavascript, text: "JS/TS" },
                { id: "cpp", icon: TbBrandCpp, text: "C/C++" },
                { id: "csharp", icon: TbBrandCSharp, text: "C#" },
                { id: "rust", icon: FaRust, text: "Rust" },
            ],
        },
        {
            id: "frontend",
            text: "프론트엔드",
            items: [
                { id: "html", icon: FaHtml5, text: "HTML" },
                { id: "css", icon: FaCss3Alt, text: "CSS" },
                { id: "react", icon: FaReact, text: "React" },
                { id: "react-native", icon: FaReact, text: "React Native" },
                { id: "svelte", icon: SiSvelte, text: "Svelte" },
            ],
        },
        {
            id: "backend",
            text: "백엔드",
            items: [
                { id: "nodejs", icon: FaNodeJs, text: "Node.js" },
                { id: "supabase", icon: SiSupabase, text: "Supabase" },
                { id: "prisma", icon: SiPrisma, text: "Prisma" },
                { id: "mysql", icon: SiMysql, text: "MySQL" },
            ],
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#skill-section", { y: 10, opacity: 0, duration: 0.5 }).from("#skill-section-bar", { width: 0 }, "-=0.8");

        SKILLS.forEach((skill, i) => {
            const tl = gsap.timeline({ defaults: { duration: 1.0 }, delay: i * 0.3 + 1.0 });
            tl.from(`#skill-${skill.id}-text`, { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
                .from(`#skill-${skill.id}-bar`, { height: 0, duration: 0.5 }, "-=0.3")
                .from(`#skill-${skill.id}-items`, { x: -100, opacity: 0, duration: 0.5 });
        });
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[768px] flex flex-col">
                <h3 id="skill-section" className="text-2xl font-bold text-neutral-200">
                    0x02. Skill
                </h3>
                <div id="skill-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-10 flex justify-between">
                    {SKILLS.map((skill) => (
                        <div key={skill.id} className="flex-1 flex flex-col gap-4 overflow-hidden">
                            <h2 id={`skill-${skill.id}-text`} className="text-4xl font-bold text-teal-400">
                                {skill.id}
                            </h2>
                            <div className="flex gap-2">
                                <div id={`skill-${skill.id}-bar`} className="w-0.5 h-full bg-neutral-500 rounded-full"></div>
                                <div id={`skill-${skill.id}-items`}>
                                    {skill.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            {<item.icon className="text-neutral-300" />}
                                            <p className="text-xl text-neutral-300">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillPage;
