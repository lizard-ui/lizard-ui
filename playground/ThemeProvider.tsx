import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import {
  COLOR_SCHEMES,
  STORAGE_COLOR_SCHEME,
  STORAGE_THEME,
  THEMES,
  type ColorScheme,
  type ThemeName,
} from './theme-config';

type Ctx = {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
  colorScheme: ColorScheme;
  setColorScheme: (s: ColorScheme) => void;
  /** Effective light/dark after resolving `system` with `prefers-color-scheme`. */
  resolvedAppearance: 'light' | 'dark';
};

const ThemeContext = createContext<Ctx | null>(null);

function isThemeName(v: string | null): v is ThemeName {
  return v !== null && (THEMES as readonly string[]).includes(v);
}

function readInitialTheme(): ThemeName {
  if (typeof document === 'undefined') return 'lime';
  try {
    const stored = localStorage.getItem(STORAGE_THEME);
    if (isThemeName(stored)) return stored;
  } catch {
    /* ignore */
  }
  const t = document.documentElement.getAttribute('data-theme');
  if (isThemeName(t)) return t;
  return 'lime';
}

function readInitialColorScheme(): ColorScheme {
  if (typeof document === 'undefined') return 'system';
  try {
    const stored = localStorage.getItem(STORAGE_COLOR_SCHEME);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  } catch {
    /* ignore */
  }
  return 'system';
}

function resolveAppearance(scheme: ColorScheme): 'light' | 'dark' {
  if (scheme === 'system') {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return scheme;
}

function applyAppearanceToDocument(scheme: ColorScheme) {
  if (typeof document === 'undefined') return;
  const resolved = resolveAppearance(scheme);
  document.documentElement.classList.toggle('dark', resolved === 'dark');
  document.documentElement.style.colorScheme = resolved === 'dark' ? 'dark' : 'light';
}

function subscribeSystemDark(onChange: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getSystemDarkSnapshot() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getSystemDarkServerSnapshot() {
  return false;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(readInitialTheme);
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(readInitialColorScheme);
  const systemPrefersDark = useSyncExternalStore(
    subscribeSystemDark,
    getSystemDarkSnapshot,
    getSystemDarkServerSnapshot,
  );

  const setTheme = useCallback((t: ThemeName) => {
    setThemeState(t);
  }, []);

  const setColorScheme = useCallback((s: ColorScheme) => {
    if (!(COLOR_SCHEMES as readonly string[]).includes(s)) return;
    setColorSchemeState(s as ColorScheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_THEME, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    applyAppearanceToDocument(colorScheme);
    try {
      localStorage.setItem(STORAGE_COLOR_SCHEME, colorScheme);
    } catch {
      /* ignore */
    }
  }, [colorScheme]);

  useEffect(() => {
    if (colorScheme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyAppearanceToDocument('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [colorScheme]);

  const resolvedAppearance: 'light' | 'dark' = useMemo(
    () =>
      colorScheme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : colorScheme,
    [colorScheme, systemPrefersDark],
  );

  const value = useMemo(
    () => ({ theme, setTheme, colorScheme, setColorScheme, resolvedAppearance }),
    [theme, setTheme, colorScheme, setColorScheme, resolvedAppearance],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
