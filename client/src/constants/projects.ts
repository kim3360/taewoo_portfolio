export const projects = [
  // 스위프 웹 11기 써봄 프로젝트
  {
    thumbnail: "../assets/Subom/subom_Thumbnail.png",
    logo: "../assets/Subom/Title_Logo.png",
    image: [
      "../assets/Subom/Subom_Login.png",
      "../assets/Subom/2.png",
      "../assets/Subom/3.png",
      "../assets/Subom/4.png",
      "../assets/Subom/5.png",
      "../assets/Subom/6.png",
      "../assets/Subom/7.png",
    ],

    title: "써봄",
    description:
      "대학생들의 사고력 향상 위한 AI 피드백 기반 글쓰기 루틴 서비스",

    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "OpenAI",
      "Zustand",
      "Storybook",
      "ZOD",
      "SSE",
      "TanstackQuery(ReactQuery)",
    ],
    link: "#",
    liveDemo: "https://seobom.site",
    github: "https://github.com/SWYP-SUBOM",
    period: "2025.10 - 2025.11",
    teamSize: "8명",
    members: "PM 1명, 디자이너 1명, 프론트엔드 3명, 백엔드 3명",
    pdf: "../assets/Subom/SWYP_Subom.pdf",
    details:
      "React Native와 Expo를 활용하여 크로스 플랫폼 모바일 앱을 개발했습니다. 앱 구조는 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, TypeScript를 통해 타입 안정성을 확보했습니다.\n\n" +
      "스크린샷 이미지에서 텍스트를 추출하기 위해 OCR(광학 문자 인식) 라이브러리를 활용했습니다. 이미지 전처리 과정을 거쳐 텍스트 인식 정확도를 향상시켰고, 다양한 폰트와 배경에서도 안정적으로 작동하도록 최적화했습니다.\n\n" +
      "추출된 텍스트는 OpenAI API를 통해 자동으로 요약되고 카테고리로 분류됩니다. 프롬프트 엔지니어링을 통해 정확한 요약과 분류가 이루어지도록 최적화했으며, 사용자의 의도에 맞는 카테고리 자동 분류 로직을 구현했습니다.\n\n" +
      "이미지 처리는 효율적인 저장 방식을 채택하여 디바이스 저장 공간을 최적화했습니다. 압축 알고리즘을 적용하여 이미지 크기를 줄이면서도 품질을 유지했고, 비동기 처리를 통해 사용자 경험을 개선했습니다.\n\n" +
      "사용자 경험 개선을 위해 직관적인 UI/UX를 설계했습니다. 스타일 컴포넌트를 활용하여 일관된 디자인 시스템을 구축했고, 로딩 상태와 에러 처리를 명확하게 표시하여 사용자가 앱의 상태를 쉽게 파악할 수 있도록 했습니다. 또한 자동 저장 기능과 검색 기능을 구현하여 사용자가 저장한 자료를 빠르게 찾을 수 있도록 했습니다.",
  },

  //  WAIT:IT 프로젝트
  {
    thumbnail: "../assets/Wait/Group.png",
    logo: "../assets/Wait/Logo.png",
    image: [
      "../assets/Wait/1.png",
      "../assets/Wait/2.png",
      "../assets/Wait/3.png",
      "../assets/Wait/4.png",
    ],

    title: "WAIT:IT",
    description: "오프라인 공간에서 줄서기를 간편하게 만들어주는 웨이팅 시스템",

    tags: [
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Zustand",
      "ZOD",
      "TanstackQuery(ReactQuery)",
    ],
    link: "#",
    github: "https://github.com/DMU-Capstone",
    period: "2025.03 - 2025.10",
    teamSize: "3명",
    members: "프론트엔드 2명, 백엔드 1명",

    details:
      "React Native와 TypeScript를 활용하여 크로스 플랫폼 모바일 앱을 개발했습니다. 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, Zustand를 통한 전역 상태 관리와 TanstackQuery를 활용한 서버 상태 관리를 구현했습니다.\n\n" +
      "실시간 대기 현황 관리 시스템을 구현했습니다. REST API를 통해 대기 인원 수와 예상 대기 시간을 실시간으로 동기화하여 사용자가 정확한 정보를 확인할 수 있도록 했습니다. 서버와의 통신 최적화를 위해 React Query의 캐싱 전략을 활용하여 불필요한 네트워크 요청을 줄였습니다.\n\n" +
      "위치 기반 서비스를 구현하여 사용자 주변의 매장을 쉽게 찾을 수 있도록 했습니다. GPS를 활용한 현재 위치 기반 검색 기능과 지도 API를 통한 매장 위치 표시 기능을 구현했습니다. 거리 계산 알고리즘을 적용하여 가까운 순서대로 매장을 정렬하여 사용자 편의성을 높였습니다.\n\n" +
      "대기 번호표 발급 및 관리 시스템을 개발했습니다. 사용자가 원클릭으로 대기 번호를 발급받고, 실시간으로 자신의 대기 순서와 예상 시간을 확인할 수 있도록 했습니다. 대기 알림 기능을 구현하여 대기 손님이 일정 수준 이하로 줄어들 때 푸시 알림을 통해 사용자에게 알려주는 기능을 추가했습니다.\n\n" +
      "트렌드 줄서기 스팟과 급상승 검색어 기능을 구현하여 사용자들이 인기 있는 매장을 쉽게 발견할 수 있도록 했습니다. 매장 상세 페이지에서는 운영 시간, 위치 정보, 대표 키워드 등 상세 정보를 제공하여 사용자가 매장을 선택하는 데 도움을 주었습니다.\n\n" +
      "사용자 경험 개선을 위해 직관적인 UI/UX를 설계했습니다. Tailwind CSS를 활용하여 일관된 디자인 시스템을 구축했고, 로딩 상태와 에러 처리를 명확하게 표시하여 사용자가 앱의 상태를 쉽게 파악할 수 있도록 했습니다. 또한 대기 내역 관리 기능을 통해 사용자가 과거 대기 기록을 확인할 수 있도록 구현했습니다.",
  },

  // 자료요정
  {
    thumbnail: "../assets/DataFairy/Data_Fairy_Thumbnail.png",
    logo: "../assets/DataFairy/Logo.png",
    image: [
      "../assets/DataFairy/1.png",
      "../assets/DataFairy/2.png",
      "../assets/DataFairy/3.png",
      "../assets/DataFairy/4.png",
    ],

    title: "자료요정",
    description:
      "많은 사용자들이 스마트폰으로 강의자료, 회의 내용, 설정 정보 등을 스크린샷으로 저장하지만, 나중에 다시 확인하려고 할 때 어떤 내용인지 기억하기 어렵고, 정리되지 않아 찾기 힘든 문제가 발생합니다. 이를 해결하기 위해, 스크린샷 이미지 안의 텍스트를 자동으로 추출하고, OpenAI를 활용해 요약 + 카테고리 분류 + 폴더 저장까지 자동화하는 서비스",

    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Style Component",
      "REST API",
      "OpenAI",
    ],
    link: "#",

    github: "https://github.com/Zerotone-ClearShot",
    period: "2025.03 - 2025.03",
    teamSize: "4명",
    members: "PM 1명, 프론트엔드 1명, 백엔드 2명",
    pdf: "../assets/DataFairy/CLEARSHOT.pdf",
    details:
      "React Native와 Expo를 활용하여 크로스 플랫폼 모바일 앱을 개발했습니다. 앱 구조는 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, TypeScript를 통해 타입 안정성을 확보했습니다.\n\n" +
      "스크린샷 이미지에서 텍스트를 추출하기 위해 OCR(광학 문자 인식) 라이브러리를 활용했습니다. 이미지 전처리 과정을 거쳐 텍스트 인식 정확도를 향상시켰고, 다양한 폰트와 배경에서도 안정적으로 작동하도록 최적화했습니다.\n\n" +
      "추출된 텍스트는 OpenAI API를 통해 자동으로 요약되고 카테고리로 분류됩니다. 프롬프트 엔지니어링을 통해 정확한 요약과 분류가 이루어지도록 최적화했으며, 사용자의 의도에 맞는 카테고리 자동 분류 로직을 구현했습니다.\n\n" +
      "이미지 처리는 효율적인 저장 방식을 채택하여 디바이스 저장 공간을 최적화했습니다. 압축 알고리즘을 적용하여 이미지 크기를 줄이면서도 품질을 유지했고, 비동기 처리를 통해 사용자 경험을 개선했습니다.\n\n" +
      "사용자 경험 개선을 위해 직관적인 UI/UX를 설계했습니다. 스타일 컴포넌트를 활용하여 일관된 디자인 시스템을 구축했고, 로딩 상태와 에러 처리를 명확하게 표시하여 사용자가 앱의 상태를 쉽게 파악할 수 있도록 했습니다. 또한 자동 저장 기능과 검색 기능을 구현하여 사용자가 저장한 자료를 빠르게 찾을 수 있도록 했습니다.",
  },

  {
    thumbnail: "../assets/DASOM/banner.png",
    logo: "../assets/DASOM/Logo.png",
    image: [
      "../assets/DataFairy/1.png",
      "../assets/DataFairy/2.png",
      "../assets/DataFairy/3.png",
      "../assets/DataFairy/4.png",
    ],

    title: "DASOM",
    description:
      "동양미래대학교 컴퓨터공학부 전공동아리 다솜의 공식 홈페이지입니다. 동아리 소개, 개발 기록, 회원 관리 등 동아리 운영에 필요한 기능을 제공하는 반응형 웹사이트입니다.",

    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "#",

    github: "https://github.com/DASOM-GitHub",
    period: "2024.07 - 2025.01",
    teamSize: "6명",
    members: "프론트엔드 4명, 백엔드 2명",

    details:
      "React와 TypeScript를 활용하여 전공동아리 홈페이지를 개발했습니다. 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, Tailwind CSS를 통해 일관된 디자인 시스템을 구축했습니다.\n\n" +
      "반응형 웹 디자인을 구현하여 데스크톱과 모바일 환경에서 모두 최적화된 사용자 경험을 제공했습니다. 미디어 쿼리와 Tailwind CSS의 반응형 유틸리티를 활용하여 다양한 화면 크기에 대응하는 레이아웃을 설계했습니다.\n\n" +
      "동아리 소개 페이지를 구현하여 동아리의 목적, 활동 내용, 멤버 소개 등을 시각적으로 표현했습니다. 히어로 섹션에 동아리 활동 사진을 배경으로 사용하여 동아리의 정체성을 강조했습니다.\n\n" +
      "개발 기록 페이지를 통해 동아리에서 진행한 프로젝트들을 카드 형태로 표시하고, 각 프로젝트의 상세 정보를 모달로 제공했습니다. 프로젝트 필터링 및 검색 기능을 구현하여 사용자가 원하는 프로젝트를 쉽게 찾을 수 있도록 했습니다.\n\n" +
      "회원가입 및 로그인 기능을 구현하여 동아리 멤버 관리 시스템을 구축했습니다. REST API를 통해 서버와 통신하며, 인증 토큰을 활용한 세션 관리를 구현했습니다. 회원 정보 수정 및 프로필 관리 기능도 포함했습니다.\n\n" +
      "사용자 경험 개선을 위해 페이지 전환 애니메이션과 로딩 상태를 명확하게 표시했습니다. 에러 처리와 폼 유효성 검사를 구현하여 사용자가 입력한 정보의 정확성을 보장했습니다. 또한 SEO 최적화를 고려하여 메타 태그와 시맨틱 HTML을 적절히 활용했습니다.",
  },
];
