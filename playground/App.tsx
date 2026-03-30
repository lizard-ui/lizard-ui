import { BackgroundPattern, Badge, Button, GitHubFooter } from 'lizard-ui';
import { AppearanceToggle } from './AppearanceToggle';
import { HERO_TERRARIUM } from './heroTerrarium';
import { MainLayout } from './MainLayout';
import { MainPageContent } from './MainPageContent';
import { PAGE_MENU_ITEMS } from './menu-items';
import { ThemeSelect } from './ThemeSelect';
import { useTheme } from './ThemeProvider';

export default function App() {
  const { resolvedAppearance } = useTheme();
  const heroSrc = HERO_TERRARIUM[resolvedAppearance];

  return (
    <MainLayout
      background={<BackgroundPattern variant="meshGrid" />}
      className="min-h-screen"
      menuItems={PAGE_MENU_ITEMS}
      menuTitle="Navigate"
      menuBadge={<Badge variant="muted">v0.0.1</Badge>}
      headerActions={
        <>
          <AppearanceToggle />
          <ThemeSelect />
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/lizard-ui/lizard-ui" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </>
      }
      headerNav={
        <nav className="flex items-center gap-1" aria-label="Primary">
          <Button variant="ghost" size="sm" asChild>
            <a href="#docs">Docs</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#components">Components</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#install">Install</a>
          </Button>
        </nav>
      }
      logo={
        <a href="#hero" className="flex items-center gap-2 truncate font-semibold text-foreground">
          <img
            src={heroSrc}
            alt="Lizard UI"
            className="h-9 w-9 shrink-0 rounded-lg border border-border object-cover shadow-md"
            width={36}
            height={36}
          />
          Lizard UI
        </a>
      }
      footerChildren={
        <>
          <GitHubFooter className="border-t-0" />
        </>
      }
    >
      <MainPageContent />
    </MainLayout>
  );
}
