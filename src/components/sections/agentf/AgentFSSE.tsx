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

export function AgentFSSE() {
  return (
    <Section id="agent-f-sse" breakAfter>
      <SectionHeading
        eyebrow="Agent-F · Troubleshooting"
        title="인증 멀티룸 SSE 스트리밍"
        sub="헤더 인증·다중 연결·이벤트 순서를 직접 풀고, 연결 소유권을 컴포넌트 밖으로."
      />

      <Troubleshooting>
        <TroubleshootingBlock label="문제">
          <p>
            AI 리포트 응답을 SSE로 실시간 렌더해야 했는데, 두 제약이 얽혀
            있었다.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
            <li>
              인증상 accessToken을{" "}
              <strong className="text-foreground/90">헤더</strong>로 넘겨야
              하는데, 네이티브 <C>EventSource</C>는 커스텀 헤더를 실을 수 없다.
            </li>
            <li>
              응답이 process·llm 토큰·csv·image·follow-up 등{" "}
              <strong className="text-foreground/90">8종 이벤트</strong>가 섞여
              오고, 채팅방마다 독립 스트림이 돌아야 했다.
            </li>
          </ul>
        </TroubleshootingBlock>

        <TroubleshootingBlock label="해결" tone="solution">
          <p>
            <C>EventSource</C> 대신 Fetch(ReadableStream)로 SSE를 직접 구현하고,{" "}
            <strong className="text-foreground/90">
              연결 소유권을 컴포넌트가 아닌 전역 스토어로
            </strong>{" "}
            옮겼다.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
            <li>
              8종 이벤트를 파싱·핸들링, 채팅방별 연결을 <C>Map</C>으로
              관리(멀티룸)
            </li>
            <li>LLM 토큰을 30ms 간격으로 흘리는 토큰 큐로 타이핑 효과</li>
            <li>
              done 이벤트 이후에도 큐가 빌 때까지 기다리는 등 이벤트 순서 정합성
              처리
            </li>
          </ul>
          <p className="mt-3">
            연결을 스토어가 소유하니{" "}
            <strong className="text-foreground/90">
              방을 나가 다른 페이지로 이동해도 스트림이 끊기지 않는다
            </strong>
            . 컴포넌트 생명주기와 연결 생명주기를 분리한 것 — 라이브러리로
            대체되지 않는 설계 지점이었다.
          </p>
        </TroubleshootingBlock>

        <TroubleshootingBlock label="트레이드오프">
          <p>
            <C>EventSource</C>(간편하나 헤더·제어 불가)를 버리고 Fetch(구현
            부담은 크나 인증·타임아웃·이벤트 제어가 자유로움)를 택했다. 자료가
            많지 않아 프로토콜을 직접 뜯어가며 이해해야 했다.
          </p>
        </TroubleshootingBlock>
      </Troubleshooting>
    </Section>
  );
}
