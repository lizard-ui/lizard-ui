import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { cn } from '../../utils/cn';
import {
  addMonths,
  buildMonthGrid,
  formatMonthYear,
  isSameDay,
  isSameMonth,
  startOfMonth,
  weekdayLabels,
  type WeekStartsOn,
} from '../../utils/calendar';
import { Button } from './button';

export type CalendarProps = {
  /** Visible month. Uncontrolled when omitted. */
  month?: Date;
  selected?: Date | null;
  onSelect?: (date: Date) => void;
  onMonthChange?: (month: Date) => void;
  /** 0 = Sunday. */
  weekStartsOn?: WeekStartsOn;
  disabled?: (date: Date) => boolean;
  locale?: string;
  className?: string;
};

function Calendar({
  month,
  selected,
  onSelect,
  onMonthChange,
  weekStartsOn = 0,
  disabled,
  locale = 'en',
  className,
}: CalendarProps) {
  const [internalMonth, setInternalMonth] = React.useState(() => startOfMonth(selected ?? new Date()));
  const viewMonth = month ? startOfMonth(month) : internalMonth;
  const days = buildMonthGrid(viewMonth, weekStartsOn);
  const labels = weekdayLabels(locale, weekStartsOn);
  const today = new Date();

  function changeMonth(amount: number) {
    const next = addMonths(viewMonth, amount);
    onMonthChange?.(next);
    if (!month) setInternalMonth(next);
  }

  return (
    <div className={cn('w-fit p-3', className)}>
      <div className="flex items-center justify-between gap-2 pb-3">
        <Button type="button" variant="ghost" size="icon" onClick={() => changeMonth(-1)} aria-label="Previous month">
          <ChevronLeft />
        </Button>
        <div className="text-sm font-medium">{formatMonthYear(viewMonth, locale)}</div>
        <Button type="button" variant="ghost" size="icon" onClick={() => changeMonth(1)} aria-label="Next month">
          <ChevronRight />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
        {labels.map(label => (
          <div key={label} className="flex h-8 items-center justify-center">
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1" role="grid">
        {days.map(day => {
          const outside = !isSameMonth(day, viewMonth);
          const isSelected = selected ? isSameDay(day, selected) : false;
          const isToday = isSameDay(day, today);
          const isDisabled = disabled?.(day) ?? false;
          return (
            <Button
              key={day.toISOString()}
              type="button"
              variant={isSelected ? 'default' : 'ghost'}
              size="icon"
              disabled={isDisabled}
              aria-pressed={isSelected}
              aria-label={day.toDateString()}
              className={cn(
                'h-9 w-9',
                outside && !isSelected && 'text-muted-foreground opacity-50',
                isToday && !isSelected && 'border border-border',
              )}
              onClick={() => onSelect?.(day)}
            >
              {day.getDate()}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export { Calendar };
