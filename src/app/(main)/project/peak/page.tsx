"use client";

import ImageViewer from "@/components/ImageViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";

const ProjectPeakPage = () => {
    const IMAGE_URLS = [
        { src: "/project/peak/peak-01.jpg" },
        { src: "/project/peak/peak-02.jpg" },
        { src: "/project/peak/peak-03.jpg" },
        { src: "/project/peak/peak-04.jpg" },
        { src: "/project/peak/peak-05.jpg" },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#project-peak-section", { y: 10, opacity: 0, duration: 0.5 })
            .from("#project-peak-section-bar", { width: 0 }, "-=0.8")
            .from("#project-peak-images", { opacity: 0, duration: 0.5 })
            .from("#project-peak-title", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-peak-skill", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-peak-description", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-peak-link", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3");
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[1024px] flex flex-col">
                <h3 id="project-peak-section" className="text-2xl font-bold text-neutral-200">
                    0x03. Project - Peak
                </h3>
                <div id="project-peak-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-8 w-full flex justify-between">
                    <div id="project-peak-images">
                        <ImageViewer urls={IMAGE_URLS.map((image) => image.src)} width="560px" height="350px" />
                    </div>
                    <div className="w-[430px]">
                        <h1 id="project-peak-title" className="text-4xl font-bold text-teal-400">
                            Peak
                        </h1>
                        <h3 id="project-peak-skill" className="font-bold text-neutral-200 mt-2">
                            Nextjs, Supabase, Tiptap
                        </h3>
                        <h4 id="project-peak-description" className="text-neutral-200 mt-4">
                            Peak은 Nextjs와 Supabase를 사용하여 만든 게임 정보 공유 플랫폼입니다. 게임의 공략, 팁, 리뷰를 작성하고
                            다른 사용자들과 공유할 수 있습니다. Tiptap을 사용하여 자유롭고 다양한 형식으로 게시물을 작성할 수
                            있습니다. 게임 구독기능을 제공하여 원하는 게임 게시물을 빠르게 열람할수 있습니다.
                        </h4>
                        <div id="project-peak-link" className="flex gap-4 mt-8">
                            <Link href="https://peak-iota.vercel.app/" target="_blank">
                                <FaHome className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                            <Link href="https://github.com/kade704/peak" target="_blank">
                                <FaGithub className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPeakPage;
