import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

function SampleDialog({ triggerVariant, triggerLabel }: { triggerVariant: 'outline' | 'glass-primary-thick' | 'destructive'; triggerLabel: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant={triggerVariant} size="sm">
          <span className="text-sm font-semibold">{triggerLabel}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm habitat reset</DialogTitle>
          <DialogDescription>This clears demo state only — not your npm install.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" variant="outline" size="sm">
            <span className="text-sm font-semibold">Cancel</span>
          </Button>
          <Button type="button" variant="glass-primary-thick" size="sm">
            <span className="text-sm font-semibold">Continue</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Trigger variants">
        <SampleDialog triggerVariant="outline" triggerLabel="Outline" />
        <SampleDialog triggerVariant="glass-primary-thick" triggerLabel="Glass primary" />
        <SampleDialog triggerVariant="destructive" triggerLabel="Destructive" />
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
