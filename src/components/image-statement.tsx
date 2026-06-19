import { Heading, Text } from "@/components/ui";

interface ImageStatementProps {
  backgroundImage?: string;
  primaryStatement: string;
  secondaryStatement: string;
}

export default function ImageStatement({
  backgroundImage = "/images/product-statement.jpg",
  primaryStatement = "Know Before it gets worse.",
  secondaryStatement = "No fence. No herder. No worry.",
}: ImageStatementProps) {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat" style={{ aspectRatio: "16/10", backgroundImage: `url(${backgroundImage})` }}>
      {/* Solid Flat Dark Bar - Bottom anchored, no radius, no gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-black" style={{ height: "35%" }} />

      {/* Text Content - Bottom-left aligned over dark bar */}
      <div className="absolute bottom-0 left-0 px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 max-w-2xl">
        {/* Primary Statement */}
        <Heading
          level="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-base mb-2 md:mb-3"
        >
          {primaryStatement}
        </Heading>

        {/* Secondary Statement */}
        <Text
          size="lg"
          weight="medium"
          className="text-white leading-relaxed opacity-80"
        >
          {secondaryStatement}
        </Text>
      </div>
    </section>
  );
}
