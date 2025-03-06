"use client";

import ImageViewer from "@/components/ImageViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";

const ProjectsketchmixPage = () => {
    const IMAGE_URLS = [{ src: "/project/sketchmix/sketchmix-01.jpg" }, { src: "/project/sketchmix/sketchmix-02.jpg" }];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#project-sketchmix-section", { y: 10, opacity: 0, duration: 0.5 })
            .from("#project-sketchmix-section-bar", { width: 0 }, "-=0.8")
            .from("#project-sketchmix-images", { opacity: 0, duration: 0.5 })
            .from("#project-sketchmix-title", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-sketchmix-skill", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-sketchmix-description", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-sketchmix-link", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3");
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[1024px] flex flex-col">
                <h3 id="project-sketchmix-section" className="text-2xl font-bold text-neutral-200">
                    0x03. Project - Sketchmix
                </h3>
                <div id="project-sketchmix-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-8 w-full flex justify-between">
                    <div id="project-sketchmix-images">
                        <ImageViewer urls={IMAGE_URLS.map((image) => image.src)} width="560px" height="350px" />
                    </div>
                    <div className="w-[430px]">
                        <h1 id="project-sketchmix-title" className="text-4xl font-bold text-teal-400">
                            Sketchmix
                        </h1>
                        <h3 id="project-sketchmix-skill" className="font-bold text-neutral-200 mt-2">
                            SvelteKit, ToneJS, Canvas
                        </h3>
                        <h4 id="project-sketchmix-description" className="text-neutral-200 mt-4">
                            Sketchmix는 Sveltekit, tonejs를 사용하여 웹에서 구동가능한 오디오 시퀸서 입니다. 음들을 자유롭게
                            편집할수 있는 피아노 롤 기능을 제공합니다. 트랙의 사운드를 자유롭게 조정할수 있습니다. 사용자가 만든
                            음악을 저장하고 공유할 수 있는 기능을 제공합니다.
                        </h4>
                        <div id="project-sketchmix-link" className="flex gap-4 mt-8">
                            <Link href="https://kade704-sketchmix.vercel.app/" target="_blank">
                                <FaHome className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                            <Link href="https://github.com/kade704/sketchmix" target="_blank">
                                <FaGithub className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsketchmixPage;
