import { additionalProjects } from "@/content/portfolio";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

export function AdditionalProjectsSection() {
  return (
    <Section id="additional-projects">
      <SectionHeading
        eyebrow="Data & Personal Projects"
        title="데이터에서 개인 AI 제품까지"
        sub="회사 밖에서도 데이터 흐름을 설계하고, 실제로 쓰는 제품까지 완성했습니다."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {additionalProjects.map((project) => (
          <article key={project.name} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              {project.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-bold">{project.name}</h3>
            <p className="mt-4 leading-relaxed text-foreground/90">{project.summary}</p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
