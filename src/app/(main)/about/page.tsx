"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutPage = () => {
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#about-section", { y: 10, opacity: 0, duration: 0.5 })
            .from("#about-section-bar", { width: 0 }, "-=0.8")
            .from("#about-text-1", { x: -30, opacity: 0 })
            .from("#about-text-2", { x: -30, opacity: 0 }, "-=0.8")
            .from("#about-text-3", { x: -30, opacity: 0 }, "-=0.8");
    });

    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="w-[768px] flex flex-col">
                <h3 id="about-section" className="text-2xl font-bold text-neutral-200">
                    0x01. About
                </h3>
                <div id="about-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <h2 id="about-text-1" className="mt-10 text-3xl font-bold text-neutral-400">
                    안녕하세요, 프론트엔드 개발자
                </h2>
                <h3 id="about-text-2" className="mt-4 text-6xl font-bold text-teal-400">
                    이승현입니다.
                </h3>
                <p id="about-text-3" className="mt-10 text-lg text-neutral-300">
                    학창시절, 반 친구들과 함께 호기심으로 시작한 게임 개발은 제가 개발자의 길을 걷게 된 첫걸음이었습니다. 처음에는
                    프로그래밍 실력과 팀 내 커뮤니케이션 모두 부족했지만, 외부 커뮤니티에서 다양한 피드백과 코드 리뷰를 받아
                    꾸준히 성장할 수 있었습니다. 이러한 경험은 저에게 웹 프론트엔드와 같은 새로운 기술을 배우고 적용하는 데
                    두려움을 없애 주었습니다. 현재는 웹 프론트엔드 개발에 집중하고 있으며, 게임 개발 과정에서 배운 피드백의
                    중요성은 제 개발 능력 향상에 큰 밑거름이 되어 주었습니다. 늘 배우고 성장하려는 자세로, 보다 나은 솔루션을
                    개발하기 위해 지속적으로 노력하고 있습니다.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
