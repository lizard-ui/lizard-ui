import { GitHubFooter } from 'lizard-ui';

export function ShowcaseExample() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
      <GitHubFooter>
        <span className="text-xs text-muted-foreground">Star the repo to support the project</span>
      </GitHubFooter>
    </div>
  );
}
