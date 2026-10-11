import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Single (collapsible)" className="items-stretch">
        <Accordion type="single" collapsible className="w-full max-w-md rounded-lg border border-border px-4">
          <AccordionItem value="one">
            <AccordionTrigger>What ships in lizard-ui?</AccordionTrigger>
            <AccordionContent>Glass primitives, forms, overlays, and calendar helpers.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>Do I need Tailwind?</AccordionTrigger>
            <AccordionContent>Recommended for glass utilities; import themes CSS from the package.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ShowcaseRow>
      <ShowcaseRow label="Multiple open" className="items-stretch">
        <Accordion type="multiple" className="w-full max-w-md rounded-lg border border-border px-4">
          <AccordionItem value="a">
            <AccordionTrigger>Misting</AccordionTrigger>
            <AccordionContent>08:00 and 18:00 by default.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Lighting</AccordionTrigger>
            <AccordionContent>Follow seasonal curves from your theme.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
