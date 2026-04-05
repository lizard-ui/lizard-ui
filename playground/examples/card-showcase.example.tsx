import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'lizard-ui';

export function CardShowcaseExample() {
  return (
    <div className="mx-auto max-w-md">
      <Card variant="glass-primary-thin">
        <CardHeader>
          <CardTitle className="text-lg">Project terrarium</CardTitle>
          <CardDescription>Hyphen variants are order-free — try glass-thin-primary on the Card.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-foreground">
          <p>Humidity and light curves follow your theme tokens.</p>
          <p className="font-mono text-xs text-muted-foreground">variant=&quot;glass-primary-thin&quot;</p>
        </CardContent>
      </Card>
    </div>
  );
}
