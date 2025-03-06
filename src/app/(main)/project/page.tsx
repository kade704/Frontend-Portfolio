"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectPage = () => {
    const PROJECTS = [
        {
            id: "peak",
            title: "Peak",
            description: "게임 정보 공유 플랫폼",
            url: "/project/peak",
        },
        {
            id: "sketchmix",
            title: "SketchMix",
            description: "웹기반 오디오 시퀸서",
            url: "/project/sketchmix",
        },
        {
            id: "chip8",
            title: "Chip8",
            description: "Chip8 에뮬레이터",
            url: "/project/chip8",
        },
        {
            id: "sudoku",
            title: "Sudoku",
            description: "수도쿠 게임 앱",
            url: "/project/sudoku",
        },
        {
            id: "portfolio",
            title: "Portfolio",
            description: "포트폴리오 웹사이트",
            url: "/project/portfolio",
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#project-section", { y: 10, opacity: 0, duration: 0.5 }).from("#project-section-bar", { width: 0 }, "-=0.8");

        PROJECTS.forEach((project, i) => {
            const tl = gsap.timeline({ defaults: { duration: 1.0 }, delay: i * 0.2 + 1.0 });
            tl.from(`#project-${project.id}`, { y: 10, opacity: 0, duration: 0.5 }, "-=0.3");
        });
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[768px] flex flex-col">
                <h3 id="project-section" className="text-2xl font-bold text-neutral-200">
                    0x03. Project
                </h3>
                <div id="project-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-10 space-y-4">
                    {PROJECTS.map((project) => (
                        <Link
                            href={project.url}
                            key={project.id}
                            id={`project-${project.id}`}
                            className="flex gap-4 items-center hover:mx-4"
                            style={{ transition: "margin 0.3s" }}
                        >
                            <h2 className="text-4xl font-bold text-teal-400">{project.title}</h2>
                            <div className="flex-1 w-0.5 h-full bg-neutral-500 rounded-full"></div>
                            <p className="text-xl text-neutral-300">{project.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
