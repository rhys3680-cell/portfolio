import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DiagramProjectMap } from "@/components/diagrams/DiagramProjectMap";

export function SummarySection() {
  return (
    <Section id="summary">
      <SectionHeading
        eyebrow="Overview"
        title={
          <>
            하나의 데이터,
            <br />세 개의 제품
          </>
        }
        sub={
          <>
            같은 패션 리테일 도메인을 세 층위로 다뤘습니다.
            <br />
            경영진용 리포트(Agent-F)와 MD 배분 웹앱(Challenger)을 프론트로
            만들고,
            <br />그 데이터를 채우는 파이프라인(ERP)까지.
          </>
        }
      />

      <DiagramProjectMap />
    </Section>
  );
}
