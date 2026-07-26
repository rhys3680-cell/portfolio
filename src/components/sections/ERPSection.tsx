import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

export function ERPSection() {
  return (
    <Section id="erp" breakAfter>
      <SectionHeading
        eyebrow="Data Infrastructure · Python"
        title="데이터 인프라"
        sub="Agent-F가 분석하고 Challenger가 쓰는 데이터 — 그 뒷단을 직접 만들었습니다."
      />

      <div className="max-w-3xl text-base leading-relaxed text-foreground/90 sm:text-lg">
        <p>
          회사 ERP는 API도 DB 접근도 열어주지 않았습니다. 그래서 실무 데이터를
          수집하고 배분 결정을 다시 반영하는 양방향 파이프라인을 직접 만들어,{" "}
          <strong className="text-foreground">
            두 제품이 다루는 데이터의 뒷단
          </strong>
          을 채웠습니다.
        </p>
      </div>
    </Section>
  );
}
