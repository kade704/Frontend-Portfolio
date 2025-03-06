"use client";

import ImageViewer from "@/components/ImageViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";

const ProjectChip8Page = () => {
    const IMAGE_URLS = [{ src: "/project/chip8/chip8-01.jpg" }, { src: "/project/chip8/chip8-02.jpg" }];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#project-chip8-section", { y: 10, opacity: 0, duration: 0.5 })
            .from("#project-chip8-section-bar", { width: 0 }, "-=0.8")
            .from("#project-chip8-images", { opacity: 0, duration: 0.5 })
            .from("#project-chip8-title", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-chip8-skill", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-chip8-description", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-chip8-link", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3");
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[1024px] flex flex-col">
                <h3 id="project-chip8-section" className="text-2xl font-bold text-neutral-200">
                    0x03. Project - chip8
                </h3>
                <div id="project-chip8-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-8 w-full flex justify-between">
                    <div id="project-chip8-images">
                        <ImageViewer urls={IMAGE_URLS.map((image) => image.src)} width="560px" height="350px" />
                    </div>
                    <div className="w-[430px]">
                        <h1 id="project-chip8-title" className="text-4xl font-bold text-teal-400">
                            chip8
                        </h1>
                        <h3 id="project-chip8-skill" className="font-bold text-neutral-200 mt-2">
                            SvelteKit
                        </h3>
                        <h4 id="project-chip8-description" className="text-neutral-200 mt-4">
                            chip8은 SvelteKit을 사용하여 개발한 웹 기반의 CHIP-8 에뮬레이터입니다. CHIP-8은 COSMAC VIP 컴퓨터를
                            위해 개발된 가상 머신 프로그래밍 언어로, 이를 모던 웹 환경에서 구현했습니다. 사용자는 CHIP-8 게임의
                            롬을 불러오거나 저장할수 있습니다. 가상 키보드를 통해 에뮬레이터와 상호작용 할 수 있습니다.
                        </h4>
                        <div id="project-chip8-link" className="flex gap-4 mt-8">
                            <Link href="https://kade704-chip8.vercel.app" target="_blank">
                                <FaHome className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                            <Link href="https://github.com/kade704/chip8" target="_blank">
                                <FaGithub className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectChip8Page;
