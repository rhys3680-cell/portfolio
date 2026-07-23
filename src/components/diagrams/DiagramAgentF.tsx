import {
  ArrowDown,
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

// 계층 사이 굵은 화살표
function Arrow() {
  return (
    <ArrowDown
      aria-hidden
      className="my-1 size-7 text-muted"
      strokeWidth={2.5}
    />
  );
}

export function DiagramAgentF() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* 1. 브라우저 (Next.js) */}
      <DiagramNode
        icon={<SiNextdotjs className="text-foreground" />}
        label="브라우저 — Next.js"
        note="App Router · FSD 4계층"
      />

      <Arrow />

      {/* 2. 상태관리 2갈래 */}
      <div className="flex flex-wrap justify-center gap-4">
        <DiagramNode
          icon={<SiReactquery className="text-[#FF4154]" />}
          label="TanStack Query"
          note="서버 상태 · 캐시"
        />
        <DiagramNode
          icon={<Boxes className="text-accent-2" />}
          label="Zustand"
          note="SSE 실시간 상태·연결"
          accent
        />
      </div>

      <Arrow />

      {/* 3. 데이터 소스 4갈래 */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
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
          note="지도·비교 데이터"
        />
        <DiagramNode
          icon={<Cloud className="text-foreground" />}
          label="S3 CDN"
          note="상품 이미지"
        />
      </div>

      <Arrow />

      {/* 4. 백엔드 (Spring) */}
      <DiagramNode
        icon={<SiSpring className="text-[#6DB33F]" />}
        label="백엔드 — Spring"
      />

      <Arrow />

      {/* 5. LLM */}
      <DiagramNode
        icon={<SiLangchain className="text-warn" />}
        label="LLM 리포트 생성"
        note="수 분 소요"
      />
    </div>
  );
}
