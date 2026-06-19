/**
 * Merge classnames with conflict resolution
 * Simple implementation - can be replaced with clsx or classnames if needed
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
