import { Moon, Sun } from 'lucide-react';
import { Button, useTheme } from 'lizard-ui';

/** Two-state light/dark control: moon → switch to dark, sun → switch to light. */
export function AppearanceToggle() {
  const { resolvedAppearance, setColorScheme } = useTheme();
  const isDark = resolvedAppearance === 'dark';

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="shrink-0"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
