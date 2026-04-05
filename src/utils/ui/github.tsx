/**
 * Resolves GitHub owner/repo for links and the REST API.
 *
 * Priority:
 * 1. `VITE_GITHUB_REPO` — full URL, e.g. https://github.com/you/email-signature-editor
 * 2. `VITE_GITHUB_OWNER` + `VITE_GITHUB_REPO_NAME`
 * 3. GitHub Pages project URL: https://&lt;owner&gt;.github.io/&lt;repo&gt;/…
 * 4. Fallback (upstream) — change defaults if you fork without env or GH Pages.
 */

export interface GitHubRepoInfo {
  owner: string;
  repo: string;
  repoUrl: string;
  apiUrl: string;
}

const DEFAULT_OWNER = 'lizard-ui';
const DEFAULT_REPO = 'lizard-ui';

function parseGithubRepoUrl(url: string): { owner: string; repo: string } | null {
  try {
    const u = new URL(url.trim());
    if (u.hostname !== 'github.com') return null;
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1] };
    }
  } catch {
    /* ignore */
  }
  return null;
}

function inferFromGithubPages(): { owner: string; repo: string } | null {
  if (typeof window === 'undefined') return null;
  const { hostname, pathname } = window.location;
  const m = hostname.match(/^([^.]+)\.github\.io$/i);
  if (!m) return null;
  const owner = m[1];
  const segments = pathname.split('/').filter(Boolean);
  const repo = segments[0];
  if (!repo) return null;
  return { owner, repo };
}

function buildInfo(owner: string, repo: string): GitHubRepoInfo {
  return {
    owner,
    repo,
    repoUrl: `https://github.com/${owner}/${repo}`,
    apiUrl: `https://api.github.com/repos/${owner}/${repo}`,
  };
}

/** Shields JSON — CORS-friendly fallback when the GitHub REST call fails in the browser. */
export function getGitHubStarsShieldsJsonUrl(owner: string, repo: string): string {
  return `https://img.shields.io/github/stars/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}.json`;
}

export function getGitHubRepoInfo(): GitHubRepoInfo {
  const envFull = import.meta.env.VITE_GITHUB_REPO;
  if (typeof envFull === 'string' && envFull.trim()) {
    const parsed = parseGithubRepoUrl(envFull);
    if (parsed) return buildInfo(parsed.owner, parsed.repo);
  }

  const envOwner = import.meta.env.VITE_GITHUB_OWNER;
  const envRepo = import.meta.env.VITE_GITHUB_REPO_NAME;
  if (
    typeof envOwner === 'string' &&
    envOwner.trim() &&
    typeof envRepo === 'string' &&
    envRepo.trim()
  ) {
    return buildInfo(envOwner.trim(), envRepo.trim());
  }

  const inferred = inferFromGithubPages();
  if (inferred) return buildInfo(inferred.owner, inferred.repo);

  return buildInfo(DEFAULT_OWNER, DEFAULT_REPO);
}
