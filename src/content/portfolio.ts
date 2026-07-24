/**
 * 포트폴리오 컨텐츠 원본 (v1-docs에서 추출·정제).
 * 레이아웃과 분리, 유지보수성
 */

export const profile = {
  name: "윤창기",
  role: "프론트엔드 엔지니어",
  tagline: "React·TypeScript로 AI 제품을 만드는 프론트엔드 엔지니어",
  catch: "겉으로 드러나지 않는 문제를 근본까지 파고듭니다",
  range: [
    { label: "실시간 스트리밍 렌더링" },
    { label: "인증·상태관리" },
    { label: "렌더 성능 최적화" },
  ],
  links: {
    github: "github.com/rhys3680-cell",
    resume:
      "https://married-run-059.notion.site/39f107043b9481c4a060ef4ab20458cb",
  },
} as const;

export const stack = {
  main: [
    "TypeScript",
    "React",
    "Next.js (App Router)",
    "TanStack Query",
    "Zustand",
    "Tailwind",
  ],
  sub: ["Next.js 서버함수", "Supabase/PostgreSQL", "Python (Pandas·SQL)"],
  ai: ["LLM 응답 SSE 스트리밍 렌더링", "PoC 설계"],
} as const;

export const education = [
  "청년취업사관학교 'AI로 완성하는 핀테크 데이터 분석가' (2026.05~) — Python·ML",
  "코드잇 스프린트 프론트엔드 심화 (2025.04~06)",
  "부산IT교육센터 리액트와 스프링을 활용한 자바 풀스택 개발자 과정 (2024.08~2025.03)",
] as const;

export const projects = {
  agentF: {
    id: "agent-f",
    name: "Agent-F",
    tagline: "ERP 데이터를 경영진이 실시간으로 보는 AI 리포트 서비스",
    period: "2025.09 - 2026.01 (인턴)",
    role: "스트리밍·상태관리·인증 등 프론트 아키텍처 설계·구현",
    problem:
      "경영진이 매출·재고 현황을 보려면 실무진을 거치거나 분석 요청을 기다려야 했습니다. 실무진이 매일 ERP에 쌓는 데이터를, 경영진이 자연어로 묻고 AI 리포트로 직접·실시간 확인하도록 만들었습니다.",
    built: [
      "자연어 질의 채팅 UI — SSE로 AI 응답을 실시간 스트리밍 렌더",
      "AI 리포트 뷰 — 매출·재고 분석 결과를 차트·표로",
      "인증·토큰 처리 및 axios 클라이언트",
      "상태관리 아키텍처 — 서버 상태(TanStack Query)와 실시간 상태(Zustand) 분리",
    ],
  },
  challenger: {
    id: "challenger",
    name: "Challenger",
    tagline: "패션기업 MD를 위한 B2B 업무 웹앱",
    period: "2026.01 - 2026.02 (인턴)",
    role: "핵심 업무 화면부터 인증·상태관리 인프라까지 프론트 설계·구현",
  },
  erp: {
    id: "erp",
    name: "ERP 자동화 파이프라인",
    tagline: "API 없는 ERP를 UI 자동화한 양방향 데이터 파이프라인",
    period: "2026.02 - 2026.02 (인턴)",
    role: "고민 필요",
  },
};
