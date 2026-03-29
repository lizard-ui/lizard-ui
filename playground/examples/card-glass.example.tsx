import { Card, CardContent } from 'lizard-ui';

export function CardGlassExample() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card variant="glass">
        <CardContent className="p-5 text-foreground">
          <h3 className="text-base font-semibold">Glass (neutral)</h3>
          <p className="text-sm text-muted-foreground">Frosted panel — no primary/secondary tint.</p>
        </CardContent>
      </Card>
      <Card variant="glassPrimary">
        <CardContent className="p-5 text-foreground">
          <h3 className="text-base font-semibold">Glass primary</h3>
          <p className="text-sm text-muted-foreground">Uses current theme primary/secondary hues.</p>
        </CardContent>
      </Card>
    </div>
  );
}
