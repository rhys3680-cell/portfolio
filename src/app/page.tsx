import { AgentFArchitecture } from "@/components/sections/agentf/AgentFArchitecture";
import { AdditionalProjectsSection } from "@/components/sections/AdditionalProjectsSection";
import { AgentFOverview } from "@/components/sections/agentf/AgentFOverview";
import { AgentFSSE } from "@/components/sections/agentf/AgentFSSE";
import { AgentFSSEFlow } from "@/components/sections/agentf/AgentFSSEFlow";
import { AgentFSSERetro } from "@/components/sections/agentf/AgentFSSERetro";
import { ChallengerJWT } from "@/components/sections/challenger/ChallengerJWT";
import { ChallengerOverview } from "@/components/sections/challenger/ChallengerOverview";
import { ERPSection } from "@/components/sections/ERPSection";
import { OutroSection } from "@/components/sections/OutroSection";
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
      <ChallengerOverview />
      <ChallengerJWT />
      <ERPSection />
      <AdditionalProjectsSection />
      <OutroSection />
    </main>
  );
}
