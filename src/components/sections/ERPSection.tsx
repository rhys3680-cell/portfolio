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
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "약 62만 건·5년치 데이터",
            "수집 11종·업로드 4종",
            "백필 세션 1,800회 → 60회",
            "순수 로직 테스트 235개",
          ].map((item) => (
            <li key={item} className="rounded-xl border border-border bg-surface p-4 font-bold">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          추천 결과의 실제 일치율 한계를 확인한 뒤 완전 자동화를 고집하지 않고,
          후보 추천과 사람 승인을 분리했습니다. 자동화의 목표를 사람 제거가 아니라
          판단에 집중할 시간 확보로 정의했습니다.
        </p>
      </div>
    </Section>
  );
}
