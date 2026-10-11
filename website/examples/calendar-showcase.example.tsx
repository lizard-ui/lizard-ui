import { useState } from 'react';
import { Calendar } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function tomorrow(): Date {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function ShowcaseExample() {
  const [tomorrowSelected, setTomorrowSelected] = useState<Date | null>(tomorrow);
  const [weekendDemo, setWeekendDemo] = useState<Date | null>(null);

  return (
    <ShowcaseRows>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-6">
        <ShowcaseRow label="Tomorrow selected" className="w-full">
          <Calendar
            selected={tomorrowSelected}
            onSelect={setTomorrowSelected}
            className="rounded-lg border border-border"
          />
        </ShowcaseRow>
        <ShowcaseRow label="Disabled weekends" className="w-full">
          <Calendar
            selected={weekendDemo}
            onSelect={setWeekendDemo}
            disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            className="rounded-lg border border-border"
          />
        </ShowcaseRow>
      </div>
    </ShowcaseRows>
  );
}
