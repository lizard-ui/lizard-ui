import { Footer } from 'lizard-ui';

export function ShowcaseExample() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
      <Footer>
        <p>© {new Date().getFullYear()} Lizard UI. MIT License.</p>
      </Footer>
    </div>
  );
}
