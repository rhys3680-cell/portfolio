import {
  ArrowRight,
  MessageSquare,
  Loader,
  Type,
  LogOut,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import type { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  note?: string;
  accent?: boolean; // 연결 소유권의 가치가 드러나는 구간
};

const steps: Step[] = [
  {
    icon: <MessageSquare />,
    label: "질문 입력",
    note: "자연어로\n리포트를 요청합니다",
  },
  {
    icon: <Loader />,
    label: "리포트 생성 시작",
    note: "LLM이 처리합니다\n수 분 소요",
  },
  {
    icon: <Type />,
    label: "실시간 타이핑",
    note: "토큰이 30ms \n간격으로\n렌더됩니다",
  },
  {
    icon: <LogOut />,
    label: "다른 페이지로 이동",
    note: "스트림은\n스토어가 소유합니다",
    accent: true,
  },
  {
    icon: <RotateCcw />,
    label: "돌아와도 계속됨",
    note: "연결이\n끊기지 않습니다",
    accent: true,
  },
  {
    icon: <CheckCircle2 />,
    label: "리포트 완성",
    note: "done 후 큐를 비우고\n종료합니다",
  },
];

function FlowArrow() {
  return (
    <ArrowRight
      aria-hidden
      strokeWidth={2.5}
      className="size-6 shrink-0 rotate-90 self-center text-muted lg:rotate-0 print:rotate-0"
    />
  );
}

export function DiagramSSEFlow() {
  return (
    <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-stretch print:flex-row print:items-stretch">
      {steps.map((step, i) => (
        <div
          key={step.label}
          className="flex flex-col lg:flex-1 lg:flex-row print:flex-1 print:flex-row"
        >
          <div
            className={[
              "flex flex-1 flex-col items-center gap-2 rounded-xl border-2 bg-surface px-3 py-4 text-center",
              step.accent ? "border-accent" : "border-border",
            ].join(" ")}
          >
            <span
              className={[
                "flex size-9 items-center justify-center [&_svg]:size-6",
                step.accent ? "text-accent" : "text-muted",
              ].join(" ")}
            >
              {step.icon}
            </span>
            <p className="text-sm font-bold leading-tight sm:text-base">
              {step.label}
            </p>
            {step.note && (
              <p className="whitespace-pre-line text-xs leading-tight text-muted">
                {step.note}
              </p>
            )}
          </div>
          {i < steps.length - 1 && <FlowArrow />}
        </div>
      ))}
    </div>
  );
}
