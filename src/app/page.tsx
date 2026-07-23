import { AgentFArchitecture } from "@/components/sections/agentf/AgentFArchitecture";
import { AgentFOverview } from "@/components/sections/agentf/AgentFOverview";
import { AgentFSSE } from "@/components/sections/agentf/AgentFSSE";
import { AgentFSSERetro } from "@/components/sections/agentf/AgentFSSERetro";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { TitleSection } from "@/components/sections/TitleSection";

export default function Home() {
  return (
    <main>
      <TitleSection />
      <HighlightsSection />
      <AgentFOverview />
      <AgentFArchitecture />
      <AgentFSSE />
      <AgentFSSERetro />
    </main>
  );
}
