import { ArrowRight, ArrowDown } from "lucide-react";

function Node({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="rounded-lg border-2 border-border bg-surface px-4 py-3 text-center">
      <p className="text-sm font-bold">{label}</p>
      {sub && <p className="mt-0.5 text-xs text-muted">{sub}</p>}
    </div>
  );
}

export function DiagramEventBus() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Before: 강결합 */}
      <div className="rounded-xl border border-border bg-surface/40 p-5">
        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted">
          Before · 강결합
        </p>
        <div className="flex flex-col items-center gap-2">
          <Node label="SSE 매니저" sub="연결·큐·순서 조율" />
          <span className="flex items-center gap-1 text-xs font-medium text-warn">
            <ArrowDown className="size-4" aria-hidden />
            메서드 직접 호출
          </span>
          <Node label="chat store" sub="상태" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          SSE 매니저가 chat store의 메서드를 직접 호출 → 둘이 서로를 알고 강하게
          얽힘.
        </p>
      </div>

      {/* After: 약결합 */}
      <div className="rounded-xl border-2 border-accent bg-surface p-5">
        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">
          After · 약결합
        </p>
        <div className="flex flex-col items-center gap-2">
          <Node label="SSE 매니저" sub="이벤트 발행만" />
          <span className="flex items-center gap-1 text-xs font-medium text-accent">
            <ArrowDown className="size-4" aria-hidden />
            emit
          </span>
          <Node label="이벤트 버스" sub="발행-구독" />
          <span className="flex items-center gap-1 text-xs font-medium text-accent">
            <ArrowDown className="size-4" aria-hidden />
            subscribe
          </span>
          <Node label="chat store" sub="상태만 갱신" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          발행자·구독자가 서로를 모름 → 결합이 풀리고, 8종 이벤트를 다루기도
          깔끔.
        </p>
      </div>
    </div>
  );
}
