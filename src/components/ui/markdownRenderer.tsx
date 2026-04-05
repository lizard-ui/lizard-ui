import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '../../utils/cn';

export type MarkdownRendererProps = {
  content: string;
  /** Called when a relative .md link is clicked — caller handles navigation. */
  onNavigate?: (href: string) => void;
};

export function MarkdownRenderer({ content, onNavigate }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-6 mt-2 text-3xl font-bold tracking-tight text-foreground">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-3 mt-10 border-b border-border pb-2 text-xl font-semibold text-foreground first:mt-2">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-2 mt-6 text-base font-semibold text-foreground">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="mb-2 mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-7 text-foreground/80">{children}</p>
        ),
        a: ({ href, children }) => {
          const isRelativeMd =
            href && href.endsWith('.md') && !href.startsWith('http') && !href.startsWith('#');
          if (isRelativeMd) {
            return (
              <button
                type="button"
                onClick={() => onNavigate?.(href!)}
                className="cursor-pointer text-primary underline underline-offset-4 hover:text-primary/70"
              >
                {children}
              </button>
            );
          }
          return (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noreferrer' : undefined}
              className="text-primary underline underline-offset-4 hover:text-primary/70"
            >
              {children}
            </a>
          );
        },
        code: ({ children, className }) => {
          const isBlock = Boolean(className?.startsWith('language-'));
          if (isBlock) {
            return (
              <code className={cn('font-mono text-sm leading-relaxed text-foreground/90', className)}>
                {children}
              </code>
            );
          }
          return (
            <code className="rounded border border-border/40 bg-muted/80 px-1.5 py-0.5 font-mono text-[0.82em] text-foreground">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="mb-6 overflow-x-auto rounded-lg border border-border bg-muted/60 p-4 text-sm">
            {children}
          </pre>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 list-disc space-y-1 pl-6 text-foreground/80">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 list-decimal space-y-1 pl-6 text-foreground/80">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-7">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-4 border-primary/40 pl-4 italic text-muted-foreground">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-8 border-border" />,
        table: ({ children }) => (
          <div className="mb-6 overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b border-border bg-muted/40">{children}</thead>
        ),
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => (
          <tr className="border-b border-border/50 last:border-0">{children}</tr>
        ),
        th: ({ children }) => (
          <th className="px-4 py-2.5 text-left font-semibold text-foreground">{children}</th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-2.5 text-foreground/80">{children}</td>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,
        img: ({ src, alt }) => (
          <img src={src} alt={alt ?? ''} className="my-4 max-w-full rounded-lg" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
