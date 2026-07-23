import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DiagramAgentF } from "@/components/diagrams/DiagramAgentF";

export function AgentFArchitecture() {
  return (
    <Section id="agent-f-architecture" breakAfter>
      <SectionHeading eyebrow="Agent-F · Architecture" title="전체 구성" />
      <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
        <DiagramAgentF />
      </div>
    </Section>
  );
}
