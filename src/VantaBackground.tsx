import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

import { FaGithub, FaGlobe, FaUser, FaPhone, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { Header } from "./layout/Header";

import ScrollIndicator from "./components/ScrollIndicator";

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
                        className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition"
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
                    <a href="https://github.com/kim3360" target="_blank" rel="noreferrer" className="hover:text-orange-400">
                        <FaGithub />
                    </a>
                    <a href="https://yourblog.com" target="_blank" rel="noreferrer" className="hover:text-orange-400">
                        <FaGlobe />
                    </a>
                </div>

                <ScrollIndicator />

            </div>
            <div id="ABOUT ME" className="h-32 bg-gradient-to-b from-transparent to-black/50"></div>
            {/* ABOUT ME 섹션 */}
            <div className="min-h-screen bg-black/50 backdrop-blur-sm text-white flex flex-col items-center py-16">
                <h1 className="text-4xl font-bold mb-12">ABOUT ME</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full text-center">
                    {/* Column 1 */}
                    <div>
                        <div className="flex items-center gap-2 mb-1 text-lg font-semibold justify-center ">
                            <FaUser />
                            이름
                        </div>
                        <p className="mb-4 text-gray-300">김태우</p>

                        <div className="flex items-center gap-2 mb-1 text-lg font-semibold justify-center">
                            <FaPhone />
                            연락처
                        </div>
                        <p className="text-gray-300">010-2332-0838</p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <div className="flex items-center gap-2 mb-1 text-lg font-semibold justify-center">
                            <FaCalendarAlt />
                            생년월일
                        </div>
                        <p className="mb-4 text-gray-300">2002.12.26</p>

                        <div className="flex items-center gap-2 mb-1 text-lg font-semibold justify-center">
                            <FaEnvelope />
                            이메일
                        </div>
                        <p className="text-gray-300">rlaxkd1226@naver.com</p>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <div className="flex items-center gap-2 mb-1 text-lg font-semibold justify-center">
                            <FaMapMarkerAlt />
                            위치
                        </div>
                        <p className="mb-4 text-gray-300">경기도 성남시</p>

                        <div className="flex items-center gap-2 mb-1 text-lg font-semibold justify-center">
                            <FaUniversity />
                            학력
                        </div>
                        <p className="text-gray-300">동양미래대학교<br />(컴퓨터소프트웨어과)</p>
                    </div>
                </div>
            </div>


            {/* Transition Gradient */}
            <div className="h-32 bg-gradient-to-b from-black/50 to-[#0f172a]"></div>

            <div className="h-screen bg-[#0f172a] text-white"></div>
            {/* CONTACT 섹션 */}
            {/* <div id="contact" className="h-screen bg-red backdrop-blur-sm"></div> */}
        </>
    );
};

export default VantaBackground;
