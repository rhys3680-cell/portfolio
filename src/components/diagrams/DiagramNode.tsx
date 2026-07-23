import type { ReactNode } from "react";

type DiagramNodeProps = {
  icon: ReactNode;
  label: string;
  note?: string;
  accent?: boolean;
};

export function DiagramNode({ icon, label, note, accent }: DiagramNodeProps) {
  return (
    <div
      className={[
        "flex items-center gap-3 rounded-xl border-2 bg-surface px-5 py-4",
        accent ? "border-accent" : "border-border",
      ].join(" ")}
    >
      <span className="flex size-8 shrink-0 items-center justify-center text-2xl">
        {icon}
      </span>
      <div className="leading-tight">
        <p className="text-base font-bold sm:text-lg">{label}</p>
        {note && <p className="mt-0.5 text-sm text-muted">{note}</p>}
      </div>
    </div>
  );
}
