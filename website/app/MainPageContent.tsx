import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  canonicalVariantLabel,
  useTheme,
  CodeDisplayCard,
} from 'lizard-ui';
import { InstallSection } from './components/InstallSection';
import { HERO_TERRARIUM } from './heroTerrarium';
import { COMPONENT_SHOWCASES } from './showcase-registry';

const cardDemoByTint = {
  default: 'glass-thick',
  primary: 'glass-primary-thick',
  secondary: 'glass-secondary-thick',
} as const;

const buttonDemoByTint = {
  default: 'glass-thick',
  primary: 'glass-primary-thick',
  secondary: 'glass-secondary-thick',
} as const;

export function MainPageContent() {
  const { resolvedAppearance } = useTheme();
  const heroSrc = HERO_TERRARIUM[resolvedAppearance];

  return (
    <>
      <section id="hero" className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.25)]" />
              React UI kit · Radix primitives · 23 themes
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Theme-aware components for modern React apps
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
              Forms, overlays, layout chrome, and glass surfaces in one library. Hyphen token variants stay order-free — e.g.{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glass-thin-secondary</code> and{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glass-secondary-thin</code> both resolve to{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                {canonicalVariantLabel('glass-secondary-thin')}
              </code>
              . Drop in <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">ThemeProvider</code>, import{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">lizard-ui/styles/themes.css</code>, and build with Tailwind.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="glass-primary-thick" asChild>
                <a href="#install">
                  <span className="text-sm font-semibold">Get started</span>
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#components">
                  <span className="text-sm font-semibold text-foreground">View components</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md animate-[float_7s_ease-in-out_infinite] rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/50 to-primary/20 p-1 shadow-xl [@media(prefers-reduced-motion:reduce)]:animate-none">
              <img
                src={heroSrc}
                alt="Lizard UI artwork"
                className="h-auto w-full rounded-[1.35rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="relative z-10 border-t border-border/80 bg-background/50 py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Documentation</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Set <code className="rounded bg-muted px-1 font-mono text-sm">data-theme</code> on{' '}
            <code className="rounded bg-muted px-1 font-mono text-sm">&lt;html&gt;</code> (see{' '}
            <code className="rounded bg-muted px-1 font-mono text-sm">lizard-ui/styles/themes.css</code>). Include{' '}
            <code className="rounded bg-muted px-1 font-mono text-sm">lizard-ui</code> in{' '}
            <code className="rounded bg-muted px-1 font-mono text-sm">tailwind.content</code> so glass utilities compile.
          </p>
          <div className="mt-6">
            <Button variant="link" size="sm" asChild>
              <a href="#/docs">
                <span className="text-sm font-semibold">{'View more -->'}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="install" className="relative z-10 border-t border-border/80 py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Installation</h2>
          <p className="mt-2 text-muted-foreground">Install the package with React; Tailwind + theme CSS live in your app.</p>
          <InstallSection />
        </div>
      </section>

      <section id="components" className="relative z-10 border-t border-border/80 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Components</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Each card shows <strong className="font-medium text-foreground">variants and states</strong> (like Button:
            presets, glass, sizes, loading, disabled). Toggle <strong className="font-medium text-foreground">Preview</strong>{' '}
            vs <strong className="font-medium text-foreground">Code</strong> for copy-pasteable examples.
          </p>

          <div className="mt-10 space-y-14">
            {COMPONENT_SHOWCASES.map(({ id, title, filename, code, Preview }) => (
              <article key={id} id={id}>
                <CodeDisplayCard title={title} filename={filename} code={code} preview={<Preview />} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-border/80 py-12" aria-labelledby="tint-matrix">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 id="tint-matrix" className="text-xl font-bold text-foreground">
            Glass variants
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Neutral vs primary vs secondary — same hyphen-token API, driven by{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">data-theme</code>.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {(['default', 'primary', 'secondary'] as const).map((tint) => (
              <Card key={tint}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                    {canonicalVariantLabel(cardDemoByTint[tint])}
                  </CardTitle>
                  <CardDescription>Card + Button</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Card variant={cardDemoByTint[tint]}>
                    <CardContent className="p-4 text-sm text-foreground">
                      <p className="font-medium">Surface</p>
                      <p className="text-muted-foreground">Sample copy</p>
                    </CardContent>
                  </Card>
                  <div className="flex justify-center">
                    <Button type="button" variant={buttonDemoByTint[tint]} onClick={() => {}}>
                      <span className="text-sm font-semibold">Button</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </>
  );
}
