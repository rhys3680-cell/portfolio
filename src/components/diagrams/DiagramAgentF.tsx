import {
  ArrowRight,
  Boxes,
  Webhook,
  Radio,
  FileJson,
  Cloud,
} from "lucide-react";
import {
  SiLangchain,
  SiNextdotjs,
  SiReactquery,
  SiSpring,
} from "react-icons/si";
import { DiagramNode } from "./DiagramNode";
import type { ReactNode } from "react";

// 열 사이 가로 화살표 (모바일에선 세로)
function FlowArrow() {
  return (
    <ArrowRight
      aria-hidden
      strokeWidth={2.5}
      className="size-7 shrink-0 rotate-90 self-center text-muted lg:rotate-0 print:rotate-0"
    />
  );
}

// 계층 열: 제목 + 노드들
function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <p className="text-center text-xs font-bold uppercase tracking-wider text-muted">
        {title}
      </p>
      <div className="flex flex-1 flex-col justify-center gap-3">
        {children}
      </div>
    </div>
  );
}

export function DiagramAgentF() {
  return (
    <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch print:flex-row print:items-stretch">
      <Column title="클라이언트">
        <DiagramNode
          icon={<SiNextdotjs className="text-foreground" />}
          label="브라우저 — Next.js"
          note="App Router · FSD 4계층"
        />
      </Column>

      <FlowArrow />

      <Column title="상태 관리">
        <DiagramNode
          icon={<SiReactquery className="text-[#FF4154]" />}
          label="TanStack Query"
          note="서버 상태 · 캐시"
        />
        <DiagramNode
          icon={<Boxes className="text-accent-2" />}
          label="Zustand"
          note="SSE 실시간 상태"
          accent
        />
      </Column>

      <FlowArrow />

      <Column title="데이터 소스">
        <DiagramNode
          icon={<Webhook className="text-foreground" />}
          label="REST API"
          note="axios · 401 인터셉터"
        />
        <DiagramNode
          icon={<Radio className="text-accent" />}
          label="SSE 스트림"
          note="fetch + ReadableStream"
          accent
        />
        <DiagramNode
          icon={<FileJson className="text-foreground" />}
          label="정적 JSON·SVG"
          note="지도·비교"
        />
        <DiagramNode
          icon={<Cloud className="text-foreground" />}
          label="S3 CDN"
          note="상품 이미지"
        />
      </Column>

      <FlowArrow />

      <Column title="백엔드">
        <DiagramNode
          icon={<SiSpring className="text-[#6DB33F]" />}
          label="Spring"
        />
        <DiagramNode
          icon={<SiLangchain className="text-warn" />}
          label="LLM 리포트"
          note="수 분 소요"
        />
      </Column>
    </div>
  );
}
