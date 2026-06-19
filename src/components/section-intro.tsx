import { Heading, Text, Mono, Button } from "@/components/ui";

interface SectionIntroProps {
  eyebrow?: string;
  heading: string;
  description: string;
  primaryCTA?: {
    label: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    label: string;
    onClick?: () => void;
  };
}

export default function SectionIntro({
  eyebrow = "PLATFORM CAPABILITIES",
  heading = "Precision Solutions for Sheep and Goats",
  description = "From individual animal diagnostics to macro-level herd telemetry, HERDOS supports the metrics and triggers your team needs to manage sheep and goats efficiently.",
  primaryCTA = { label: "Calculate Your ROI" },
  secondaryCTA = { label: "Talk to Sales" },
}: SectionIntroProps) {
  return (
    <section className="w-full bg-base py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <Mono
            size="sm"
            uppercase
            className="text-secondary tracking-widest mb-2 md:mb-3"
          >
            {eyebrow}
          </Mono>

          {/* Heading */}
          <Heading
            level="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-6 md:mb-8"
          >
            {heading}
          </Heading>

          {/* Description */}
          <Text
            size="lg"
            weight="normal"
            className="text-secondary leading-relaxed mb-8 md:mb-10 max-w-2xl"
          >
            {description}
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <Button
              variant="primary"
              size="md"
              onClick={primaryCTA.onClick}
            >
              {primaryCTA.label}
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={secondaryCTA.onClick}
            >
              {secondaryCTA.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
