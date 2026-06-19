export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Icon Mark Placeholder */}
      <div className="w-8 h-8 bg-base border-2 border-base flex items-center justify-center">
        <span className="text-primary font-bold text-sm">H</span>
      </div>
      {/* Wordmark */}
      <span className="font-display text-base font-bold tracking-tight text-base">
        HERDOS
      </span>
    </div>
  );
}
