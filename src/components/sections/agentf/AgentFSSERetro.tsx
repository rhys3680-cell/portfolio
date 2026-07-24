import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
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

export function AgentFSSERetro() {
  return (
    <Section id="agent-f-sse-retro" breakAfter>
      <SectionHeading
        eyebrow="Agent-F · Retrospective"
        title="다시 만든다면"
        sub="SSE를 구현하며 내린 사고과정을, 지금 관점에서 되돌아본다."
      />

      <Troubleshooting>
        <TroubleshootingBlock label="생명주기를 서버로" tone="retro">
          <p>
            초기엔{" "}
            <strong className="text-foreground/90">
              클라이언트가 연결 생명주기를 쥐었다
            </strong>{" "}
            — 30분간 ping 없는 stale 연결을 <C>AbortController</C>로
            정리(GC)하고, 그렇게 끊긴 방에 돌아오면 <C>Last-Event-ID</C>로
            재개해 스트리밍을 이어받았다. 하지만 백엔드와 논의 끝에{" "}
            <strong className="text-foreground/90">
              연결 생명주기는 서버 책임
            </strong>
            으로 옮겼고, 그러자 클라이언트의 타임아웃 정리·재개 로직이 통째로
            사라져 코드가 더 얇아졌다. &ldquo;만든 걸 덜어내는&rdquo;
            과정이었다.
          </p>
        </TroubleshootingBlock>

        <TroubleshootingBlock label="라이브러리 선택" tone="retro">
          <p>
            사실 <C>@microsoft/fetch-event-source</C>처럼 헤더 인증을 지원하는
            라이브러리가 이미 있었다. 당시엔 네이티브의 한계만 보고 직접
            구현했는데,{" "}
            <strong className="text-foreground/90">
              지금이라면 라이브러리부터 검토했을 것이다.
            </strong>{" "}
            다만 그 과정에서 SSE 프레임 파싱·재연결·이벤트 순서를 밑바닥까지
            이해한 건 자산으로 남았고, 정작 핵심인 &ldquo;연결 소유권을
            스토어로&rdquo;는 라이브러리와 무관한 판단이었다.
          </p>
        </TroubleshootingBlock>
      </Troubleshooting>
    </Section>
  );
}
