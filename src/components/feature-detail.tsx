import { Heading, Text, Mono } from "@/components/ui";

interface FeatureDetailProps {
  number: string;
  label: string;
  heading: string;
  description: string;
  capabilitiesLabel?: string;
  capabilities: string[];
}

export default function FeatureDetail({
  number = "01",
  label = "EARLY DIAGNOSTICS",
  heading = "Early Illness Detection",
  description = "Our lightweight collar's advanced temperature and motion sensors run edge AI algorithms to identify anomalies in sheep and goats. Get automated alerts for fever, isolation behavior, and respiratory shifts up to 48 hours before visible symptoms manifest.",
  capabilitiesLabel = "Key Capabilities",
  capabilities = [
    "Early PPR and respiratory distress alerts",
    "Persistent fever and isolation alerts",
    "Tailored sheep and goat health baseline",
  ],
}: FeatureDetailProps) {
  return (
    <section className="w-full bg-base py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          {/* Numbered Eyebrow Label */}
          <Mono
            size="sm"
            uppercase
            className="text-secondary tracking-widest mb-2 md:mb-3"
          >
            {number} / {label}
          </Mono>

          {/* Heading */}
          <Heading
            level="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-5 md:mb-6"
          >
            {heading}
          </Heading>

          {/* Description Paragraph */}
          <Text
            size="lg"
            weight="normal"
            className="text-secondary leading-relaxed mb-8 md:mb-10 max-w-3xl"
          >
            {description}
          </Text>

          {/* Key Capabilities Subhead */}
          <Text
            size="lg"
            weight="semibold"
            className="text-primary mb-3 md:mb-4"
          >
            {capabilitiesLabel}
          </Text>

          {/* Capabilities List */}
          <ul className="space-y-2 md:space-y-3 max-w-3xl">
            {capabilities.map((capability, index) => (
              <li
                key={index}
                className="flex items-start gap-3 md:gap-4 text-base leading-relaxed text-primary"
              >
                {/* Square bullet marker */}
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary mt-2.5" />
                <span className="font-body">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
