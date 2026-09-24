import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiSupabase,
  SiPython,
} from "react-icons/si";
import type { IconType } from "react-icons";

/**
 * 포트폴리오 컨텐츠 원본 (v1-docs에서 추출·정제).
 * 레이아웃과 분리, 유지보수성
 */

export const profile = {
  name: "윤창기",
  role: "AX 개발자",
  tagline: "데이터와 AI로 실제 업무 도구를 만드는 AX 개발자",
  catch: "반복 업무를 넘어 현업의 판단 기준과 데이터 흐름까지 제품으로 만듭니다",
  range: [
    { label: "업무 흐름 분석" },
    { label: "데이터·AI 제품" },
    { label: "현업 자동화" },
  ],
  links: {
    github: "github.com/rhys3680-cell",
    email: "smd99540@gmail.com",
    resume:
      "https://married-run-059.notion.site/39f107043b9481c4a060ef4ab20458cb",
  },
} as const;

export const stack: {
  group: string;
  items: { label: string; icon?: IconType }[];
}[] = [
  {
    group: "주력",
    items: [
      { label: "TypeScript", icon: SiTypescript },
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TanStack Query", icon: SiReactquery },
      { label: "Zustand" }, // 로고 없음
      { label: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    group: "경험",
    items: [
      { label: "Next.js 서버함수" },
      { label: "Supabase / PostgreSQL", icon: SiSupabase },
      { label: "Python", icon: SiPython },
    ],
  },
  {
    group: "AI 연동",
    items: [{ label: "LLM SSE 스트리밍" }, { label: "PoC 설계" }],
  },
] as const;

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
    problem:
      "MD는 초두배분·판매분·점간이동을 결정할 때마다 ERP에 수치를 하나하나 수기로 입력해야 했습니다. 매장 등급별로 어떤 상품을 얼마나 보낼지 판단하는 반복 업무를, 화면에서 시뮬레이션해 보고 확정하면 ERP에 반영되도록 만들었습니다.",
    built: [
      "매장 현황 대시보드 — 매장 등급·판매 데이터를 조합해 시각화",
      "초두출고 시뮬레이션 — 배분 결과를 미리 계산해 확인·수정",
      "초두출고·판매분·점간이동 출고량 ERP 등록",
      "상품 리스트",
      "인증·토큰 인프라와 상태관리 아키텍처",
    ],
  },
  erp: {
    id: "erp",
    name: "ERP 자동화 파이프라인",
    tagline: "API 없는 ERP를 UI 자동화한 양방향 데이터 파이프라인",
    period: "2026.02 - 2026.02 (인턴)",
    role: "Windows ERP UI 자동화·DB 동기화 파이프라인 설계 및 구현",
  },
};

export const additionalProjects = [
  {
    name: "FDS",
    eyebrow: "Data Engineering · ML Policy",
    summary:
      "IEEE-CIS 데이터의 분석 저장소와 GCP 파이프라인을 만들고, 모델 점수를 실제 조사 용량에 맞춘 임계값 정책으로 연결했습니다.",
    points: [
      "DuckDB 기반 109만 건 거래 분석 저장소",
      "BigQuery·Airflow 기반 재현 가능한 데이터 파이프라인",
      "정확도 경쟁보다 운영 가능한 탐지 정책과 조사 우선순위 설계",
    ],
  },
  {
    name: "Alexandria",
    eyebrow: "Personal AI Desktop · Local First",
    summary:
      "글과 음성을 로컬에서 정리하고 찾아주는 개인 AI 데스크톱 앱입니다. Markdown을 원본으로, SQLite를 파생 인덱스로 사용합니다.",
    points: [
      "whisper.cpp 기반 오프라인 음성 기록",
      "로컬 임베딩과 RRF 하이브리드 검색",
      "Notion 2,967페이지 이관 전 dry-run과 필터링으로 예상 비용 절감",
    ],
  },
] as const;
