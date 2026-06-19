import {
  Button,
  Card,
  Input,
  Textarea,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Heading,
  Text,
  Mono,
} from "@/components/ui";

export default function Page() {
  return (
    <div className="min-h-screen bg-base p-8 font-body">
      {/* Hero Section */}
      <section className="mb-16 max-w-4xl">
        <Heading level="h1" color="primary">
          Rugged Premium Design System
        </Heading>
        <Text size="lg" color="secondary" className="mt-4">
          A design system built on square corners, hard shadows, and deliberate color use.
        </Text>
      </section>

      {/* Typography Showcase */}
      <section className="mb-16">
        <Heading level="h2">Typography</Heading>
        <div className="mt-6 space-y-6">
          <Card>
            <Heading level="h3">Display (Cal Sans)</Heading>
            <Mono uppercase className="mt-2">
              h1–h4 headings, hero statements
            </Mono>
          </Card>
          <Card>
            <Text size="lg" weight="semibold">
              Body (Plus Jakarta Sans)
            </Text>
            <Text color="secondary" className="mt-2">
              Paragraphs, labels, nav, form fields. This is the default reading font.
            </Text>
          </Card>
          <Card>
            <Mono>Mono (JetBrains Mono)</Mono>
            <Mono color="secondary" size="sm" className="mt-2">
              Tags, timestamps, prices, button micro-copy
            </Mono>
          </Card>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-16">
        <Heading level="h2">Buttons</Heading>
        <div className="mt-6 space-y-4">
          <Card>
            <Heading level="h3">Primary Variant</Heading>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </Card>
          <Card>
            <Heading level="h3">Secondary Variant</Heading>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button variant="secondary" size="sm">
                Small
              </Button>
              <Button variant="secondary" size="md">
                Medium
              </Button>
              <Button variant="secondary" size="lg">
                Large
              </Button>
            </div>
          </Card>
          <Card>
            <Heading level="h3">Tertiary Variant</Heading>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button variant="tertiary" size="sm">
                Small
              </Button>
              <Button variant="tertiary" size="md">
                Medium
              </Button>
              <Button variant="tertiary" size="lg">
                Large
              </Button>
            </div>
          </Card>
          <Card>
            <Heading level="h3">Destructive & Ghost</Heading>
            <div className="mt-4 flex gap-2 flex-wrap">
              <Button variant="destructive" size="md">
                Delete
              </Button>
              <Button variant="ghost" size="md">
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-16">
        <Heading level="h2">Cards</Heading>
        <div className="mt-6 space-y-4">
          <Card>
            <Heading level="h3">Default Card</Heading>
            <Text color="secondary">With 1px gray border and hard shadow.</Text>
          </Card>
          <Card accentBorder="primary">
            <Heading level="h3">With Primary Accent</Heading>
            <Text color="secondary">Top border in primary green.</Text>
          </Card>
          <Card accentBorder="success">
            <Heading level="h3">Success State</Heading>
            <Text color="secondary">Use accent borders for status indication.</Text>
          </Card>
          <Card accentBorder="error">
            <Heading level="h3">Error State</Heading>
            <Text color="secondary">Red accent top-border for warnings.</Text>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section className="mb-16">
        <Heading level="h2">Badges</Heading>
        <div className="mt-6">
          <Card>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="tertiary">Tertiary</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Alerts */}
      <section className="mb-16">
        <Heading level="h2">Alerts</Heading>
        <div className="mt-6 space-y-4">
          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your action completed successfully.</AlertDescription>
          </Alert>
          <Alert variant="error">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Please review this information before continuing.</AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Form Elements */}
      <section className="mb-16">
        <Heading level="h2">Form Elements</Heading>
        <div className="mt-6">
          <Card className="max-w-md space-y-6">
            <div>
              <Text weight="medium" size="sm" className="mb-2">
                Email Address
              </Text>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Text weight="medium" size="sm" className="mb-2">
                Message
              </Text>
              <Textarea placeholder="Your message here..." />
            </div>
            <Button variant="primary" className="w-full">
              Submit
            </Button>
          </Card>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="mb-16">
        <Heading level="h2">Brand Colors</Heading>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-primary">
            <Mono uppercase className="text-base text-base">
              Primary
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-base">
              #1A3C2A
            </Mono>
          </Card>
          <Card className="bg-secondary border border-black">
            <Mono uppercase className="text-base text-black">
              Secondary
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-black">
              #B5DDA2
            </Mono>
          </Card>
          <Card className="bg-tertiary">
            <Mono uppercase className="text-base text-black">
              Tertiary
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-black">
              #F4A622
            </Mono>
          </Card>
          <Card className="bg-gray">
            <Mono uppercase className="text-base text-black">
              Gray
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-black">
              #EAEAEA
            </Mono>
          </Card>
          <Card className="bg-black">
            <Mono uppercase className="text-base text-base">
              Black
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-base">
              #070707
            </Mono>
          </Card>
          <Card className="bg-base border border-black">
            <Mono uppercase className="text-base text-black">
              Base
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-black">
              #FFFFFF
            </Mono>
          </Card>
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="mb-16">
        <Heading level="h2">Semantic Colors</Heading>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-error-secondary border border-black">
            <Mono uppercase className="text-base text-black">
              Error
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-black">
              #F04438
            </Mono>
          </Card>
          <Card className="bg-success-secondary border border-black">
            <Mono uppercase className="text-base text-black">
              Success
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-black">
              #17B26A
            </Mono>
          </Card>
          <Card className="bg-warning-secondary border border-black">
            <Mono uppercase className="text-base text-black">
              Warning
            </Mono>
            <Mono size="xs" uppercase className="mt-1 text-black">
              #F79009
            </Mono>
          </Card>
        </div>
      </section>

      {/* Text Colors */}
      <section className="mb-16">
        <Heading level="h2">Text Colors</Heading>
        <div className="mt-6 space-y-4">
          <Card>
            <div className="space-y-4">
              <div>
                <Text className="text-black font-semibold mb-2">Text Primary</Text>
                <Text className="text-black">#000000 – Body text and primary labels</Text>
                <Mono size="xs" className="mt-1 text-gray-600">Regular body copy and interactive elements</Mono>
              </div>
              <div>
                <Text className="text-[#494949] font-semibold mb-2">Text Secondary</Text>
                <Text className="text-[#494949]">#494949 – Secondary labels and supporting text</Text>
                <Mono size="xs" className="mt-1 text-gray-600">Supporting information and metadata</Mono>
              </div>
              <div>
                <Text className="text-[#8B928C] font-semibold mb-2">Text Tertiary</Text>
                <Text className="text-[#8B928C]">#8B928C – Captions and non-essential info</Text>
                <Mono size="xs" className="mt-1 text-gray-600">Use sparingly, restrict to non-essential captions</Mono>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Design Principles */}
      <section>
        <Heading level="h2">Design Principles</Heading>
        <div className="mt-6 space-y-4">
          <Card accentBorder="primary">
            <Heading level="h3">Zero Border-Radius</Heading>
            <Text color="secondary">
              Every component has hard, square corners. This is the single most important rule.
            </Text>
          </Card>
          <Card accentBorder="primary">
            <Heading level="h3">Hard Shadows & Borders</Heading>
            <Text color="secondary">
              Depth comes from 1–2px borders and flat offset shadows, not soft blur.
            </Text>
          </Card>
          <Card accentBorder="primary">
            <Heading level="h3">No Gradients</Heading>
            <Text color="secondary">Flat fills only. Color delivers the message, not decoration.</Text>
          </Card>
          <Card accentBorder="primary">
            <Heading level="h3">Intentional Typography</Heading>
            <Text color="secondary">
              Three fonts with specific roles: display (confidence), body (readability), mono (utility).
            </Text>
          </Card>
        </div>
      </section>
    </div>
  );
}
