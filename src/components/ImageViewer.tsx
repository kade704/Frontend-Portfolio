"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MdOutlineZoomIn } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./ImageViewer.css";
import { useRef } from "react";

type ImageViewerProps = {
    urls: string[];
    width: string;
    height: string;
};

const ImageViewer = ({ urls, width, height }: ImageViewerProps) => {
    const swiperRef = useRef<SwiperRef>(null);

    const handleClicked = () => {
        if (swiperRef.current) {
            const idx = swiperRef.current.swiper.activeIndex;
            const url = urls[idx];

            console.log(url);
            let win = window.open(url, "_blank");
            if (win) {
                win.focus();
            }
        }
    };

    return (
        <div>
            <div className="relative">
                <Swiper
                    loop
                    draggable={false}
                    pagination={{ clickable: true, el: "#swiper-custom-pagination" }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 5000 }}
                    style={{ width: width, height: height }}
                    className="rounded-xl overflow-hidden"
                    ref={swiperRef}
                >
                    {urls.map((url, i) => (
                        <SwiperSlide key={i}>
                            <img src={url} alt={url} className="aspect-auto" style={{ width: width }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    onClick={handleClicked}
                    className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                    <MdOutlineZoomIn className="text-4xl text-white" />
                </button>
            </div>
            <div id="swiper-custom-pagination" className="mt-4 flex items-center justify-center" />
        </div>
    );
};

export default ImageViewer;
