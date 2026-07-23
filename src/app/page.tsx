import { Section } from "@/components/layout/Section";

export default function Home() {
  return (
    <main>
      <Section id="title">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          윤창기 · 프론트엔드 엔지니어
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          React·TypeScript로 AI 제품을 만드는 프론트엔드 엔지니어
        </p>
      </Section>
      <Section id="highlights">
        <h2 className="text-3xl font-bold sm:text-5xl">핵심 성과 3</h2>
        <p className="mt-4 text-lg text-muted">
          SSE 스트리밍 · JWT race condition · 렌더 병목
        </p>
      </Section>
      <Section id="agent-f" breakAfter={false}>
        <h2 className="text-3xl font-bold sm:text-5xl">Agent-F</h2>
        <p className="mt-4 text-lg text-muted">
          자연어로 매출을 질의하는 B2B AI 리포트 플랫폼
        </p>
      </Section>
    </main>
  );
}
