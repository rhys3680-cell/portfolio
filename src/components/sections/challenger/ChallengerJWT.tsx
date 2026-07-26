import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { DiagramSingleFlight } from "@/components/diagrams/DiagramSingleFlight";

export function ChallengerJWT() {
  return (
    <Section id="challenger-jwt" breakAfter>
      <SectionHeading
        eyebrow="Challenger · Troubleshooting"
        title="JWT refresh 경합 해결"
        sub="토큰 만료 순간 동시에 몰린 요청들이 각자 refresh를 호출해 터지던 문제를, refresh가 딱 1회만 나가도록 재설계했습니다."
      />

      {/* 수렴 도식 */}
      <div className="mb-8 rounded-2xl border border-border bg-surface/40 p-6 sm:p-10">
        <DiagramSingleFlight />
      </div>

      {/* 문제 · 해결 한 줄씩 */}
      <dl className="max-w-3xl space-y-4">
        <div className="border-l-2 border-warn/60 pl-4">
          <dt className="text-sm font-bold text-muted">문제</dt>
          <dd className="mt-1 text-base leading-relaxed sm:text-lg">
            동시 401이 각자 refresh를 호출 → rotation상 첫 것만 유효, 나머지는
            무효 토큰으로 다시 401.
          </dd>
        </div>
        <div className="border-l-2 border-accent pl-4">
          <dt className="text-sm font-bold text-muted">해결</dt>
          <dd className="mt-1 text-base leading-relaxed sm:text-lg">
            진행 중인 Promise를 공유(single-flight)해 refresh 1회 보장. 불린
            플래그와 달리 확인·반환이 원자적입니다.
          </dd>
        </div>
      </dl>
    </Section>
  );
}
