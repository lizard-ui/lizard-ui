type CodeBlockProps = {
  filename: string;
  /** Source code — use `whitespace-pre` so indentation displays like shadcn/ui. */
  children: string;
  lang?: string;
};

/**
 * Docs-style code panel (shadcn-like): filename bar + scrollable monospace block.
 */
export function CodeBlock({ filename, children, lang = 'tsx' }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-muted/40 shadow-sm">
      <div className="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-2 font-mono text-xs text-muted-foreground">
        <span className="truncate">{filename}</span>
        <span className="shrink-0 opacity-80">{lang}</span>
      </div>
      <pre className="max-h-[min(28rem,70vh)] overflow-x-auto overflow-y-auto p-4 text-[0.8125rem] leading-relaxed">
        <code className="whitespace-pre font-mono text-foreground">{children}</code>
      </pre>
    </div>
  );
}
