import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'lizard-ui';
import { CopyInstallButton, INSTALL } from './CopyInstallButton';
import { CodeBlock } from './CodeBlock';
import buttonGlassRaw from './examples/button-glass.example.tsx?raw';
import cardGlassRaw from './examples/card-glass.example.tsx?raw';
import { ButtonGlassExample } from './examples/button-glass.example';
import { CardGlassExample } from './examples/card-glass.example';

const cardVariantByTint = {
  default: 'glass' as const,
  primary: 'glassPrimary' as const,
  secondary: 'glassSecondary' as const,
};

const buttonVariantByTint = {
  default: 'outline' as const,
  primary: 'glassPrimary' as const,
  secondary: 'glassSecondary' as const,
};

export function MainPageContent() {
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
              Glass styling is pure Tailwind: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">Card</code>{' '}
              uses <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glass</code>,{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glassPrimary</code>,{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glassSecondary</code>;{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">Button</code> adds shadcn{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">outline</code> (gradient border) plus{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glassPrimary</code> /{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">glassSecondary</code> pills — all driven by{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">data-theme</code> tokens.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant={buttonVariantByTint.primary} asChild>
                <a href="#install">
                  <span className="text-sm font-semibold text-foreground">Get started</span>
                </a>
              </Button>
              <Button variant={buttonVariantByTint.default} asChild>
                <a href="#components">
                  <span className="text-sm font-semibold text-foreground">View components</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md animate-[float_7s_ease-in-out_infinite] rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/50 to-primary/20 p-1 shadow-xl [@media(prefers-reduced-motion:reduce)]:animate-none">
              <img
                src="/assets/hero-terrarium.png"
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
            Examples below mirror the source files — loaded with Vite{' '}
            <code className="rounded bg-muted px-1 font-mono text-sm">?raw</code>.
          </p>

          <article className="mt-10 space-y-4" id="card-glass">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Card (glass)</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Use <code className="rounded bg-muted px-1 font-mono text-xs">variant=&quot;glass&quot;</code>,{' '}
                <code className="rounded bg-muted px-1 font-mono text-xs">glassPrimary</code>, or{' '}
                <code className="rounded bg-muted px-1 font-mono text-xs">glassSecondary</code> for frosted panels.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-muted/80 via-background to-muted/40 p-6 shadow-inner">
              <CardGlassExample />
            </div>
            <CodeBlock filename="card-glass.example.tsx">{cardGlassRaw}</CodeBlock>
          </article>

          <article className="mt-14 space-y-4" id="button-glass">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Button (glass)</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                <code className="rounded bg-muted px-1 font-mono text-xs">outline</code> uses a theme gradient on the border
                only; <code className="rounded bg-muted px-1 font-mono text-xs">glassPrimary</code> /{' '}
                <code className="rounded bg-muted px-1 font-mono text-xs">glassSecondary</code> are full glass pills.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-muted/80 via-background to-muted/40 p-8 shadow-inner">
              <ButtonGlassExample />
            </div>
            <CodeBlock filename="button-glass.example.tsx">{buttonGlassRaw}</CodeBlock>
          </article>
        </div>
      </section>

      <section className="relative z-10 border-t border-border/80 py-12" aria-labelledby="tint-matrix">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 id="tint-matrix" className="text-xl font-bold text-foreground">
            Glass variants
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Neutral vs primary vs secondary — same Card and Button API, theme from{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">data-theme</code>.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {(['default', 'primary', 'secondary'] as const).map((tint) => (
              <Card key={tint}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                    {tint === 'default' ? 'neutral' : tint === 'primary' ? 'glassPrimary' : 'glassSecondary'}
                  </CardTitle>
                  <CardDescription>Card + Button</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Card variant={cardVariantByTint[tint]}>
                    <CardContent className="p-4 text-sm text-foreground">
                      <p className="font-medium">Surface</p>
                      <p className="text-muted-foreground">Sample copy</p>
                    </CardContent>
                  </Card>
                  <div className="flex justify-center">
                    <Button type="button" variant={buttonVariantByTint[tint]} onClick={() => {}}>
                      <span className="text-sm font-semibold text-foreground">Button</span>
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
