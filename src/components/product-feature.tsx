import { Heading, Text } from "@/components/ui";
import ChecklistItem from "@/components/checklist-item";

interface ProductFeatureProps {
  backgroundImage?: string;
  headline1?: string;
  headline2?: string;
  description?: string;
  checklist?: string[];
}

export default function ProductFeature({
  backgroundImage = "/images/product-feature.jpg",
  headline1 = "The Base Station.",
  headline2 = "10 KM Range.",
  description = "One hub to rule the field. Solar-powered, self-installing, and built to survive monsoon rains and desert heat. No local Wi-Fi needed.",
  checklist = [
    "10 km Radius Coverage",
    "Plug & Play Setup",
    "Dust & Water Resistant",
  ],
}: ProductFeatureProps) {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        minHeight: "600px",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content Block - Bottom-left to mid-left aligned */}
      <div className="relative z-10 w-full h-full flex items-end px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="max-w-xl">
          {/* Headline Block */}
          <div className="mb-6 md:mb-8">
            {/* Line 1: "The Base Station." - White */}
            <Heading
              level="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-base mb-1 md:mb-2"
            >
              {headline1}
            </Heading>

            {/* Line 2: "10 KM Range." - Tertiary Amber */}
            <Heading
              level="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-tertiary"
            >
              {headline2}
            </Heading>
          </div>

          {/* Description Paragraph */}
          <Text
            size="lg"
            weight="normal"
            className="text-gray-200 leading-relaxed mb-8 md:mb-10 max-w-md"
          >
            {description}
          </Text>

          {/* Checklist Items */}
          <div className="space-y-3 md:space-y-4">
            {checklist.map((item, index) => (
              <ChecklistItem key={index} label={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
