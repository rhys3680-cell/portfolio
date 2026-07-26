import { ArrowRight } from "lucide-react";

function Arrow() {
  return (
    <ArrowRight
      aria-hidden
      strokeWidth={2.5}
      className="size-6 shrink-0 rotate-90 self-center text-muted lg:rotate-0 print:rotate-0"
    />
  );
}

export function DiagramSingleFlight() {
  const requests = ["요청 A", "요청 B", "요청 C", "요청 D"];

  return (
    <div className="flex flex-col items-stretch justify-center gap-3 lg:flex-row lg:items-center print:flex-row print:items-center">
      {/* 동시 401 요청들 */}
      <div className="flex flex-col gap-2">
        {requests.map((r) => (
          <div
            key={r}
            className="rounded-lg border-2 border-warn/60 bg-surface px-3 py-1.5 text-center text-xs font-medium"
          >
            {r} <span className="text-warn">401</span>
          </div>
        ))}
      </div>

      <Arrow />

      {/* single-flight 수렴 */}
      <div className="rounded-xl border-2 border-accent bg-surface px-5 py-4 text-center">
        <p className="font-mono text-sm font-bold text-accent">
          refreshPromise
        </p>
        <p className="mt-1 text-xs text-muted">
          single-flight
          <br />
          하나의 Promise 공유
        </p>
      </div>

      <Arrow />

      {/* 서버 refresh 1회 */}
      <div className="rounded-lg border-2 border-border bg-surface px-4 py-3 text-center">
        <p className="font-mono text-sm">POST /reissue</p>
        <p className="mt-1 text-xs font-medium text-accent">refresh 1회</p>
      </div>

      <Arrow />

      {/* 전원 재시도 */}
      <div className="flex flex-col gap-2">
        {requests.map((r) => (
          <div
            key={r}
            className="rounded-lg border-2 border-accent-2/50 bg-surface px-3 py-1.5 text-center text-xs font-medium"
          >
            {r} <span className="text-accent-2">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}
