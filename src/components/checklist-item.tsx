import { Text } from "@/components/ui";

interface ChecklistItemProps {
  label: string;
}

export default function ChecklistItem({ label }: ChecklistItemProps) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Checkmark Icon - Zero radius, flat amber */}
      <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 border-2 border-tertiary flex items-center justify-center">
        <svg
          className="w-4 h-4 md:w-5 md:h-5 text-tertiary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      {/* Label */}
      <Text
        size="base"
        weight="normal"
        className="text-white leading-relaxed"
      >
        {label}
      </Text>
    </div>
  );
}
