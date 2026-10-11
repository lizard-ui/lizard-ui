import { Tabs, TabsContent, TabsList, TabsTrigger } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Default" className="items-stretch">
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sensors">Sensors</TabsTrigger>
            <TabsTrigger value="logs" disabled>Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
            Overview content — switch tabs to explore.
          </TabsContent>
          <TabsContent value="sensors" className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
            Sensor readings and thresholds.
          </TabsContent>
          <TabsContent value="logs" className="rounded-lg border border-border p-4 text-sm text-muted-foreground">
            Logs (disabled trigger).
          </TabsContent>
        </Tabs>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
