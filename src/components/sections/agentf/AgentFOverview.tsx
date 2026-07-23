import { projects } from "@/content/portfolio";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const p = projects.agentF;

export function AgentFOverview() {
  return (
    <Section id={p.id} breakAfter>
      <SectionHeading
        eyebrow="Project 1 · Frontend"
        title={p.name}
        sub={p.tagline}
      />

      <dl className="mb-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
        <div className="flex gap-2">
          <dt className="font-medium text-foreground/70">기간</dt>
          <dd>{p.period}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium text-foreground/70">역할</dt>
          <dd>{p.role}</dd>
        </div>
      </dl>

      <p className="max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">
        {p.oneLiner}
      </p>

      <div className="mt-10 flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 text-sm text-muted">
        전체 아키텍처 다이어그램 (예정)
      </div>
    </Section>
  );
}
