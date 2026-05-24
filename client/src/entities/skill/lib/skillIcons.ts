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
  TestTube2,
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
  SiNextdotjs,
  SiRedux,
  SiGitlab,
  SiNotion,
  SiJira,
  SiGraphql,
  SiJest,
  SiVitest,
  SiCypress,
  SiEslint,
  SiPrettier,
  SiSass,
  SiFramer,
  SiReacthookform,
  SiTestinglibrary,
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
    // Core
    React: { Icon: SiReact, color: "#61DAFB" },
    "React Native": { Icon: SiReact, color: "#61DAFB" },
    "React · React Native": { Icon: SiReact, color: "#61DAFB" },
    TypeScript: { Icon: SiTypescript, color: "#3178C6" },
    JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
    HTML5: { Icon: SiHtml5, color: "#E34F26" },
    CSS3: { Icon: SiCss3, color: "#1572B6" },
    "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
    Sass: { Icon: SiSass, color: "#CC6699" },
    SCSS: { Icon: SiSass, color: "#CC6699" },

    // State & data
    Zustand: { Icon: Box, color: "#764ABC" },
    Redux: { Icon: SiRedux, color: "#764ABC" },
    Reducer: { Icon: SiRedux, color: "#764ABC" },
    Zod: { Icon: SiZod, color: "#3E63DD" },
    ZOD: { Icon: SiZod, color: "#3E63DD" },
    TanstackQuery: { Icon: SiReactquery, color: "#FF4154" },
    "TanstackQuery(ReactQuery)": { Icon: SiReactquery, color: "#FF4154" },
    "React Router": { Icon: SiReactrouter, color: "#CA4245" },
    "React-Router-Dom v6": { Icon: SiReactrouter, color: "#CA4245" },
    GraphQL: { Icon: SiGraphql, color: "#E10098" },
    "React Hook Form": { Icon: SiReacthookform, color: "#EC5990" },
    "RESTful API": { Icon: Globe, color: "#3B82F6" },
    SSE: { Icon: Cloud, color: "#06B6D4" },

    // UI & style
    "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
    TailwindCSS: { Icon: SiTailwindcss, color: "#06B6D4" },
    Storybook: { Icon: SiStorybook, color: "#FF4785" },
    "Framer Motion": { Icon: SiFramer, color: "#0055FF" },
    "Responsive Design": { Icon: Monitor, color: "#6366F1" },
    "Performance Optimization": { Icon: Gauge, color: "#10B981" },
    SEO: { Icon: Search, color: "#8B5CF6" },

    // Build & test
    Vite: { Icon: SiVite, color: "#646CFF" },
    Webpack: { Icon: SiWebpack, color: "#8DD6F9" },
    npm: { Icon: SiNpm, color: "#CB3837" },
    pnpm: { Icon: SiPnpm, color: "#F69220" },
    yarn: { Icon: SiYarn, color: "#2C8EBB" },
    ESLint: { Icon: SiEslint, color: "#4B32C3" },
    Prettier: { Icon: SiPrettier, color: "#56B6C2" },
    Jest: { Icon: SiJest, color: "#C21325" },
    Vitest: { Icon: SiVitest, color: "#6E9F18" },
    Cypress: { Icon: SiCypress, color: "#69D3A7" },
    Playwright: { Icon: TestTube2, color: "#2EAD33" },
    "Testing Library": { Icon: SiTestinglibrary, color: "#E33332" },

    // Tools & collab
    Git: { Icon: FaGitAlt, color: "#F05032" },
    GitHub: { Icon: SiGithub, color: "#FFFFFF" },
    GitLab: { Icon: SiGitlab, color: "#FC6D26" },
    Figma: { Icon: SiFigma, color: "#F24E1E" },
    Notion: { Icon: SiNotion, color: "#FFFFFF" },
    Jira: { Icon: SiJira, color: "#0052CC" },
    Slack: { Icon: SiSlack, color: "#4A154B" },
    Postman: { Icon: SiPostman, color: "#FF6C37" },
    Vercel: { Icon: SiVercel, color: "#FFFFFF" },
    "CI/CD": { Icon: Workflow, color: "#7C3AED" },
    "VS Code": { Icon: Code2, color: "#007ACC" },
    Cursor: { Icon: Terminal, color: "#A8B2C4" },
  };

  return iconMap[skill] || { Icon: Code2, color: "#6366F1" };
};
