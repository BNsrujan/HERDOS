import { Button, Heading, Text } from "@/components/ui";
import Logo from "@/components/logo";

interface HeroProps {
  backgroundImage?: string;
}

export default function Hero({ backgroundImage = "/images/hero-bg.jpg" }: HeroProps) {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-80px)] flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Flat Dark Overlay - No gradient, no blur */}
      <div className="absolute inset-0 bg-black opacity-35" />

      {/* Content Container - Full-bleed with hard edges */}
      <div className="relative z-10 w-full flex-grow flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24 pt-8 md:pt-12">
        
        {/* Hero Headline & Subheadline Block - Bottom-left aligned */}
        <div className="flex flex-col max-w-2xl">
          {/* Main Headline */}
          <Heading
            level="h1"
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-tertiary"
          >
            Every Animal.
            <br />
            Accounted For.
          </Heading>

          {/* Subheadline */}
          <Text
            size="lg"
            weight="medium"
            className="text-base leading-relaxed max-w-xl"
          >
            India&apos;s First Virtual Fencing and Early Illness Detection
          </Text>
        </div>
      </div>
    </section>
  );
}
