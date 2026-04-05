import { useEffect, useState } from 'react';
import { MarkdownRenderer } from 'lizard-ui';

/**
 * All markdown files in docs/ — loaded as raw strings at build time.
 * Paths are relative to this file (playground/DocsPage.tsx → ../docs/).
 */
const DOC_MODULES = import.meta.glob('../../docs/**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>;

const GLOB_PREFIX = '../../docs/';

function normalizePath(path: string): string {
  const parts = path.split('/');
  const result: string[] = [];
  for (const part of parts) {
    if (part === '' || part === '.') continue;
    if (part === '..') result.pop();
    else result.push(part);
  }
  return result.join('/');
}

/** '../docs/types/README.md' → 'types/README.md' */
function globKeyToDocPath(key: string): string {
  return key.startsWith(GLOB_PREFIX) ? key.slice(GLOB_PREFIX.length) : key;
}

/** 'types/README.md' → '../docs/types/README.md' */
function docPathToGlobKey(docPath: string): string {
  return GLOB_PREFIX + docPath;
}

/** 'README.md' → '#/docs'  |  'types/README.md' → '#/docs/types' */
function docPathToHash(docPath: string): string {
  if (docPath === 'README.md') return '#/docs';
  return '#/docs/' + docPath.replace('/README.md', '');
}

/** '#/docs' → 'README.md'  |  '#/docs/types' → 'types/README.md' */
export function hashToDocPath(hash: string): string {
  const stripped = hash.replace(/^#\/docs\/?/, '');
  return stripped ? `${stripped}/README.md` : 'README.md';
}

/** Resolve a relative markdown link against the current doc path. */
function resolveRelativeLink(currentDocPath: string, href: string): string | null {
  if (!href.endsWith('.md')) return null;
  const dir = currentDocPath.split('/').slice(0, -1).join('/');
  const combined = dir ? `${dir}/${href}` : href;
  return normalizePath(combined);
}

type Props = {
  /** Initial doc path derived from the URL hash, e.g. 'types/README.md'. */
  initialDocPath: string;
};

export function DocsPage({ initialDocPath }: Props) {
  const [docPath, setDocPath] = useState(initialDocPath);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sync with external hash changes (browser back/forward, sidebar links)
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/docs')) {
        setDocPath(hashToDocPath(hash));
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Load the markdown file whenever docPath changes
  useEffect(() => {
    const key = docPathToGlobKey(docPath);
    const loader = DOC_MODULES[key];
    if (!loader) {
      setError(`Doc not found: ${docPath}`);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    loader()
      .then((raw) => {
        setContent(raw);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
      })
      .catch(() => {
        setError('Failed to load this page.');
        setLoading(false);
      });
  }, [docPath]);

  const handleNavigate = (href: string) => {
    const resolved = resolveRelativeLink(docPath, href);
    if (!resolved) return;
    const globKey = docPathToGlobKey(resolved);
    if (!DOC_MODULES[globKey]) return;
    const hash = docPathToHash(resolved);
    window.location.hash = hash;
    setDocPath(resolved);
  };

  // Breadcrumb label from path
  const breadcrumb = docPath === 'README.md'
    ? 'Documentation'
    : globKeyToDocPath(docPathToGlobKey(docPath))
        .replace('/README.md', '')
        .split('/')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' / ');

  return (
    <div className="relative z-10 mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <a
          href="#"
          className="hover:text-foreground transition-colors"
          onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
        >
          Playground
        </a>
        <span>/</span>
        {docPath !== 'README.md' ? (
          <>
            <a
              href="#/docs"
              className="hover:text-foreground transition-colors"
              onClick={(e) => { e.preventDefault(); window.location.hash = '#/docs'; }}
            >
              Documentation
            </a>
            <span>/</span>
          </>
        ) : null}
        <span className="text-foreground font-medium">{breadcrumb}</span>
      </div>

      {/* Content */}
      {loading ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-8 w-2/3 rounded-lg bg-muted" />
          <div className="h-4 w-full rounded bg-muted/60" />
          <div className="h-4 w-5/6 rounded bg-muted/60" />
          <div className="h-4 w-4/5 rounded bg-muted/60" />
        </div>
      ) : error ? (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-6 text-sm text-destructive">
          {error}
        </div>
      ) : (
        <MarkdownRenderer content={content} onNavigate={handleNavigate} />
      )}
    </div>
  );
}
