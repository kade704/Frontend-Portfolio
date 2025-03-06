"use client";

import ImageViewer from "@/components/ImageViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";

const ProjectPortfolioPage = () => {
    const IMAGE_URLS = [
        { src: "/project/portfolio/portfolio-01.jpg" },
        { src: "/project/portfolio/portfolio-02.jpg" },
        { src: "/project/portfolio/portfolio-03.jpg" },
        { src: "/project/portfolio/portfolio-04.jpg" },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#project-portfolio-section", { y: 10, opacity: 0, duration: 0.5 })
            .from("#project-portfolio-section-bar", { width: 0 }, "-=0.8")
            .from("#project-portfolio-images", { opacity: 0, duration: 0.5 })
            .from("#project-portfolio-title", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-portfolio-skill", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-portfolio-description", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-portfolio-link", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3");
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[1024px] flex flex-col">
                <h3 id="project-portfolio-section" className="text-2xl font-bold text-neutral-200">
                    0x03. Project - Portfolio
                </h3>
                <div id="project-portfolio-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-8 w-full flex justify-between">
                    <div id="project-portfolio-images">
                        <ImageViewer urls={IMAGE_URLS.map((image) => image.src)} width="560px" height="350px" />
                    </div>
                    <div className="w-[430px]">
                        <h1 id="project-portfolio-title" className="text-4xl font-bold text-teal-400">
                            Portfolio
                        </h1>
                        <h3 id="project-portfolio-skill" className="font-bold text-neutral-200 mt-2">
                            Nextjs, Gsap, Swiperjs
                        </h3>
                        <h4 id="project-portfolio-description" className="text-neutral-200 mt-4">
                            Portfolio는 Nextjs과 gsap을 사용하여 만든 포트폴리오 입니다. gsap의 애니메이션을 활용하여 풍부한
                            시각적 경험을 제공합니다.
                        </h4>
                        <div id="project-portfolio-link" className="flex gap-4 mt-8">
                            <Link href="https://kade704-frontend-portfolio.vercel.app/" target="_blank">
                                <FaHome className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                            <Link href="https://github.com/kade704/Frontend-Portfolio" target="_blank">
                                <FaGithub className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPortfolioPage;
