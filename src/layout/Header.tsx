import { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-300/50 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 좌측 로고 */}
        <div className="text-white text-xl font-semibold">KTW's Portfolio</div>

        {/* 우측 네비게이션 메뉴 */}
        <nav className="flex gap-6 text-white text-sm font-medium">
          <a href="#about" className="hover:text-blue-500 transition-colors">About me</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#archiving" className="hover:text-blue-500 transition-colors">Interview</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#career" className="hover:text-blue-500 transition-colors">Career</a>
        </nav>
      </div>
    </header>
  );
};


