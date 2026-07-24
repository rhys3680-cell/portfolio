import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DiagramSSEFlow } from "@/components/diagrams/DiagramSSEFlow";

export function AgentFSSEFlow() {
  return (
    <Section id="agent-f-sse-flow" breakAfter>
      <SectionHeading
        eyebrow="Agent-F · SSE"
        title="채팅 유저 플로우"
        sub="리포트 생성은 수 분이 걸린다. 그동안 다른 페이지로 이동해도 스트림은 끊기지 않고, 돌아오면 응답이 이어진다 — 연결을 컴포넌트가 아닌 스토어가 소유하기 때문."
      />
      <div className="rounded-2xl border border-border bg-surface/40 p-5 sm:p-8">
        <DiagramSSEFlow />
      </div>
    </Section>
  );
}
