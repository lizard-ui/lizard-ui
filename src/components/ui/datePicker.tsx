import { CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../../utils/cn';
import { formatDate } from '../../utils/calendar';
import { Button } from './button';
import { Calendar, type CalendarProps } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export type DatePickerProps = {
  value?: Date | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  locale?: string;
  weekStartsOn?: CalendarProps['weekStartsOn'];
  className?: string;
};

function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  disabled,
  locale = 'en',
  weekStartsOn,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className={cn('w-full justify-start text-left font-normal', !value && 'text-muted-foreground', className)}
        >
          <CalendarIcon />
          {value ? formatDate(value, locale) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          selected={value}
          weekStartsOn={weekStartsOn}
          locale={locale}
          onSelect={date => {
            onChange?.(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
