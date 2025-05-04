import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { FaGithub, FaGlobe } from "react-icons/fa";

const VantaBackground = () => {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(null);

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE,
                    highlightColor: 0xff9900,
                    midtoneColor: 0x0f2027,
                    lowlightColor: 0x000000,
                    baseColor: 0x0f2027,
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
            <div
                ref={vantaRef}
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            ></div>

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    padding: "0 1rem",
                }}
            >
                <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>YOUT</h1>
                <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "1rem" }}>
                    FRONT-END DEVELOPER | 사용자 경험을 고민하는 개발자
                </p>

                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <button
                        onClick={() => scrollToSection("projects")}
                        style={{
                            padding: "0.5rem 1rem",
                            background: "transparent",
                            border: "1px solid white",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "0.9rem",
                            borderRadius: "5px",
                        }}
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        style={{
                            padding: "0.5rem 1rem",
                            background: "white",
                            color: "#0f2027",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "0.9rem",
                            borderRadius: "5px",
                        }}
                    >
                        Contact Me
                    </button>
                </div>

                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                    <a href="https://github.com/kim3360" target="_blank" rel="noreferrer" style={{ color: "white", fontSize: "1.5rem" }}>
                        <FaGithub />
                    </a>
                    <a href="https://yourblog.com" target="_blank" rel="noreferrer" style={{ color: "white", fontSize: "1.5rem" }}>
                        <FaGlobe />
                    </a>
                </div>

                <div style={{ animation: "bounce 2s infinite", fontSize: "1.5rem" }}>
                    ↓
                </div>
            </div>

            {/* 아래 연결될 섹션 예시 */}
            <div id="projects" style={{ height: "100vh", background: "#fff" }}></div>
            <div id="contact" style={{ height: "100vh", background: "#eee" }}></div>
        </>
    );
};

export default VantaBackground;
