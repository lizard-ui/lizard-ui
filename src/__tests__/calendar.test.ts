import { describe, expect, test } from 'vitest';
import { addMonths, buildMonthGrid, isSameDay, isSameMonth, startOfMonth, weekdayLabels } from '../utils/calendar';

describe('calendar', () => {
  test('startOfMonth drops the day', () => {
    const month = startOfMonth(new Date(2026, 9, 11));
    expect(month.getFullYear()).toBe(2026);
    expect(month.getMonth()).toBe(9);
    expect(month.getDate()).toBe(1);
  });

  test('addMonths crosses year boundaries', () => {
    const next = addMonths(new Date(2026, 11, 1), 1);
    expect(next.getFullYear()).toBe(2027);
    expect(next.getMonth()).toBe(0);
  });

  test('buildMonthGrid starts on Sunday by default and covers 6 weeks', () => {
    const days = buildMonthGrid(new Date(2026, 9, 1), 0);
    expect(days).toHaveLength(42);
    expect(days[0]?.getDay()).toBe(0);
    expect(isSameMonth(days.find(day => day.getDate() === 1 && day.getMonth() === 9)!, new Date(2026, 9, 1))).toBe(
      true,
    );
  });

  test('weekday labels follow weekStartsOn', () => {
    const sunday = weekdayLabels('en-US', 0);
    const monday = weekdayLabels('en-US', 1);
    expect(sunday[0]?.startsWith('Sun')).toBe(true);
    expect(monday[0]?.startsWith('Mon')).toBe(true);
  });

  test('isSameDay ignores time', () => {
    expect(isSameDay(new Date(2026, 0, 1, 1), new Date(2026, 0, 1, 23))).toBe(true);
    expect(isSameDay(new Date(2026, 0, 1), new Date(2026, 0, 2))).toBe(false);
  });
});
