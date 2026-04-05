import { useEffect, useState } from 'react';
import { BackgroundPattern, Badge, Button, GitHubFooter, useTheme, ThemeSelect } from 'lizard-ui';
import { AppearanceToggle } from './components/AppearanceToggle';
import { DocsPage, hashToDocPath } from './DocsPage';
import { HERO_TERRARIUM } from './heroTerrarium';
import { MainLayout } from './MainLayout';
import { MainPageContent } from './MainPageContent';
import { DOCS_MENU_ITEMS, PAGE_MENU_ITEMS } from './menu-items';

function useIsDocsRoute() {
  const [isDocsRoute, setIsDocsRoute] = useState(
    () => window.location.hash.startsWith('#/docs'),
  );
  useEffect(() => {
    const handler = () => setIsDocsRoute(window.location.hash.startsWith('#/docs'));
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return isDocsRoute;
}

export default function App() {
  const { resolvedAppearance } = useTheme();
  const heroSrc = HERO_TERRARIUM[resolvedAppearance];
  const isDocsRoute = useIsDocsRoute();

  const initialDocPath = hashToDocPath(window.location.hash);

  return (
    <MainLayout
      background={<BackgroundPattern variant="meshGrid" />}
      className="min-h-screen"
      menuItems={isDocsRoute ? DOCS_MENU_ITEMS : PAGE_MENU_ITEMS}
      menuTitle={isDocsRoute ? 'Docs' : 'Navigate'}
      menuBadge={<Badge variant="muted">v0.0.2</Badge>}
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
            <a href="#/docs">Docs</a>
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
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
          className="flex items-center gap-2 truncate font-semibold text-foreground"
        >
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
      footerChildren={<GitHubFooter className="border-t-0" />}
    >
      {isDocsRoute ? (
        <DocsPage initialDocPath={initialDocPath} />
      ) : (
        <MainPageContent />
      )}
    </MainLayout>
  );
}
