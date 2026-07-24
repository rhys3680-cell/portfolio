import { AgentFArchitecture } from "@/components/sections/agentf/AgentFArchitecture";
import { AgentFOverview } from "@/components/sections/agentf/AgentFOverview";
import { AgentFSSE } from "@/components/sections/agentf/AgentFSSE";
import { AgentFSSEFlow } from "@/components/sections/agentf/AgentFSSEFlow";
import { AgentFSSERetro } from "@/components/sections/agentf/AgentFSSERetro";
import { SummarySection } from "@/components/sections/SummarySection";
import { TitleSection } from "@/components/sections/TitleSection";

export default function Home() {
  return (
    <main>
      <TitleSection />
      <SummarySection />
      <AgentFOverview />
      <AgentFArchitecture />
      <AgentFSSEFlow />
      <AgentFSSE />
      <AgentFSSERetro />
    </main>
  );
}
