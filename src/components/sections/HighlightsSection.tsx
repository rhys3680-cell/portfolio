import { highlights } from "@/content/portfolio";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ArrowRight } from "lucide-react";

export function HighlightsSection() {
  return (
    <Section id="highlights">
      <SectionHeading
        eyebrow="Highlights"
        title="핵심 성과"
        sub="겉으로 드러나지 않아 재현부터 어려운 문제 셋. 각 카드에서 해당 프로젝트로 이동합니다."
      />

      <ul className="grid gap-5 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, title, desc, href }) => (
          <li key={title}>
            <a
              href={href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <Icon className="size-9 text-accent" aria-hidden />
              <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
              <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                {desc.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                자세히 <ArrowRight className="size-4" aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
