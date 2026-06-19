import Hero from "@/components/hero";
import ImageStatement from "@/components/image-statement";
import ProductFeature from "@/components/product-feature";
import LeadCapture from "@/components/lead-capture";

export default function Page() {
  return (
    <main>
      <Hero backgroundImage="/images/hero-bg.jpg" />
      <ImageStatement
        backgroundImage="/images/product-statement.jpg"
        primaryStatement="Know Before it gets worse."
        secondaryStatement="No fence. No herder. No worry."
      />
      <ProductFeature
        backgroundImage="/images/product-feature.jpg"
        headline1="The Base Station."
        headline2="10 KM Range."
        description="One hub to rule the field. Solar-powered, self-installing, and built to survive monsoon rains and desert heat. No local Wi-Fi needed."
        checklist={[
          "10 km Radius Coverage",
          "Plug & Play Setup",
          "Dust & Water Resistant",
        ]}
      />
      <LeadCapture
        imageUrl="/images/lead-capture-animal.jpg"
        imageAlt="Goat wearing HERDOS device"
      />
    </main>
  );
}