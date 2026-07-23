import type { ReactNode } from "react";

type BlockProps = {
  label: string;
  tone?: "default" | "solution" | "retro";
  children: ReactNode;
};

const toneStyles: Record<NonNullable<BlockProps["tone"]>, string> = {
  default: "border-border",
  solution: "border-accent",
  retro: "border-muted/40",
};

export function TroubleshootingBlock({
  label,
  tone = "default",
  children,
}: BlockProps) {
  return (
    <div className={`border-l-2 pl-5 ${toneStyles[tone]}`}>
      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <div className="text-base leading-relaxed text-foreground/90 sm:text-lg">
        {children}
      </div>
    </div>
  );
}

export function Troubleshooting({ children }: { children: ReactNode }) {
  return <div className="mt-8 space-y-7">{children}</div>;
}
