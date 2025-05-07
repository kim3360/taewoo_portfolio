import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

import { FaGithub, FaGlobe } from "react-icons/fa";
import { Header } from "./layout/Header";

import ScrollIndicator from "./components/ScrollIndicator";
import { About_me } from "./About_me";
import { Project } from "./Project";

const VantaBackground = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(null);


    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE,
                    highlightColor: 0xf9f9f9,
                    midtoneColor: 0x4378ed,
                    lowlightColor: 0x000000,
                    baseColor: 0x232323,
                    blurFactor: 0.5,
                    speed: 1.0,
                    zoom: 1.0,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header />
            <div
                ref={vantaRef}
                className="w-full h-full fixed top-0 left-0 -z-10"
            ></div>

            <div className="relative z-10 h-screen flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="text-8xl font-bold mb-2">FRONT-END DEVELOPER</h1>
                <p className="text-lg text-gray-300 mb-4">사용자 경험을 고민하는 개발자</p>

                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="px-4 py-2 border border-blue-400 text-whit rounded hover:bg-blue-500 hover:text-white transition"
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
                    >
                        Contact Me
                    </button>
                </div>

                <div className="flex gap-6 text-2xl mb-8">
                    <a href="https://github.com/kim3360" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                        <FaGithub />
                    </a>
                    <a href="https://yourblog.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                        <FaGlobe />
                    </a>
                </div>

                <ScrollIndicator />

            </div>
            <About_me />
            <Project/>


          
            {/* CONTACT 섹션 */}
            {/* <div id="contact" className="h-screen bg-red backdrop-blur-sm"></div> */}
        </>
    );
};

export default VantaBackground;
