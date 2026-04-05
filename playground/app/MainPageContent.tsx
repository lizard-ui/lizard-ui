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
import { CopyInstallButton, INSTALL } from './components/CopyInstallButton';
import { HERO_TERRARIUM } from './heroTerrarium';
import cardShowcaseRaw from '../examples/card-showcase.example.tsx?raw';
import buttonShowcaseRaw from '../examples/button-showcase.example.tsx?raw';
import { CardShowcaseExample } from '../examples/card-showcase.example';
import { ButtonShowcaseExample } from '../examples/button-showcase.example';

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
              Eco-tech · Tailwind glass · 23 themes
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Nature meets precision glass
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
              Compose surfaces with hyphen tokens — e.g.{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glass-thin-secondary</code> and{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glass-secondary-thin</code> resolve the same (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                {canonicalVariantLabel('glass-secondary-thin')}
              </code>
              ). <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">Card</code> and{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">Button</code> share the same token rules;{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">solid</code> is the opaque baseline.
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
                alt="Lizard UI terrarium artwork"
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
            <code className="rounded bg-muted px-1 font-mono text-sm">playground/themes.css</code>). Include{' '}
            <code className="rounded bg-muted px-1 font-mono text-sm">lizard-ui</code> in{' '}
            <code className="rounded bg-muted px-1 font-mono text-sm">tailwind.content</code> so glass utilities compile.
          </p>
        </div>
      </section>

      <section id="install" className="relative z-10 border-t border-border/80 py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Installation</h2>
          <p className="mt-2 text-muted-foreground">Install the package with React; Tailwind + theme CSS live in your app.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div className="flex flex-1 items-center overflow-x-auto rounded-lg border border-border bg-muted/40 px-4 py-3 font-mono text-sm text-foreground">
              <code className="whitespace-pre">{INSTALL}</code>
            </div>
            <CopyInstallButton />
          </div>
        </div>
      </section>

      <section id="components" className="relative z-10 border-t border-border/80 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Components</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Toggle <strong className="font-medium text-foreground">Preview</strong> vs <strong className="font-medium text-foreground">Code</strong> — source
            loads with Vite <code className="rounded bg-muted px-1 font-mono text-sm">?raw</code>. Code uses theme-tinted syntax colors.
          </p>

          <div className="mt-10 space-y-14">
            <article id="card-showcase">
              <CodeDisplayCard
                title="Card"
                filename="card-showcase.example.tsx"
                code={cardShowcaseRaw}
                preview={<CardShowcaseExample />}
              />
            </article>

            <article id="button-showcase">
              <CodeDisplayCard
                title="Button"
                filename="button-showcase.example.tsx"
                code={buttonShowcaseRaw}
                preview={<ButtonShowcaseExample />}
              />
            </article>
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
