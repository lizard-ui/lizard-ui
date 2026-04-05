import React, { useEffect, useMemo, useState } from 'react';
import { Github, Star } from 'lucide-react';
import { cn } from '../../utils/cn';
import { getGitHubRepoInfo, getGitHubStarsShieldsJsonUrl } from '../../utils/ui/github';

function looksLikeStarCount(message: string): boolean {
  const t = message.trim();
  if (!t || /not found|invalid|error|none/i.test(t)) return false;
  return /^[\d.,]+[kKmM]?$/i.test(t.replace(/,/g, ''));
}

export type GitHubFooterProps = {
  className?: string;
  /** Override link; defaults to the resolved GitHub repo URL. */
  href?: string;
  /** Extra content beside the repo link (e.g. copyright). */
  children?: React.ReactNode;
  /**
   * Use a semantic `<footer>` for the outer bar. Default `false` avoids nested `<footer>` when
   * this block is already inside a layout `<footer>`.
   */
  asFooter?: boolean;
};

export function GitHubFooter({ className, href: hrefProp, children, asFooter = false }: GitHubFooterProps) {
  const [starDisplay, setStarDisplay] = useState<string | null>(null);
  const { repoUrl, apiUrl, owner, repo } = useMemo(() => getGitHubRepoInfo(), []);
  const href = hrefProp ?? repoUrl;

  useEffect(() => {
    let cancelled = false;

    async function loadStars() {
      try {
        const res = await fetch(apiUrl, {
          headers: { Accept: 'application/vnd.github+json' },
        });
        const data: { stargazers_count?: unknown } = await res.json();
        if (cancelled) return;
        if (res.ok && typeof data.stargazers_count === 'number') {
          setStarDisplay(data.stargazers_count.toLocaleString());
          return;
        }
      } catch {
        /* try shields */
      }

      try {
        const shieldsUrl = getGitHubStarsShieldsJsonUrl(owner, repo);
        const res = await fetch(shieldsUrl);
        const data: { message?: unknown } = await res.json();
        if (cancelled) return;
        if (res.ok && typeof data.message === 'string' && looksLikeStarCount(data.message)) {
          setStarDisplay(data.message.trim());
          return;
        }
      } catch {
        /* ignore */
      }

      if (!cancelled) {
        setStarDisplay('—');
      }
    }

    void loadStars();
    return () => {
      cancelled = true;
    };
  }, [apiUrl, owner, repo]);

  const barClassName = cn(
    'flex shrink-0 flex-wrap items-center justify-center gap-3 border-t border-border bg-background/80 py-3 backdrop-blur-sm',
    className,
  );

  const inner = (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:border-primary/30 hover:text-foreground hover:shadow-md"
        aria-label={`${owner} on GitHub`}
      >
        <Github className="size-4 transition-transform group-hover:scale-110" aria-hidden />
        <span>@{owner}</span>
        {starDisplay !== null ? (
          <span className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            <Star className="size-3 fill-current" aria-hidden />
            {starDisplay}
          </span>
        ) : null}
      </a>
      {children}
    </>
  );

  if (asFooter) {
    return <footer className={barClassName}>{inner}</footer>;
  }

  return (
    <div role="contentinfo" aria-label="GitHub repository" className={barClassName}>
      {inner}
    </div>
  );
}

GitHubFooter.displayName = 'GitHubFooter';
