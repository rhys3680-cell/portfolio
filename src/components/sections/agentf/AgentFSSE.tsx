import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { TradeoffTable } from "@/components/layout/TradeoffTable";
import {
  Troubleshooting,
  TroubleshootingBlock,
} from "@/components/layout/Troubleshooting";

function C({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em]">
      {children}
    </code>
  );
}

export function AgentFSSE() {
  return (
    <Section id="agent-f-sse" breakAfter>
      <SectionHeading
        eyebrow="Agent-F · SSE ②"
        title="어떻게 구현했나"
        sub="헤더 인증·다중 연결·이벤트 순서를 직접 풀고, 연결 소유권을 컴포넌트 밖으로 옮겼습니다."
      />

      <Troubleshooting>
        <TroubleshootingBlock label="트레이드오프">
          <TradeoffTable
            options={[
              {
                name: "EventSource",
                pros: ["구현이 간편함"],
                cons: ["커스텀 헤더 불가", "타임아웃·이벤트 제어 불가"],
              },
              {
                name: "Fetch (ReadableStream)",
                chosen: true,
                pros: ["헤더 인증 가능", "타임아웃·이벤트 제어 자유"],
                cons: ["직접 구현 부담", "자료 적어 프로토콜 분석 필요"],
              },
            ]}
          />
          <p className="mt-3 text-sm text-muted">
            제어의 자유가 구현 부담보다 크다고 판단해 Fetch를 택했습니다.
          </p>
        </TroubleshootingBlock>
      </Troubleshooting>
    </Section>
  );
}
