"use client"
import { useState } from "react";
import { Heading, Input, Textarea, Button } from "@/components/ui";

interface LeadCaptureProps {
  imageUrl?: string;
  imageAlt?: string;
}

export default function LeadCapture({
  imageUrl = "/images/lead-capture-animal.jpg",
  imageAlt = "Goat wearing HERDOS device",
}: LeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full bg-gray py-16 md:py-20 lg:py-24">
      {/* Two-Column Container */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Image */}
        <div className="flex items-center justify-center">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto max-w-md"
          />
        </div>

        {/* Right Column - Heading & Form */}
        <div className="flex flex-col">
          {/* Heading Block */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            {/* Line 1: "Be Among the First Farmers" - Primary Text */}
            <Heading
              level="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-1 md:mb-2"
            >
              Be Among the First Farmers
            </Heading>

            {/* Line 2: "to Use HERDOS" - Tertiary Amber */}
            <Heading
              level="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-tertiary"
            >
              to Use HERDOS
            </Heading>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                size="lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Textarea */}
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                size="lg"
                placeholder="Tell us your problem, we will solve it"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-40 md:min-h-48"
                required
              />
            </div>

            {/* Submit Button - Right-aligned */}
            <div className="flex justify-start mt-2 md:mt-4">
              <Button
                type="submit"
                variant="tertiary"
                size="lg"
                className="font-mono uppercase tracking-widest"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
