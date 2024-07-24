"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/assets/logoticker/acme.png",
    "/assets/logoticker/apex.png",
    "/assets/logoticker/celestial.png",
    "/assets/logoticker/echo.png",
    "/assets/logoticker/pulse.png",
    "/assets/logoticker/quantum.png",
];

export const LogoTicker = () => {
    return (
        <div className="bg-black/[0.96] py-[60px] ">
            <h2 className="text-center text-white/70 text-xl">
                Trusted by the world's most innovative teams
            </h2>
            <div className="container mx-auto">
                <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:h-full after:h-full before:w-20 after:w-20 before:absolute after:absolute before:left-0 after:right-0 before:top-0 after:top-0 before:bg-gradient-to-r before:from-black before:to-transparent after:bg-gradient-to-l after:from-black after:to-transparent">
                    <motion.div
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        initial={{ translateX: 0 }}
                        animate={{ translateX: "-50%" }}
                        className="flex flex-none gap-16 justify-evenly items-center"
                    >
                        {images.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Logo ${index + 1}`}
                                width={100}
                                height={100}
                                className="flex-none h-8 w-auto"
                            />
                        ))}
                        {images.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Logo ${index + 1}`}
                                width={100}
                                height={100}
                                className="flex-none h-8 w-auto"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
