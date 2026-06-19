import FeatureDetail from '@/components/feature-detail'
import SectionIntro from '@/components/section-intro'

export default function Product() {
  return (
    <div>
      <SectionIntro
        eyebrow="PLATFORM CAPABILITIES"
        heading="Precision Solutions for Sheep and Goats"
        description="From individual animal diagnostics to macro-level herd telemetry, HERDOS supports the metrics and triggers your team needs to manage sheep and goats efficiently."
        primaryCTA={{ label: "Calculate Your ROI" }}
        secondaryCTA={{ label: "Talk to Sales" }}
      />
      <FeatureDetail
        number="01"
        label="EARLY DIAGNOSTICS"
        heading="Early Illness Detection"
        description="Our lightweight collar's advanced temperature and motion sensors run edge AI algorithms..."
        capabilitiesLabel="Key Capabilities"
        capabilities={[
          "Early PPR and respiratory distress alerts",
          "Persistent fever and isolation alerts",
          "Tailored sheep and goat health baseline",
        ]}
      />
    </div>
  )
}