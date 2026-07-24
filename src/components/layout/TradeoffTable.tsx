import { Check, X } from "lucide-react";

type Option = {
  name: string;
  chosen?: boolean; // 선택한 쪽
  pros: string[];
  cons: string[];
};

export function TradeoffTable({ options }: { options: [Option, Option] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((opt) => (
        <div
          key={opt.name}
          className={[
            "rounded-xl border-2 p-4",
            opt.chosen
              ? "border-accent bg-surface"
              : "border-border bg-surface/40",
          ].join(" ")}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-base font-bold">{opt.name}</span>
            {opt.chosen && (
              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-bold text-accent">
                선택
              </span>
            )}
          </div>
          <ul className="space-y-1.5 text-sm">
            {opt.pros.map((p) => (
              <li key={p} className="flex items-start gap-2 text-foreground/90">
                <Check
                  className="mt-0.5 size-4 shrink-0 text-accent-2"
                  aria-hidden
                />
                {p}
              </li>
            ))}
            {opt.cons.map((c) => (
              <li key={c} className="flex items-start gap-2 text-muted">
                <X className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
