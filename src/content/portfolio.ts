/**
 * 포트폴리오 컨텐츠 원본 (v1-docs에서 추출·정제).
 * 레이아웃과 분리, 유지보수성
 */

import { Zap, ShieldCheck, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

/** 핵심 성과 */
export const highlights: {
  icon: LucideIcon;
  title: string;
  desc: string[]; // ← string에서 string[]로
  href: string;
}[] = [
  {
    icon: Zap,
    title: "인증 멀티룸 SSE 스트리밍",
    desc: [
      "헤더 인증이 필요한 SSE를 Fetch(ReadableStream) 기반으로 직접 구현.",
      "연결 소유권을 전역 스토어로 옮겨 페이지 이동에도 스트림이 유지되게 설계.",
    ],
    href: "#agent-f",
  },
  {
    icon: ShieldCheck,
    title: "JWT refresh race condition 해결",
    desc: [
      "동시 401을 in-flight Promise 공유(single-flight)로 refresh 1회 보장.",
    ],
    href: "#challenger",
  },
  {
    icon: Gauge,

    title: "렌더 병목 O(N²)→O(N)",
    desc: [
      "대량 조회 시 UI 프리징을 유발하던 Array.find를 복합 키 Map 인덱싱으로 전환.",
    ],
    href: "#agent-f",
  },
];

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
    oneLiner: [
      "헤더 인증이 필요한 SSE를 Fetch(ReadableStream) 기반으로 구현.",
      "연결 소유권을 전역 스토어로 옮겨, 페이지를 이동해도 스트림이 끊기지 않게 설계.",
    ],
  },
  challenger: {
    id: "challenger",
    name: "Challenger",
    tagline: "패션기업 MD를 위한 B2B 업무 웹앱",
    period: "2026.01 - 2026.02 (인턴)",
    role: "핵심 업무 화면부터 인증·상태관리 인프라까지 프론트 설계·구현",
    oneLiner: [
      "동시 요청 시 터지던 JWT refresh race condition을 분석.",
      "boolean flag가 아니라 in-flight Promise 싱글톤으로 refresh 1회 보장하도록 재설계.",
    ],
  },
  erp: {
    id: "erp",
    name: "ERP 자동화 파이프라인",
    tagline: "API 없는 ERP를 UI 자동화한 양방향 데이터 파이프라인",
    period: "2026.02 - 2026.02 (인턴)",
    role: "고민 필요",
    oneLiner: [
      "API도 DB 접근도 없는 ERP를 pywinauto UI 자동화로 데이터 소스처럼 다룸.",
      "5년치 62만 건 백필 + 15종 태스크를 무인 자동화.",
    ],
  },
};
