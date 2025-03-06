"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactPage = () => {
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.0 } });
        tl.from("#contact-section", { y: 10, opacity: 0, duration: 0.5 })
            .from("#contact-section-bar", { width: 0 }, "-=0.8")
            .from("#contact-name", { y: 30, opacity: 0 })
            .from("#contact-phone", { y: 30, opacity: 0 }, "-=0.8")
            .from("#contact-email", { y: 30, opacity: 0 }, "-=0.8");
    });

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[768px] flex flex-col">
                <h1 id="contact-section" className="font-bold text-neutral-200">
                    0x04. Contact
                </h1>
                <div id="contact-section-bar" className="h-2 border-b-2 border-neutral-400"></div>
                <div className="mt-10 flex">
                    <div id="contact-name" className="flex-1 flex flex-col gap-2">
                        <h2 className="text-neutral-400">Name</h2>
                        <h1 className="font-bold text-teal-300">이승현</h1>
                    </div>

                    <div id="contact-phone" className="flex-1 flex flex-col gap-2">
                        <h2 className="text-neutral-400">Phone</h2>
                        <h1 className="font-bold text-teal-300">010-2646-9756</h1>
                    </div>
                    <div id="contact-email" className="flex-1 flex flex-col gap-2">
                        <h2 className=" text-neutral-400">Email</h2>
                        <h1 className="font-bold text-teal-300">bwind728@naver.com</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
