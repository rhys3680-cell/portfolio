import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  Troubleshooting,
  TroubleshootingBlock,
} from "@/components/layout/Troubleshooting";
import { DiagramEventBus } from "@/components/diagrams/DiagramEventBus";

export function AgentFSSERetro() {
  return (
    <Section id="agent-f-sse-retro" breakAfter>
      <SectionHeading
        eyebrow="Agent-F · SSE ③"
        title="다시 만든다면"
        sub="SSE를 구현하며 내린 판단을 지금 관점에서 되돌아봅니다."
      />

      <Troubleshooting>
        <TroubleshootingBlock label="store 결합을 이벤트 버스로" tone="retro">
          <p className="mb-5">
            SSE 매니저 store가 chat store의 메서드를 직접 호출해{" "}
            <strong className="text-foreground/90">
              두 store가 강하게 결합
            </strong>
            돼 있었습니다. 다시 만든다면 이벤트 버스(발행-구독)로 분리해, SSE
            매니저는 이벤트를 발행만 하고 store는 구독해 상태만 갱신하게
            하겠습니다. 발행자와 구독자가 서로를 모르게 되어 결합이 풀리고, 8종
            이벤트를 다루기도 깔끔해집니다.
          </p>
          <DiagramEventBus />
        </TroubleshootingBlock>
      </Troubleshooting>
    </Section>
  );
}
