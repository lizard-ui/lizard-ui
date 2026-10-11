export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** 42-day grid (6 weeks) covering the month, aligned to `weekStartsOn`. */
export function buildMonthGrid(month: Date, weekStartsOn: WeekStartsOn = 0): Date[] {
  const first = startOfMonth(month);
  const startOffset = (first.getDay() - weekStartsOn + 7) % 7;
  const gridStart = new Date(first.getFullYear(), first.getMonth(), 1 - startOffset);
  return Array.from({ length: 42 }, (_, index) => {
    return new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
  });
}

export function weekdayLabels(locale: string, weekStartsOn: WeekStartsOn = 0): string[] {
  const monday = new Date(2024, 0, 1); // Monday
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + ((index + weekStartsOn + 6) % 7));
    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
  });
}

export function formatMonthYear(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date);
}

export function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
