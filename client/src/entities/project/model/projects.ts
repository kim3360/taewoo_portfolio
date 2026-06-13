export const projects = [
  // 내폼리폼 프로젝트
  {
    slug: "myform-reform",
    type: "web",
    thumbnail: "../assets/MyformReform/Myform_Reform_Thumbnail.jpg",
    logo: "../assets/MyformReform/Logo.png",
    image: ["../assets/MyformReform/Myform_Reform1.png", "../assets/MyformReform/Myform_Reform2.png", "../assets/MyformReform/Myform_Reform3.png", "../assets/MyformReform/Myform_Reform4.png", "../assets/MyformReform/Myform_Reform5.png", "../assets/MyformReform/Myform_Reform6.png"],

    title: "내폼리폼",
    description: "스포츠 유니폼 리폼 구매자와 리폼러 연결 통합 플랫폼",

    Projectdescription:
      "내폼리폼은 스포츠 유니폼·굿즈 리폼을 원하는 사용자와 리폼러를 연결하는 웹 플랫폼입니다. 기존에는 SNS, 당근, 카페 등에 정보가 흩어져 가격·후기 비교가 어렵고, 리폼러는 팔로워 없이 고객을 확보하기 힘든 구조였습니다.사용자는 리폼 요청을 등록하고 여러 리폼러의 견적을 받아 비교할 수 있으며, 리폼러는 작업물 판매·포트폴리오·후기를 한곳에서 관리합니다. 채팅으로 수거→작업→발송 단계를 공유해 진행 상황을 확인할 수 있습니다.",

    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "WebSocket", "PG 결제", "Zustand", "Storybook", "ZOD", "SSE", "TanstackQuery"],
    link: "#",
    liveDemo: "https://myform-reform.vercel.app",
    github: "https://github.com/UMC-9th-project/myform-reform-FE",
    period: "2025.12 - 2026.02",

    members: "PM 1명, 디자이너 2명, 프론트엔드 3명, 백엔드 5명",
    features: [
      {
        title: "리폼 작업물 마켓",
        description: "리폼러가 등록한 작업물을 탐색·구매할 수 있는 마켓 플레이스. 상품 상세, 옵션 선택, 장바구니 담기까지 이어지는 구매 흐름을 제공합니다.",
      },
      {
        title: "리폼 요청 & 견적 제안",
        description: "사용자가 사진·설명과 함께 리폼 요청을 등록하고, 여러 리폼러로부터 견적을 받아 가격·스타일·납기를 비교할 수 있습니다.",
      },
      {
        title: "리폼러 프로필 & 포트폴리오",
        description: "리폼러별 작업물, 후기, 평점을 한곳에서 확인해 신뢰할 수 있는 제작자를 선택할 수 있습니다.",
      },
      {
        title: "실시간 채팅",
        description: "요청·주문 건별 채팅방에서 문의와 진행 상황(수거 → 작업 → 발송)을 실시간으로 공유합니다.",
      },
      {
        title: "장바구니 & PG 결제",
        description: "다중 상품 선택·수량 조절·배송비 포함 결제 금액 계산 후 PG 연동 결제를 지원합니다.",
      },
    ],
    responsibilities: ["마켓·장바구니·결제 페이지 UI 및 상태 흐름 설계·구현", "PG SDK 연동, 결제 승인 API 호출 및 주문 상태 polling 처리", "TanStack Query 기반 서버 상태 관리, Zustand 클라이언트 상태 분리", "Zod 폼 검증, Storybook 공통 컴포넌트 문서화", "SSE 기반 채팅 메시지 수신 및 UI 반영"],
    achievements: ["결제 완료 후 주문 상태 불일치·중복 PG 호출 이슈 해결", "리폼 요청 → 견적 → 결제까지 핵심 사용자 플로우 MVP 구현"],
    details: {
      Problem: "리폼 작업물·견적 확정 후 PG 결제를 진행하면, 결제창에서는 성공으로 보이는데 주문 상세는 '결제 대기'로 남거나 결제 완료 화면으로 넘어가지 않는 경우가 있었습니다. 또 결제 버튼을 빠르게 연타하면 PG 창이 중복으로 열리는 이슈도 발생했습니다.",
      Cause: "프론트에서 PG SDK의 success 콜백만으로 결제 완료를 처리했고, 실제 주문 상태 갱신은 백엔드 webhook·승인 API 이후에 이루어지는 구조였습니다. success redirect 시점과 서버 반영 시점 사이에 race condition이 생겼고, 결제 요청 중 버튼 비활성화·중복 요청 방어 로직이 없어 연타 시 orderId가 여러 번 생성될 수 있었습니다.",
      Solution: "결제 플로우를 'PG 창 호출 → success redirect → 서버 결제 승인 API 호출 → 주문 상태 polling' 순으로 분리했습니다. 결제 버튼 클릭 시 즉시 loading/disabled 처리하고, React Query mutation으로 승인 API를 호출한 뒤 완료 상태를 확인할 때까지 주문 상세를 refetch했습니다. 실패·타임아웃 시에는 재시도 안내와 함께 결제 대기 상태를 유지하도록 fallback UI를 추가했습니다.",
      Result: "결제 완료 후 주문 상태 불일치 케이스를 줄였고, 버튼 연타로 인한 중복 PG 호출도 방지했습니다. 사용자는 결제 → 승인 → 완료까지 한 화면에서 진행 상황을 확인할 수 있게 되어, 리폼 작업물 구매·견적 결제 흐름을 안정적으로 마무리할 수 있었습니다.",
    },
  },

  // 스위프 웹 12기 밍글링 프로젝트
  {
    slug: "mingling",
    type: "web",
    thumbnail: "../assets/Mingling/Mingling_Thubnail.png",
    logo: "../assets/Mingling/Logo.png",
    image: ["../assets/Mingling/1.png", "../assets/Mingling/2.png", "../assets/Mingling/3.png", "../assets/Mingling/4.png", "../assets/Mingling/5.png", "../assets/Mingling/6.png"],

    title: "밍글링",
    description: "모임 참석자 위치 기반 최적 중간 지점·장소 추천 서비스",

    Projectdescription:
      "Mingling(밍글링)은 모임 참석자들의 출발 위치를 바탕으로 가장 공평하고 이동이 편리한 중간 지점을 찾아주는 서비스입니다. 지인들과 약속 장소를 정할 때 어디서 만날까? 라는 고민과 위치 선정의 불공평함을 해결하기 위해 기획되었습니다. 단순한 물리적 중간 거리가 아닌 실제 지하철 이동 시간과 환승 횟수를 고려하여 서울 내 최적의 번화가와 모임의 목적(식당, 카페, 놀거리 등)에 맞는 장소를 추천해 줍니다.",
    features: [
      {
        title: "모임 생성",
        description: "모임 이름·목적(회의/친목)·세부 카테고리, 참여 인원(미정 가능), 출발지 입력 마감일을 설정해 모임을 생성하고 모임 페이지로 이동합니다.",
      },
      {
        title: "모임 참여",
        description: "공유 링크(/join/[id])로 닉네임 입력 후 참여합니다. 재촉 링크(?view=nudge) 지원으로 OG 이미지·문구를 분기해 미입력 멤버를 유도합니다.",
      },
      {
        title: "출발지 입력·관리",
        description: "역 검색으로 출발지 선택·등록·수정·삭제, 참여 현황 확인, 카카오맵 참여자 위치 시각화. 전원 입력 완료 시 결과보기가 활성화됩니다.",
      },
      {
        title: "중간지점 결과",
        description: "Top3 중간지점 추천, 평균 이동시간·밍글링 추천 순위 표시. 후보 선택 시 지도에 경로·중간지점 표시, 환승 경로 모달, 주변 장소 추천·결과 공유.",
      },
      {
        title: "주변 장소 추천",
        description: "중간지점 기준 주변 장소 리스트 조회, 식당·카페·놀거리 등 카테고리 필터. 장소 선택 시 지도 연동 및 카카오맵 외부 링크로 상세 확인.",
      },
      {
        title: "공유·재촉",
        description: "모임 초대 링크 공유, 출발지 미입력 멤버 재촉하기, 결과 페이지에서 산출 결과 공유를 지원합니다.",
      },
      {
        title: "부가 기능",
        description: "랜딩 페이지(서비스 소개·CTA), 이용약관/개인정보/피드백 모달. GA/GTM으로 계산·후보 조회·장소 클릭·외부 지도 등 이벤트 트래킹.",
      },
    ],
    responsibilities: [
      "서비스 랜딩·메인 페이지 UI 및 반응형·모바일 레이아웃 구현",
      "모임 생성·참여 API 연동 및 Zod 폼 검증 — 백엔드 스키마·엔드포인트 협의",
      "중간지점 결과 페이지 전담 — Top3 후보·평균 이동시간·추천 순위 UI, Kakao Map SDK 경로·마커 시각화",
      "환승 경로 상세 모달 구현 및 결과보기 UX 개선",
      "주변 장소 추천 — 모임 목적별 카테고리 필터, 장소 리스트↔지도 선택 연동 및 마커 표시",
      "TanStack Query 기반 중간지점·장소 추천 데이터 연동, 로딩·에러·재조회 UX 처리",
      "GA/GTM 전환 퍼널 이벤트 설계·적용 (중간지점 계산 → 후보 조회 → 장소 탐색 → 외부 지도 이동)",
    ],
    achievements: [
      "장소 리스트·지도 선택 상태 불일치 해결 — 양방향 연동을 단일 상태로 통합",
      "중간지점 결과·주변 장소 추천 핵심 플로우 프론트 전담 구현",
      "GA 전환 퍼널 이벤트 정의로 서비스 핵심 행동(계산→조회→탐색) 추적 체계화",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "REST API", "Kakao Map SDK", "Google Analytics", "Zustand", "Storybook", "ZOD", "TanstackQuery(ReactQuery)"],
    link: "#",
    liveDemo: "https://www.mingling.kr/",
    github: "https://github.com/SWYP-mingling/Frontend",
    period: "2025.12 - 2026.02",
    members: "PM 1명, 디자이너 1명, 프론트엔드 3명, 백엔드 3명",
    details: {
      Problem:
        "주변 장소 추천에서 리스트에서 장소를 선택해도 지도 마커·포커스가 갱신되지 않거나, 지도에서 고른 장소가 리스트 하이라이트와 어긋나는 경우가 있었습니다. 카테고리 필터를 바꾼 뒤에는 이전에 선택한 장소가 그대로 강조되기도 했습니다.",
      Cause:
        "장소 리스트와 Kakao Map 마커 상태가 컴포넌트별로 분리되어 있어, API 재조회·필터 변경 시 선택값이 초기화되지 않았습니다. TanStack Query로 목록은 갱신됐지만 지도 overlay를 먼저 제거하지 않아 마커가 중복되거나 이전 위치가 남는 문제도 있었습니다.",
      Solution:
        "선택된 placeId를 상위 단일 상태로 올리고, 리스트 클릭·지도 마커 클릭이 같은 setter를 쓰도록 통일했습니다. 카테고리·좌표별 queryKey를 분리하고, refetch 완료 후 기존 overlay를 제거한 뒤 새 마커를 그리도록 effect 의존성을 맞췄습니다. 필터 변경 시 선택 상태도 함께 reset하도록 처리했습니다.",
      Result:
        "리스트↔지도 양방향 선택이 한 흐름으로 동작하게 되었고, 필터 전환 후 잘못된 장소가 강조되던 케이스를 줄였습니다. QA 과정에서 지도·리스트 불일치 관련 이슈가 크게 줄어 결과 탐색 UX가 안정화되었습니다.",
    },
  },

  // 스위프 웹 11기 써봄 프로젝트
  {
    slug: "seobom",
    type: "mobile",
    thumbnail: "../assets/Subom/subom_Thumbnail.png",
    logo: "../assets/Subom/Title_Logo.png",
    image: ["../assets/Subom/Subom_Login.png", "../assets/Subom/2.png", "../assets/Subom/3.png", "../assets/Subom/4.png", "../assets/Subom/5.png", "../assets/Subom/6.png", "../assets/Subom/7.png"],

    title: "써봄",
    description: "대학생 대상 AI 피드백 기반 글쓰기 루틴 PWA",

    Projectdescription: "써봄은 대학생들의 글쓰기 습관을 돕는 PWA 서비스입니다. 사용자가 글을 작성하면 AI가 피드백을 제공하고, 루틴 형태로 꾸준히 글쓰기를 이어갈 수 있도록 설계되었습니다. 모바일 웹 설치형(PWA)으로 제공되며, Google Analytics로 사용자 행동을 추적해 서비스를 개선했습니다.",
    features: [
      {
        title: "글쓰기 에디터",
        description: "주제·글감 기반 글 작성 및 임시 저장 기능을 제공합니다.",
      },
      {
        title: "AI 피드백 (SSE)",
        description: "OpenAI API 응답을 SSE 스트리밍으로 받아 실시간 피드백 UI에 반영합니다.",
      },
      {
        title: "PWA",
        description: "홈 화면 추가·오프라인 캐싱 등 PWA 설정으로 앱처럼 설치·이용할 수 있습니다.",
      },
      {
        title: "글쓰기 루틴",
        description: "주간·월간 목표 설정과 작성 기록으로 꾸준한 글쓰기 습관을 유도합니다.",
      },
      {
        title: "Google Analytics UT",
        description: "Google Analytics로 페이지·이벤트를 추적해 사용자 행동(UT) 데이터를 수집·분석합니다.",
      },
    ],
    responsibilities: ["글 작성·피드백 결과 화면 UI 구현", "SSE 기반 AI 피드백 스트리밍 응답 UI 처리", "PWA manifest·service worker 설정 및 설치형 웹 구성", "Google Analytics 이벤트·UT 추적 연동", "Zustand·TanStack Query 기반 상태 관리"],
    tags: ["React", "TypeScript", "Tailwind CSS", "PWA", "REST API", "OpenAI", "SSE", "Google Analytics", "Zustand", "Storybook", "ZOD", "TanstackQuery(ReactQuery)"],
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
    slug: "wait-it",
    type: "mobile",
    thumbnail: "../assets/Wait/Group.png",
    logo: "../assets/Wait/Logo.png",
    image: ["../assets/Wait/1.png", "../assets/Wait/2.png", "../assets/Wait/3.png", "../assets/Wait/4.png"],

    title: "WAIT:IT",
    description: "오프라인 공간에서 줄서기를 간편하게 만들어주는 웨이팅 시스템",

    features: [
      {
        title: "원격 웨이팅",
        description: "매장 방문 전 앱에서 대기 번호를 발급하고 순서·예상 시간을 확인합니다.",
      },
      {
        title: "실시간 대기 현황",
        description: "REST API 폴링으로 대기 인원·예상 시간을 실시간 동기화합니다.",
      },
      {
        title: "위치 기반 매장 검색",
        description: "GPS와 지도 API로 주변 매장을 검색하고 거리순으로 정렬합니다.",
      },
      {
        title: "대기 알림",
        description: "대기 순번이 가까워지면 푸시 알림으로 사용자에게 안내합니다.",
      },
    ],
    responsibilities: ["React Native 크로스 플랫폼 UI·네비게이션 구현", "TanStack Query 캐싱 전략으로 API 호출 최적화", "Zustand 전역 상태 및 Zod 폼 검증"],
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
    slug: "data-fairy",
    type: "mobile",
    thumbnail: "../assets/DataFairy/Data_Fairy_Thumbnail.png",
    logo: "../assets/DataFairy/Logo.png",
    image: ["../assets/DataFairy/1.png", "../assets/DataFairy/2.png", "../assets/DataFairy/3.png", "../assets/DataFairy/4.png"],

    title: "자료요정",
    description: "스크린샷 OCR + AI 요약·분류로 자료를 자동 정리하는 모바일 앱",

    Projectdescription: "많은 사용자들이 스마트폰으로 강의자료, 회의 내용, 설정 정보 등을 스크린샷으로 저장하지만, 나중에 다시 확인하려고 할 때 어떤 내용인지 기억하기 어렵고, 정리되지 않아 찾기 힘든 문제가 발생합니다. 스크린샷 이미지 안의 텍스트를 자동으로 추출하고, OpenAI를 활용해 요약 + 카테고리 분류 + 폴더 저장까지 자동화합니다.",
    features: [
      {
        title: "스크린샷 OCR",
        description: "갤러리·카메라 이미지에서 텍스트를 자동 추출합니다.",
      },
      {
        title: "AI 요약 & 분류",
        description: "OpenAI API로 추출 텍스트를 요약하고 카테고리별로 자동 분류합니다.",
      },
      {
        title: "폴더·검색",
        description: "분류된 자료를 폴더에 저장하고 키워드 검색으로 빠르게 찾습니다.",
      },
    ],
    responsibilities: ["Expo 기반 React Native 앱 UI 구현", "이미지 업로드·OCR 결과·AI 응답 화면 상태 관리", "비동기 처리 중 로딩·에러 UX 설계"],
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
    slug: "dasom",
    type: "web",
    thumbnail: "../assets/DASOM/banner.png",
    logo: "../assets/DASOM/Logo.png",
    image: ["../assets/DASOM/1.png"],

    title: "DASOM",
    description: "동양미래대학교 컴퓨터공학부 전공동아리 다솜 공식 홈페이지",

    Projectdescription: "동아리 소개, 개발 기록, 회원 관리 등 동아리 운영에 필요한 기능을 제공하는 반응형 웹사이트입니다.",
    features: [
      {
        title: "동아리 소개",
        description: "동아리 목적, 활동 내용, 멤버 소개를 시각적으로 전달합니다.",
      },
      {
        title: "개발 기록",
        description: "동아리 프로젝트를 카드 형태로 표시하고 필터·검색으로 탐색합니다.",
      },
      {
        title: "회원 관리",
        description: "회원가입·로그인·프로필 관리 기능으로 동아리 멤버를 관리합니다.",
      },
    ],
    responsibilities: ["React·TypeScript 기반 반응형 UI 구현", "REST API 연동 및 인증 토큰 세션 관리", "Tailwind CSS 디자인 시스템 적용"],
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
