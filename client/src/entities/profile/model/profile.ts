export const profile = {
  name: "김태우",
  nameEn: "TAEWOO",
  role: "FRONTEND DEV",
  contact: {
    email: "rlaxkd1226@naver.com",
    github: "@kim3360",
    location: "경기도, 대한민국",
  },
  bio: `안녕하세요! 저는 React와 TypeScript를 중심으로 웹·모바일 서비스를 만드는 프론트엔드 개발자입니다.
사용자 경험과 코드 품질을 함께 고려하며, 팀 프로젝트에서 UI 구현·API 연동·상태 관리를 담당해 왔습니다.
새로운 기술을 빠르게 학습하고 협업으로 완성도 높은 결과물을 만드는 것을 좋아합니다.`,
  bioShort:
    "React·TypeScript 기반 프론트엔드 개발자. 팀 프로젝트에서 UI·API·상태 관리를 담당하며 사용자 경험 중심의 서비스를 만듭니다.",
  aboutFrontend: `프론트엔드는 사용자가 서비스를 처음 만나는 접점입니다. React와 TypeScript로 재사용 가능한 UI를 설계·구현하고, TanStack Query·Zustand로 서버·클라이언트 상태를 안정적으로 연결합니다.

웹(SPA)과 React Native 앱을 모두 다뤄 왔으며, 반응형 레이아웃·로딩·에러 처리까지 고려해 끊김 없는 사용 경험을 만드는 것을 중요하게 생각합니다.

협업에서는 Figma 시안을 코드로 옮기고, 팀 프로젝트에서 UI·API 연동·코드 리뷰를 통해 유지보수하기 좋은 프론트엔드를 만드는 데 집중합니다.`,
} as const;

export const awards = [
  {
    period: "2025",
    title: "SWYP 11기 — 써봄",
    subtitle: "AI 기반 글쓰기 루틴 웹 서비스 · 프론트엔드",
  },
  {
    period: "2025",
    title: "캡스톤 — WAIT:IT",
    subtitle: "오프라인 웨이팅 시스템 · React Native",
  },
  {
    period: "2024",
    title: "DASOM 동아리 홈페이지",
    subtitle: "전공동아리 공식 웹 · React / TypeScript",
  },
] as const;

export const activities = [
  {
    period: "2024 – 2025",
    title: "DASOM",
    subtitle: "동양미래대학교 컴공 전공동아리 · 프론트엔드",
  },
  {
    period: "2025",
    title: "SWYP 11기",
    subtitle: "사이드 프로젝트 · 써봄",
  },
  {
    period: "2025",
    title: "엠클라우독 인턴",
    subtitle: "모바일개발팀 · React Native",
  },
] as const;
