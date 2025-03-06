"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomePage = () => {
    useGSAP(() => {
        const tl = gsap
            .timeline({ defaults: { duration: 0.5 } })
            .from("#home-text-1", { x: -80, opacity: 0 })
            .from("#home-text-2", { x: 80, opacity: 0 }, "-=0.3")
            .from("#home-text-3", { x: -80, opacity: 0 }, "-=0.3");
    });

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <h1 id="home-text-1" className="text-8xl font-bold text-neutral-400">
                    웹
                </h1>
                <h1 id="home-text-2" className="text-8xl font-bold text-teal-400">
                    프론트엔드
                </h1>
                <h1 id="home-text-3" className="text-8xl font-bold text-neutral-200">
                    포트폴리오
                </h1>
            </div>
        </div>
    );
};

export default HomePage;
