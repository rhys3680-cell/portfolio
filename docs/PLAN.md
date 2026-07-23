# v2-webapp 계획서

> Next.js 기반 **스크롤형** 포트폴리오 웹앱 (섹션 크게, PDF 저장 고려)
> 소재: `../v1-docs` (portfolio_items, diagrams, portfolio.html, interview 등)

---

## 1. 목표

- **한 줄**: 위→아래로 **스크롤하며 읽는** 프론트엔드 포트폴리오. 섹션마다 한 화면을 크게 채운다.
- 채용담당자가 넘기는 조작 없이 훑어보기 좋게 — 스크롤이 슬라이드 넘기기보다 친화적.
- **PDF 저장 = 브라우저 인쇄**(`@media print`). 웹과 PDF가 하나의 소스 → 화면을 인쇄하면 섹션 단위로 페이지가 끊긴다.
- 포트폴리오 자체가 실력 증명 → 이력서 주력 스택(Next.js App Router · TS · Tailwind)으로 직접 구현.
- 핵심은 **트러블슈팅 3종 + 아키텍처 다이어그램**을 서사로 보여주는 것.

## 2. 기술 스택

| 영역 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | Next.js 16 (App Router) | 이력서 주력, static export로 배포 간단 |
| 언어 | TypeScript | 〃 |
| 스타일 | Tailwind v4 | 〃 |
| 폰트 | Pretendard (로컬 woff2) | 국문 가독성 |
| 다이어그램 | Mermaid (`mermaid` npm) | v1-docs 다이어그램 4종 재사용 |
| 배포 | Vercel | 〃 |

> 애니메이션은 스크롤 등장 효과 정도만. 필요해지면 그때 라이브러리 검토(우선 CSS/IntersectionObserver).
> scroll-snap은 자유 스크롤로 먼저 만든 뒤 켜고 끄며 비교해 결정.

## 2-1. PDF(인쇄) 설계 원칙

- 각 섹션 = `<section>`, 인쇄 시 `break-inside: avoid` / `break-after: page`로 페이지 경계 제어.
- 화면 전용 요소(스크롤 힌트·네비 등)는 `print:hidden`.
- 인쇄용 배경은 밝게(잉크 절약·가독) — `@media print`에서 다크 토큰을 라이트로 오버라이드.
- A4 세로 기준으로 여백·폭 확인.

## 3. 슬라이드 구성안 (서사 흐름)

v1-docs의 portfolio.html 서사를 슬라이드로 재편:

```
00  타이틀        — 이름·한 줄 소개·"React·TS로 AI 제품 만드는 FE"
01  나 소개       — 강점 3줄(다루는 범위: 스트리밍→파이프라인→기획)
02  핵심 성과 3   — SSE / JWT race / 렌더병목 (한 화면 요약 → 각 상세로 링크)
─── 프로젝트 1: Agent-f ───
03  Agent-f 개요  — 자연어 매출 질의 B2B AI 리포트, 코어 76%
04  아키텍처      — agentf-architecture 다이어그램
05  트러블 B1     — 인증 멀티룸 SSE (문제→해결→트레이드오프→회고)
06  SSE 다이어그램 — sse-pipeline
07  트러블 B3     — 렌더 병목 O(N×M)→O(N) (Before/After 표)
─── 프로젝트 2: Challenger ───
08  Challenger 개요
09  트러블 E1     — JWT refresh race condition (single-flight)
10  auth 다이어그램 — auth-flow (sequence + 토큰저장 위치)
─── 프로젝트 3: ERP ───
11  ERP 개요 + erp-pipeline 다이어그램 (양방향 파이프라인)
─── 개인 프로젝트 ───
12  여기먹자      — 오너십 + 매칭률 개선
13  북마크매니저   — React 19 네이티브 학습
14  slo          — 디자인시스템 실패 회고 (Rule of Three)
─── 마무리 ───
15  기술 스택 / 교육 / 컨택
```

→ 총 ~16 섹션. 위 번호는 스크롤 순서(위→아래). 조율하며 병합·분할 가능.

## 4. 스크롤 페이지 설계 (직접 구현)

- **단일 페이지**: `/` 하나에 모든 섹션을 세로로 쌓는다. 딥링크는 앵커(`#agent-f` 등)로.
- **섹션 단위**: 각 섹션 = `<section id>`, 최소 높이를 크게(`min-h-screen` 계열) 잡아 한 화면을 채우되, 내용이 많으면 자연스럽게 늘어난다.
- **네비게이션**: 상단 고정 헤더 or 우측 섹션 점프(목차) — 화면 전용(`print:hidden`).
- **등장 효과**: IntersectionObserver로 섹션 진입 시 fade/slide-up 정도. `prefers-reduced-motion` 존중.
- **scroll-snap**: `snap-y snap-mandatory`를 켜고 끄며 비교 후 결정(자유 스크롤이 기본).
- **인쇄(PDF)**: 2-1 원칙 적용 — 섹션별 페이지 분할, 화면 전용 요소 숨김, 라이트 배경 오버라이드.

## 5. 폴더 구조안

```
v2-webapp/src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # 모든 섹션을 순서대로 조립
│   └── globals.css       # 다크 토큰 + @media print
├── components/
│   ├── layout/           # Section 래퍼, Nav(목차), ScrollReveal
│   ├── diagrams/         # Mermaid 래퍼
│   └── sections/         # 섹션별 컴포넌트 (Title, Highlights, AgentF ...)
├── content/              # 섹션 텍스트·데이터 (v1-docs에서 추출)
└── lib/
public/fonts/             # Pretendard woff2 (완료)
```

## 6. 진행 단계

1. ~~[사용자] Next.js 설치~~ ✅
2. ~~다크 테마 + Pretendard 폰트~~ ✅
3. **Section 래퍼 + page.tsx 뼈대** — 더미 섹션 3개로 스크롤·인쇄 확인 ← 다음
4. 디자인 토큰·레이아웃 조율 (색·타이포·여백) ← 함께 보면서
5. 콘텐츠 이식 (타이틀 → 핵심성과 → 프로젝트 순)
6. Mermaid 다이어그램 4종 연동
7. 스크롤 등장 효과·반응형·`@media print` 다듬기
8. Vercel 배포

## 7. 결정 사항

- [x] **형식**: 스크롤형 세로 랜딩(섹션 크게). ~~슬라이드 넘기기~~ 폐기 — 스크롤이 더 친화적.
- [x] **PDF**: 브라우저 인쇄(`@media print`), 웹/PDF 단일 소스.
- [x] **딥링크**: 앵커(`#섹션id`).
- [x] **디자인 톤**: 다크 기본 (인쇄 시 라이트 오버라이드).
- [x] **언어**: 국문 단일 (필요시 나중에 영문 추가).
- [ ] scroll-snap 적용 여부 — 구현 후 비교해 결정.
- [ ] 다이어그램: Mermaid 런타임 렌더 vs 미리 SVG로 빌드 — 구현하며 결정.
- [ ] 모바일: 슬라이드 유지 vs 세로 스크롤 폴백 — 구현하며 결정