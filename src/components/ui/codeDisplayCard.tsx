import * as React from 'react';
import { cn } from '../../utils/cn';
import { highlightTsxTheme } from '../../utils/tsxHighlight';
import { Card } from './card';

type Tab = 'preview' | 'code';

export type CodeDisplayCardProps = {
  title: string;
  filename: string;
  /** Raw TSX source for the code tab. */
  code: string;
  /** Preview panel (component demo). */
  preview: React.ReactNode;
  /** Initial tab */
  defaultTab?: Tab;
};

const tabBtn =
  'rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

/** Showcase shell: outer `Card` is `glass-thin`; header strip is a nested `Card` with `glass-thick`. */
export function CodeDisplayCard({ title, filename, code, preview, defaultTab = 'preview' }: CodeDisplayCardProps) {
  const [tab, setTab] = React.useState<Tab>(defaultTab);

  return (
    <Card variant="glass-thin" className="overflow-hidden p-0 shadow-sm">
      <Card
        variant="glass-thick"
        className={cn(
          'rounded-t-xl rounded-b-none border-x-0 border-t-0 shadow-none',
          'border-b border-border/35',
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">{filename}</p>
          </div>
          <div
            className="flex gap-1 rounded-lg border border-border/50 bg-background/35 p-0.5 backdrop-blur-sm"
            role="tablist"
            aria-label="View mode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'preview'}
              className={cn(
                tabBtn,
                tab === 'preview'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
              onClick={() => setTab('preview')}
            >
              Preview
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'code'}
              className={cn(
                tabBtn,
                tab === 'code' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
              )}
              onClick={() => setTab('code')}
            >
              Code
            </button>
          </div>
        </div>
      </Card>
      <div className="relative min-h-[12rem]">
        {tab === 'preview' ? (
          <div className="p-6 md:p-8">{preview}</div>
        ) : (
          <div className="border-t border-border/25 bg-muted/15">
            <pre className="max-h-[min(32rem,75vh)] overflow-x-auto overflow-y-auto p-4 text-[0.8125rem] leading-relaxed">
              <code className="whitespace-pre font-mono">{highlightTsxTheme(code)}</code>
            </pre>
          </div>
        )}
      </div>
    </Card>
  );
}
