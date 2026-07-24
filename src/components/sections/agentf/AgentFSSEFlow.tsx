import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DiagramSSEFlow } from "@/components/diagrams/DiagramSSEFlow";

export function AgentFSSEFlow() {
  return (
    <Section id="agent-f-sse-flow" breakAfter>
      <SectionHeading
        eyebrow="Agent-F · SSE ①"
        title="사용자가 겪는 흐름"
        sub="리포트 생성은 수 분이 걸립니다. 그동안 다른 페이지로 이동해도 스트림이 끊기지 않고, 돌아오면 응답이 이어집니다 — 연결을 컴포넌트가 아니라 스토어가 소유하기 때문입니다."
      />

      <div className="rounded-2xl border border-border bg-surface/40 p-5 sm:p-8">
        <DiagramSSEFlow />
      </div>
    </Section>
  );
}
