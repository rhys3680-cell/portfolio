import { ArrowRight } from "lucide-react";
import { profile } from "@/content/portfolio";
import { Section } from "@/components/layout/Section";

export function TitleSection() {
  return (
    <Section id="title">
      <p className="mb-5 text-sm font-bold uppercase tracking-widest text-accent">
        Portfolio
      </p>
      <h1 className="text-5xl font-bold leading-[1.1] sm:text-7xl">
        {profile.name}
        <span className="mt-3 block text-2xl font-medium text-muted sm:text-3xl">
          {profile.role}
        </span>
      </h1>
      <p className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-foreground/90 sm:text-xl">
        {profile.catch}
      </p>

      <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4">
        {profile.range.map((step, i) => (
          <li key={step.label} className="flex items-center gap-3 sm:gap-4">
            <div className="rounded-xl border border-border bg-surface px-5 py-4">
              <p className="text-base font-bold sm:text-lg">{step.label}</p>
            </div>
            {i < profile.range.length - 1 && (
              <ArrowRight
                aria-hidden
                className="size-6 shrink-0 text-accent sm:size-7"
              />
            )}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <a
          href={`https://${profile.links.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
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
