import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

export function ShowcaseExample() {
  return (
    <ShowcaseRows>
      <ShowcaseRow label="Actions menu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="outline" size="sm">
              <span className="text-sm font-semibold">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Habitat</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Export layout</DropdownMenuItem>
            <DropdownMenuItem>Duplicate terrarium</DropdownMenuItem>
            <DropdownMenuItem disabled>Archive (disabled)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseRow>
      <ShowcaseRow label="Checkbox & radio items">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="glass-thick" size="sm">
              <span className="text-sm font-semibold">Options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuCheckboxItem checked>Show humidity</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Show UV index</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="metric">
              <DropdownMenuRadioItem value="metric">Metric</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="imperial">Imperial</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
