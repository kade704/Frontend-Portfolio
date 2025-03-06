import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="relative w-screen h-screen flex">
            <div
                className="absolute w-full h-full bg-neutral-700"
                style={{
                    maskImage: "url('/noise.png')",
                    maskSize: "300px 300px",
                    maskRepeat: "repeat",
                    maskPosition: "center",
                }}
            ></div>

            <div className="w-full h-full flex">
                <Navbar />
                <div className="relative ml-[150px] w-full h-full">
                    <div className="w-full h-full">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
