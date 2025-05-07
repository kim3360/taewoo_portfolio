// import React from "react";
import { FaUser, FaPhone, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
export const About_me = () => {



    return (
        <>
            <div id="ABOUT ME" className="h-32 bg-gradient-to-b from-transparent to-black/50"></div>

            <div className="min-h-screen bg-black/50 backdrop-blur-sm text-white flex flex-col justify-center items-center py-16">

                <h1 className="text-7xl font-bold mb-12 ">ABOUT ME</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full text-center mt-10">
                    {/* Column 1 */}
                    <div className="flex flex-col items-cenxter gap-3">
                        <div className="flex items-center gap-2 mb-1 text-4xl font-semibold justify-center ">
                            <FaUser />
                            이름
                        </div>
                        <p className="mb-4  text-gray-300 pl-10">김태우</p>

                        <div className="flex items-center gap-2 mb-1 text-4xl font-semibold justify-center ">
                            <FaPhone />
                            연락처
                        </div>
                        <p className="text-gray-300 pl-14">010-2332-0838</p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 mb-1 text-4xl font-semibold justify-center ">
                            <FaCalendarAlt />
                            생년월일
                        </div>
                        <p className="mb-4 text-gray-300">2002.12.26</p>

                        <div className="flex items-center gap-2 mb-1 text-4xl font-semibold justify-center ">
                            <FaEnvelope />
                            이메일
                        </div>
                        <p className="text-gray-300">rlaxkd1226@naver.com</p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 mb-1 text-4xl font-semibold justify-center ">
                            <FaMapMarkerAlt />
                            위치
                        </div>
                        <p className="mb-4 text-gray-300">경기도 성남시</p>

                        <div className="flex items-center gap-2 mb-1 text-4xl font-semibold justify-center ">
                            <FaUniversity />
                            학력
                        </div>
                        <p className="text-gray-300">동양미래대학교<br />(컴퓨터소프트웨어과)</p>
                    </div>
                </div>

                {/* <h1 className="text-7xl font-bold mt-10 mb-12 ">SKILL</h1> */}
            </div>

        </>
    );
};


