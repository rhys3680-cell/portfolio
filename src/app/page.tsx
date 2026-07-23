import { AgentFOverview } from "@/components/sections/agentf/AgentFOverview";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { TitleSection } from "@/components/sections/TitleSection";

export default function Home() {
  return (
    <main>
      <TitleSection />
      <HighlightsSection />
      <AgentFOverview />
    </main>
  );
}
