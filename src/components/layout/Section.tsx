import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  // 인쇄 시 이 섹션 뒤에서 페이지를 끊을지
  breakAfter?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  breakAfter = true,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      // min-h-screen: 한 화면 크게 / scroll-mt: 앵커 이동 시 상단 헤더 가림 방지
      className={[
        "flex min-h-screen scroll-mt-16 flex-col justify-center",
        "px-6 py-20 sm:px-12 lg:px-24",
        "print:h-screen print:py-0",
        breakAfter ? "print:break-after-page" : "",
        className,
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
