export const stackIntro = {
  eyebrow: "Tech Stack",
  lead: "웹·모바일 프론트엔드 — 설계부터 배포까지",
} as const;

export const stackCategories = [
  {
    id: "interface",
    title: "Interface",
    items: [
      {
        headline: "반응형 웹 UI",
        tags: "React · TypeScript · Tailwind CSS · HTML/CSS",
      },
      {
        headline: "모바일 앱",
        tags: "React Native · WebView · 하이브리드 화면",
      },
      {
        headline: "UI 품질",
        tags: "Storybook · 접근성 · 반응형 레이아웃",
      },
    ],
  },
  {
    id: "logic",
    title: "Logic & Data",
    items: [
      {
        headline: "API 연동",
        tags: "REST · TanStack Query · Zod · Postman",
      },
      {
        headline: "상태 관리",
        tags: "Zustand · React Router v6 · 폼·로딩 UX",
      },
      {
        headline: "실시간·검증",
        tags: "SSE · 에러 핸들링 · 타입 안전성",
      },
    ],
  },
  {
    id: "workflow",
    title: "Workflow",
    items: [
      {
        headline: "개발 환경",
        tags: "Vite · pnpm · VS Code · Cursor",
      },
      {
        headline: "협업·배포",
        tags: "Git · GitHub · Figma · Vercel",
      },
    ],
  },
] as const;

export const stackTools = [
  { name: "React", subtitle: "웹·컴포넌트 UI" },
  { name: "React Native", subtitle: "모바일 앱" },
  { name: "TypeScript", subtitle: "타입 기반 개발" },
  { name: "Figma", subtitle: "디자인 협업" },
  { name: "Vite", subtitle: "빌드·HMR" },
  { name: "GitHub", subtitle: "버전·PR" },
] as const;
