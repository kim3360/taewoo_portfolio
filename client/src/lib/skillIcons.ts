import {
  Code2,
  Box,
  Terminal,
  Monitor,
  Globe,
  Gauge,
  Search,
  Cloud,
  Workflow,
} from "lucide-react";
import {
  SiReact,
  SiReactrouter,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiZod,
  SiReactquery,
  SiStorybook,
  SiGithub,
  SiFigma,
  SiSlack,
  SiWebpack,
  SiVite,
  SiNpm,
  SiPnpm,
  SiYarn,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

// 스킬 아이콘과 색상 매핑
export const getSkillIcon = (skill: string) => {
  const iconMap: Record<
    string,
    {
      Icon: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
      }>;
      color: string;
    }
  > = {
    // Frontend
    React: { Icon: SiReact, color: "#61DAFB" },
    "React Native": { Icon: SiReact, color: "#61DAFB" },
    TypeScript: { Icon: SiTypescript, color: "#3178C6" },
    JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
    HTML5: { Icon: SiHtml5, color: "#E34F26" },
    CSS3: { Icon: SiCss3, color: "#1572B6" },
    "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
    Zustand: { Icon: Box, color: "#764ABC" },
    ZOD: { Icon: SiZod, color: "#3E63DD" },
    "TanstackQuery(ReactQuery)": { Icon: SiReactquery, color: "#FF4154" },
    Storybook: { Icon: SiStorybook, color: "#FF4785" },
    "React-Router-Dom v6": { Icon: SiReactrouter, color: "#CA4245" },
    // Tools
    Git: { Icon: FaGitAlt, color: "#F05032" },
    GitHub: { Icon: SiGithub, color: "#181717" },
    Figma: { Icon: SiFigma, color: "#F24E1E" },
    Slack: { Icon: SiSlack, color: "#4A154B" },
    "VS Code": { Icon: Code2, color: "#007ACC" },
    Cursor: { Icon: Terminal, color: "#000000" },
    Webpack: { Icon: SiWebpack, color: "#8DD6F9" },
    Vite: { Icon: SiVite, color: "#646CFF" },
    npm: { Icon: SiNpm, color: "#CB3837" },
    pnpm: { Icon: SiPnpm, color: "#F69220" },
    yarn: { Icon: SiYarn, color: "#2C8EBB" },
    Postman: { Icon: SiPostman, color: "#FF6C37" },
    // Additional
    "Responsive Design": { Icon: Monitor, color: "#6366F1" },
    "RESTful API": { Icon: Globe, color: "#3B82F6" },
    "Performance Optimization": { Icon: Gauge, color: "#10B981" },
    SEO: { Icon: Search, color: "#8B5CF6" },
    SSE: { Icon: Cloud, color: "#06B6D4" },
    Vercel: { Icon: SiVercel, color: "#000000" },
    "CI/CD": { Icon: Workflow, color: "#7C3AED" },
  };

  return iconMap[skill] || { Icon: Code2, color: "#6366F1" };
};
