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

      {/* 이 제품이 푸는 문제 */}
      <div className="mb-8 border-l-2 border-accent pl-5">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-muted">
          이 제품이 푸는 문제
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
          {p.problem}
        </p>
      </div>

      {/* 기간 · 역할 */}
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

      {/* 주요 구현 */}
      <div className="mb-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted">
          주요 구현
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {p.built.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-border bg-surface/50 px-4 py-3 text-sm leading-relaxed"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
