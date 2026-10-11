import { Alert, AlertDescription, AlertTitle } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Default" className="items-stretch">
        <Alert className="max-w-md text-left">
          <AlertTitle>Stable climate</AlertTitle>
          <AlertDescription>Sensors report nominal humidity for the last 24 hours.</AlertDescription>
        </Alert>
      </ShowcaseRow>
      <ShowcaseRow label="Destructive" className="items-stretch">
        <Alert variant="destructive" className="max-w-md text-left">
          <AlertTitle>Sensor fault</AlertTitle>
          <AlertDescription>Humidity probe returned an out-of-range reading. Check wiring.</AlertDescription>
        </Alert>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
