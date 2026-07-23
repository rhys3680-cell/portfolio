# v2-webapp 계획서 (초안)

> Next.js 기반 PPT(슬라이드 덱) 형식 포트폴리오 웹앱
> 소재: `../v1-docs` (portfolio_items, diagrams, portfolio.html, interview 등)

---

## 1. 목표

- **한 줄**: 스크롤이 아니라 **슬라이드로 넘기며 보는** 프론트엔드 포트폴리오.
- 포트폴리오 자체가 실력 증명 → 이력서 주력 스택(Next.js App Router · TS · Tailwind)으로 직접 구현.
- 핵심은 **트러블슈팅 3종 + 아키텍처 다이어그램**을 슬라이드 서사로 보여주는 것.

## 2. 기술 스택 (초안 — 확정 아님)

| 영역 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | Next.js 15 (App Router) | 이력서 주력, static export로 배포 간단 |
| 언어 | TypeScript | 〃 |
| 스타일 | Tailwind CSS | 〃 |
| 애니메이션 | Framer Motion | 슬라이드 전환·요소 등장 (설치는 웹앱 뜬 뒤 결정) |
| 다이어그램 | Mermaid (`mermaid` npm) | v1-docs 다이어그램 4종 재사용 |
| 배포 | Vercel | 〃 |

> 설치는 최소 구조부터. Framer Motion·Mermaid는 실제로 필요할 때 추가.

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

→ 총 ~16 슬라이드. (조율하며 병합·분할 가능)

## 4. 슬라이드 시스템 설계 (직접 구현)

- **라우팅**: `/` 단일 페이지에서 슬라이드 인덱스를 상태로 관리 (또는 `/slide/[n]` 딥링크). → 상의해서 결정.
- **네비게이션**:
  - 키보드: `←/→`, `Space`, `Home/End`
  - 터치: 스와이프 (모바일)
  - UI: 진행 표시(도트/바), 이전·다음 버튼
- **슬라이드 추상화**: `Slide` 컴포넌트 + 슬라이드 배열(메타데이터 + 컴포넌트). 각 슬라이드는 독립 컴포넌트.
- **전환**: Framer Motion `AnimatePresence` (fade/slide).
- **반응형**: 데스크톱=풀스크린 슬라이드, 모바일=세로 스크롤 폴백 검토.
- **접근성**: prefers-reduced-motion 존중, 키보드 포커스.

## 5. 폴더 구조안

```
v2-webapp/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # 슬라이드 덱 엔트리
│   └── globals.css
├── components/
│   ├── deck/             # Deck, Slide, Nav, Progress
│   ├── diagrams/         # Mermaid 래퍼
│   └── slides/           # 슬라이드별 컴포넌트 (00~15)
├── content/              # 슬라이드 텍스트·데이터 (v1-docs에서 추출)
├── lib/
└── public/fonts/         # Pretendard woff2 (v1-docs/portfolio_pdf에서 복사)
```

## 6. 진행 단계

1. **[사용자] Next.js 설치** (`create-next-app`, TS + Tailwind + App Router)
2. 슬라이드 시스템 뼈대 (Deck/Slide/Nav) — 더미 3장으로 넘김 확인
3. 디자인 토큰·레이아웃 조율 (색·타이포·여백) ← 함께 보면서
4. 콘텐츠 이식 (타이틀 → 핵심성과 → 프로젝트 순)
5. Mermaid 다이어그램 4종 연동
6. 애니메이션·반응형·접근성 다듬기
7. Vercel 배포

## 7. 결정 사항

- [x] **라우팅**: `/slide/[n]` 딥링크 — URL로 특정 슬라이드 공유, 새로고침 시 위치 유지
- [x] **디자인 톤**: 다크 기본 (토글은 나중에 검토)
- [x] **언어**: 국문 단일 (필요시 나중에 영문 추가)
- [ ] 다이어그램: Mermaid 런타임 렌더 vs 미리 SVG로 빌드 — 구현하며 결정
- [ ] 모바일: 슬라이드 유지 vs 세로 스크롤 폴백 — 구현하며 결정