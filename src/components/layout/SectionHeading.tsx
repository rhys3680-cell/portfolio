import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
};

export function SectionHeading({ eyebrow, title, sub }: SectionHeadingProps) {
  return (
    <header className="mb-10">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 max-w-3xl text-lg text-muted">{sub}</p>}
    </header>
  );
}
