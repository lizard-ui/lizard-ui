import { Avatar, AvatarFallback, AvatarImage } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Image + fallback">
        <Avatar>
          <AvatarImage src="https://github.com/lizard-ui.png" alt="Lizard UI" />
          <AvatarFallback>LZ</AvatarFallback>
        </Avatar>
      </ShowcaseRow>
      <ShowcaseRow label="Fallback only">
        <Avatar>
          <AvatarFallback>GT</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
        </Avatar>
      </ShowcaseRow>
      <ShowcaseRow label="Broken image (shows fallback)">
        <Avatar>
          <AvatarImage src="https://example.invalid/missing.png" alt="Missing" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
