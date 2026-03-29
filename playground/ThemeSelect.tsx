import { THEMES, THEME_LABELS, type ThemeName } from './theme-config';
import { useTheme } from './ThemeProvider';

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  return (
    <label className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="hidden sm:inline">Theme</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeName)}
        className="rounded-md border border-input bg-background px-2 py-1.5 text-sm font-medium text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {THEMES.map((t) => (
          <option key={t} value={t}>
            {THEME_LABELS[t]}
          </option>
        ))}
      </select>
    </label>
  );
}
