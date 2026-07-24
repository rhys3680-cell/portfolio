import {
  ArrowUp,
  ArrowDown,
  Zap,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  Database,
} from "lucide-react";
import type { ReactNode } from "react";

// 주력 프로젝트 카드
function ProjectCard({
  eyebrow,
  name,
  desc,
  achievements,
  href,
}: {
  eyebrow: string;
  name: string;
  desc: string;
  achievements: { icon: ReactNode; label: string }[];
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-1 flex-col rounded-2xl border-2 border-border bg-surface p-6 transition-colors hover:border-accent"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-accent">
        {eyebrow}
      </p>
      <h3 className="mt-1 text-xl font-bold sm:text-2xl">{name}</h3>
      <p className="mt-1 text-sm text-muted">{desc}</p>
      <ul className="mt-4 space-y-2">
        {achievements.map((a) => (
          <li key={a.label} className="flex items-center gap-2 text-sm">
            <span className="text-accent [&_svg]:size-4">{a.icon}</span>
            <span className="font-medium">{a.label}</span>
          </li>
        ))}
      </ul>
    </a>
  );
}

export function DiagramProjectMap() {
  return (
    <div className="flex flex-col gap-4">
      {/* 주력 2 프로젝트 */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <ProjectCard
          eyebrow="Project · Frontend"
          name="Agent-F"
          desc="경영진용 AI 리포트 서비스"
          achievements={[
            { icon: <Zap />, label: "인증 멀티룸 SSE 스트리밍" },
            { icon: <Gauge />, label: "렌더 병목 O(N²)→O(N)" },
          ]}
          href="#agent-f"
        />
        <ProjectCard
          eyebrow="Project · Frontend"
          name="Challenger"
          desc="MD 배분 업무 웹앱"
          achievements={[
            { icon: <ShieldCheck />, label: "JWT refresh 경합 해결" },
            { icon: <CheckCircle2 />, label: "배분 확정 부분 성공 처리" },
          ]}
          href="#challenger"
        />
      </div>

      {/* 연결: 읽기(분석) / 쓰기(배분) */}
      <div className="flex items-center justify-center gap-16 text-xs text-muted sm:gap-32">
        <span className="flex items-center gap-1">
          <ArrowUp className="size-4" aria-hidden /> 분석·시각화
        </span>
        <span className="flex items-center gap-1">
          배분 반영 <ArrowDown className="size-4" aria-hidden />
        </span>
      </div>

      {/* 받침: ERP 데이터 인프라 */}
      <a
        href="#erp"
        className="group flex items-center gap-4 rounded-2xl border border-dashed border-border bg-surface/40 p-5 transition-colors hover:border-muted"
      >
        <Database className="size-6 shrink-0 text-muted" aria-hidden />
        <div>
          <p className="text-sm font-bold text-foreground/80">
            ERP 자동화 파이프라인
            <span className="ml-2 font-normal text-muted">
              데이터 인프라 · Python
            </span>
          </p>
          <p className="mt-0.5 text-xs text-muted">
            실무진이 매일 올리는 ERP 데이터를 수집·정제하고, 배분 결정을 다시
            반영하는 양방향 파이프라인
          </p>
        </div>
      </a>
    </div>
  );
}
