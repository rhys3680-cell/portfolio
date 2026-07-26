import { stack, education, profile } from "@/content/portfolio";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ArrowRight } from "lucide-react";

export function OutroSection() {
  return (
    <Section id="outro" breakAfter={false}>
      <SectionHeading eyebrow="Stack & Contact" title="기술 스택 · 교육" />

      {/* 기술 스택 (로고 뱃지) */}
      <div className="space-y-5">
        {stack.map((g) => (
          <div
            key={g.group}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="w-16 shrink-0 text-sm font-bold text-muted">
              {g.group}
            </span>
            <ul className="flex flex-wrap gap-2">
              {g.items.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm"
                >
                  {Icon && <Icon className="size-4" aria-hidden />}
                  {label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 교육 */}
      <div className="mt-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted">
          교육
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
          {education.map((e) => (
            <li key={e} className="flex items-start gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {e}
            </li>
          ))}
        </ul>
      </div>

      {/* 컨택 */}
      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <a
          href={`mailto:${profile.links.email}`}
          className="flex items-center gap-1 transition-colors hover:text-accent"
        >
          {profile.links.email}
        </a>
        <a
          href={`https://${profile.links.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 transition-colors hover:text-accent"
        >
          {profile.links.github}
        </a>
        <a
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 transition-colors hover:text-accent"
        >
          이력서 (Notion) <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </Section>
  );
}
