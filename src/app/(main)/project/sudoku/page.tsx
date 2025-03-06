"use client";

import ImageViewer from "@/components/ImageViewer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";

const ProjectsudokuPage = () => {
    const IMAGE_URLS = [{ src: "/project/sudoku/sudoku-01.jpg" }];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#project-sudoku-section", { y: 10, opacity: 0, duration: 0.5 })
            .from("#project-sudoku-section-bar", { width: 0 }, "-=0.8")
            .from("#project-sudoku-images", { opacity: 0, duration: 0.5 })
            .from("#project-sudoku-title", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-sudoku-skill", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-sudoku-description", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3")
            .from("#project-sudoku-link", { y: 10, opacity: 0, duration: 0.5 }, "-=0.3");
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <h3 id="project-sudoku-section" className="text-2xl font-bold text-neutral-200">
                    0x03. Project - Sudoku
                </h3>
                <div id="project-sudoku-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-8 w-full flex justify-center gap-8">
                    <div id="project-sudoku-images">
                        <ImageViewer urls={IMAGE_URLS.map((image) => image.src)} width="250px" height="600px" />
                    </div>
                    <div className="w-[350px]">
                        <h1 id="project-sudoku-title" className="text-4xl font-bold text-teal-400">
                            Sudoku
                        </h1>
                        <h3 id="project-sudoku-skill" className="font-bold text-neutral-200 mt-2">
                            Expo, React Native, Zustand
                        </h3>
                        <h4 id="project-sudoku-description" className="text-neutral-200 mt-4">
                            sudoku는 React Native로 사용하여 개발한 스도쿠 앱 입니다. 세 가지 난이도(쉬움, 보통, 어려움)의 다양한
                            퍼즐을 제공하여 플레이어의 실력에 따라 스도쿠를 즐길 수 있습니다. 틀린 숫자를 입력하면 목숨이
                            줄어들고(초기 3개), 목숨이 모두 소진되면 게임오버 됩니다. 스도쿠의 보드 렌더링을 WebGL로 재작성하여
                            성능을 대폭 향상했습니다.
                        </h4>
                        <div id="project-sudoku-link" className="flex gap-4 mt-8">
                            <Link href="https://github.com/kade704/sudoku" target="_blank">
                                <FaGithub className="text-3xl text-neutral-200 mt-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsudokuPage;
