export const projects = [
  // 내폼리폼 프로젝트
  {
    type: "web",
    thumbnail: "../assets/MyformReform/Myform_Reform_Thumbnail.jpg",
    logo: "",
    image: ["../assets/MyformReform/Myform_Reform1.png", "../assets/MyformReform/Myform_Reform2.png", "../assets/MyformReform/Myform_Reform3.png", "../assets/MyformReform/Myform_Reform4.png", "../assets/MyformReform/Myform_Reform5.png", "../assets/MyformReform/Myform_Reform6.png"],

    title: "내폼리폼",
    description: "스포츠 유니폼 리폼 구매자와 리폼러 연결 통합 플랫폼",

    Projectdescription:
      "내폼리폼은 스포츠 유니폼·굿즈 리폼을 원하는 사용자와 리폼러를 연결하는 웹 플랫폼입니다. 기존에는 SNS, 당근, 카페 등에 정보가 흩어져 가격·후기 비교가 어렵고, 리폼러는 팔로워 없이 고객을 확보하기 힘든 구조였습니다.사용자는 리폼 요청을 등록하고 여러 리폼러의 견적을 받아 비교할 수 있으며, 리폼러는 작업물 판매·포트폴리오·후기를 한곳에서 관리합니다. 채팅으로 수거→작업→발송 단계를 공유해 진행 상황을 확인할 수 있습니다.",

    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "OpenAI", "Zustand", "Storybook", "ZOD", "SSE", "TanstackQuery(ReactQuery)"],
    link: "#",
    liveDemo: "https://myform-reform.vercel.app",
    github: "https://github.com/Myform-Reform",
    period: "2025.12 - 2026.02",

    members: "PM 1명, 디자이너 2명, 프론트엔드 3명, 백엔드 5명",
    details: {
      Problem:
        "리폼 작업물·견적 확정 후 PG 결제를 진행하면, 결제창에서는 성공으로 보이는데 주문 상세는 '결제 대기'로 남거나 결제 완료 화면으로 넘어가지 않는 경우가 있었습니다. 또 결제 버튼을 빠르게 연타하면 PG 창이 중복으로 열리는 이슈도 발생했습니다.",
      Cause:
        "프론트에서 PG SDK의 success 콜백만으로 결제 완료를 처리했고, 실제 주문 상태 갱신은 백엔드 webhook·승인 API 이후에 이루어지는 구조였습니다. success redirect 시점과 서버 반영 시점 사이에 race condition이 생겼고, 결제 요청 중 버튼 비활성화·중복 요청 방어 로직이 없어 연타 시 orderId가 여러 번 생성될 수 있었습니다.",
      Solution:
        "결제 플로우를 'PG 창 호출 → success redirect → 서버 결제 승인 API 호출 → 주문 상태 polling' 순으로 분리했습니다. 결제 버튼 클릭 시 즉시 loading/disabled 처리하고, React Query mutation으로 승인 API를 호출한 뒤 완료 상태를 확인할 때까지 주문 상세를 refetch했습니다. 실패·타임아웃 시에는 재시도 안내와 함께 결제 대기 상태를 유지하도록 fallback UI를 추가했습니다.",
      Result:
        "결제 완료 후 주문 상태 불일치 케이스를 줄였고, 버튼 연타로 인한 중복 PG 호출도 방지했습니다. 사용자는 결제 → 승인 → 완료까지 한 화면에서 진행 상황을 확인할 수 있게 되어, 리폼 작업물 구매·견적 결제 흐름을 안정적으로 마무리할 수 있었습니다.",
    },
  },

  // 스위프 웹 12기 밍글링 프로젝트
  {
    type: "web",
    thumbnail: "../assets/Mingling/Mingling_Thubnail.png",
    logo: "../assets/Mingling/Logo.png",
    image: ["../assets/Mingling/1.png", "../assets/Mingling/2.png", "../assets/Mingling/3.png", "../assets/Mingling/4.png", "../assets/Mingling/5.png", "../assets/Mingling/6.png"],

    title: "밍글링",
    description: "대학생들의 사고력 향상 위한 AI 피드백 기반 글쓰기 루틴 서비스",

    Projectdescription:
      "Mingling(밍글링) 은 모임 참석자들의 출발 위치를 바탕으로 가장 공평하고 이동이 편리한 중간 지점을 찾아주는 서비스입니다. 지인들과 약속 장소를 정할 때 어디서 만날까? 라는 고민과 위치 선정의 불공평함을 해결하기 위해 기획되었습니다. 단순한 물리적 중간 거리가 아닌 실제 지하철 이동 시간과 환승 횟수를 고려하여 서울 내 최적의 번화가와 모임의 목적(식당, 카페, 놀거리 등)에 맞는 장소를 추천해 줍니다.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "OpenAI", "Zustand", "Storybook", "ZOD", "SSE", "TanstackQuery(ReactQuery)"],
    link: "#",
    liveDemo: "https://www.mingling.kr/",
    github: "https://github.com/SWYP-mingling/Frontend",
    period: "2025.12 - 2026.02",
    details: {
      Problem: "",
      Cause: "",
      Solution: "",
      Result: "",
    },
  },

  // 스위프 웹 11기 써봄 프로젝트
  {
    type: "mobile",
    thumbnail: "../assets/Subom/subom_Thumbnail.png",
    logo: "../assets/Subom/Title_Logo.png",
    image: ["../assets/Subom/Subom_Login.png", "../assets/Subom/2.png", "../assets/Subom/3.png", "../assets/Subom/4.png", "../assets/Subom/5.png", "../assets/Subom/6.png", "../assets/Subom/7.png"],

    title: "써봄",
    description: "대학생들의 사고력 향상 위한 AI 피드백 기반 글쓰기 루틴 서비스",

    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "OpenAI", "Zustand", "Storybook", "ZOD", "SSE", "TanstackQuery(ReactQuery)"],
    link: "#",
    liveDemo: "https://seobom.site",
    github: "https://github.com/SWYP-SUBOM",
    period: "2025.10 - 2025.11",
    members: "PM 1명, 디자이너 1명, 프론트엔드 3명, 백엔드 3명",
    pdf: "../assets/Subom/SWYP_Subom.pdf",
    details: {
      Problem: "aaaaaaaaaaaa",
      Cause: "bbbbbbbbbbbb",
      Solution: "cc",
      Result: "dd",
    },
  },

  //  WAIT:IT 프로젝트
  {
    type: "mobile",
    thumbnail: "../assets/Wait/Group.png",
    logo: "../assets/Wait/Logo.png",
    image: ["../assets/Wait/1.png", "../assets/Wait/2.png", "../assets/Wait/3.png", "../assets/Wait/4.png"],

    title: "WAIT:IT",
    description: "오프라인 공간에서 줄서기를 간편하게 만들어주는 웨이팅 시스템",

    tags: ["React", "React Native", "TypeScript", "Tailwind CSS", "REST API", "Zustand", "ZOD", "TanstackQuery(ReactQuery)"],
    link: "#",
    github: "https://github.com/DMU-Capstone",
    period: "2025.03 - 2025.10",
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
    type: "mobile",
    thumbnail: "../assets/DataFairy/Data_Fairy_Thumbnail.png",
    logo: "../assets/DataFairy/Logo.png",
    image: ["../assets/DataFairy/1.png", "../assets/DataFairy/2.png", "../assets/DataFairy/3.png", "../assets/DataFairy/4.png"],

    title: "자료요정",
    description: "많은 사용자들이 스마트폰으로 강의자료, 회의 내용, 설정 정보 등을 스크린샷으로 저장하지만, 나중에 다시 확인하려고 할 때 어떤 내용인지 기억하기 어렵고, 정리되지 않아 찾기 힘든 문제가 발생합니다. 이를 해결하기 위해, 스크린샷 이미지 안의 텍스트를 자동으로 추출하고, OpenAI를 활용해 요약 + 카테고리 분류 + 폴더 저장까지 자동화하는 서비스",

    tags: ["React Native", "Expo", "TypeScript", "Style Component", "REST API", "OpenAI"],
    link: "#",

    github: "https://github.com/Zerotone-ClearShot",
    period: "2025.03 - 2025.03",
    members: "PM 1명, 프론트엔드 1명, 백엔드 2명",
    pdf: "../assets/DataFairy/CLEARSHOT.pdf",
    details:
      "React Native와 Expo를 활용하여 크로스 플랫폼 모바일 앱을 개발했습니다. 앱 구조는 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, TypeScript를 통해 타입 안정성을 확보했습니다.\n\n" +
      "스크린샷 이미지에서 텍스트를 추출하기 위해 OCR(광학 문자 인식) 라이브러리를 활용했습니다. 이미지 전처리 과정을 거쳐 텍스트 인식 정확도를 향상시켰고, 다양한 폰트와 배경에서도 안정적으로 작동하도록 최적화했습니다.\n\n" +
      "추출된 텍스트는 OpenAI API를 통해 자동으로 요약되고 카테고리로 분류됩니다. 프롬프트 엔지니어링을 통해 정확한 요약과 분류가 이루어지도록 최적화했으며, 사용자의 의도에 맞는 카테고리 자동 분류 로직을 구현했습니다.\n\n" +
      "이미지 처리는 효율적인 저장 방식을 채택하여 디바이스 저장 공간을 최적화했습니다. 압축 알고리즘을 적용하여 이미지 크기를 줄이면서도 품질을 유지했고, 비동기 처리를 통해 사용자 경험을 개선했습니다.\n\n" +
      "사용자 경험 개선을 위해 직관적인 UI/UX를 설계했습니다. 스타일 컴포넌트를 활용하여 일관된 디자인 시스템을 구축했고, 로딩 상태와 에러 처리를 명확하게 표시하여 사용자가 앱의 상태를 쉽게 파악할 수 있도록 했습니다. 또한 자동 저장 기능과 검색 기능을 구현하여 사용자가 저장한 자료를 빠르게 찾을 수 있도록 했습니다.",
  },

  // DASOM 프로젝트
  {
    type: "web",
    thumbnail: "../assets/DASOM/banner.png",
    logo: "../assets/DASOM/Logo.png",
    image: ["../assets/DASOM/1.png"],

    title: "DASOM",
    description: "동양미래대학교 컴퓨터공학부 전공동아리 다솜의 공식 홈페이지입니다. 동아리 소개, 개발 기록, 회원 관리 등 동아리 운영에 필요한 기능을 제공하는 반응형 웹사이트입니다.",

    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "#",

    github: "https://github.com/DASOM-GitHub",
    period: "2024.07 - 2025.01",

    members: "프론트엔드 4명, 백엔드 2명",

    details:
      "React와 TypeScript를 활용하여 전공동아리 홈페이지를 개발했습니다. 컴포넌트 기반 아키텍처로 설계하여 재사용성과 유지보수성을 높였으며, Tailwind CSS를 통해 일관된 디자인 시스템을 구축했습니다.\n\n" +
      "반응형 웹 디자인을 구현하여 데스크톱과 모바일 환경에서 모두 최적화된 사용자 경험을 제공했습니다. 미디어 쿼리와 Tailwind CSS의 반응형 유틸리티를 활용하여 다양한 화면 크기에 대응하는 레이아웃을 설계했습니다.\n\n" +
      "동아리 소개 페이지를 구현하여 동아리의 목적, 활동 내용, 멤버 소개 등을 시각적으로 표현했습니다. 히어로 섹션에 동아리 활동 사진을 배경으로 사용하여 동아리의 정체성을 강조했습니다.\n\n" +
      "개발 기록 페이지를 통해 동아리에서 진행한 프로젝트들을 카드 형태로 표시하고, 각 프로젝트의 상세 정보를 모달로 제공했습니다. 프로젝트 필터링 및 검색 기능을 구현하여 사용자가 원하는 프로젝트를 쉽게 찾을 수 있도록 했습니다.\n\n" +
      "회원가입 및 로그인 기능을 구현하여 동아리 멤버 관리 시스템을 구축했습니다. REST API를 통해 서버와 통신하며, 인증 토큰을 활용한 세션 관리를 구현했습니다. 회원 정보 수정 및 프로필 관리 기능도 포함했습니다.\n\n" +
      "사용자 경험 개선을 위해 페이지 전환 애니메이션과 로딩 상태를 명확하게 표시했습니다. 에러 처리와 폼 유효성 검사를 구현하여 사용자가 입력한 정보의 정확성을 보장했습니다. 또한 SEO 최적화를 고려하여 메타 태그와 시맨틱 HTML을 적절히 활용했습니다.",
  },
]
