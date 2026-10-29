import type { ComponentType } from 'react';
import { ButtonShowcaseExample } from '../examples/button-showcase.example';
import { CardShowcaseExample } from '../examples/card-showcase.example';
import { ShowcaseExample as AccordionShowcase } from '../examples/accordion-showcase.example';
import { ShowcaseExample as AlertShowcase } from '../examples/alert-showcase.example';
import { ShowcaseExample as AvatarShowcase } from '../examples/avatar-showcase.example';
import { ShowcaseExample as CalendarShowcase } from '../examples/calendar-showcase.example';
import { ShowcaseExample as CheckboxShowcase } from '../examples/checkbox-showcase.example';
import { ShowcaseExample as DatePickerShowcase } from '../examples/date-picker-showcase.example';
import { ShowcaseExample as DialogShowcase } from '../examples/dialog-showcase.example';
import { ShowcaseExample as DropdownMenuShowcase } from '../examples/dropdown-menu-showcase.example';
import { ShowcaseExample as ErrorBoundaryShowcase } from '../examples/error-boundary-showcase.example';
import { ShowcaseExample as InputShowcase } from '../examples/input-showcase.example';
import { ShowcaseExample as LabelShowcase } from '../examples/label-showcase.example';
import { ShowcaseExample as LoaderShowcase } from '../examples/loader-showcase.example';
import { ShowcaseExample as PopoverShowcase } from '../examples/popover-showcase.example';
import { ShowcaseExample as ProgressShowcase } from '../examples/progress-showcase.example';
import { ShowcaseExample as SelectShowcase } from '../examples/select-showcase.example';
import { ShowcaseExample as SeparatorShowcase } from '../examples/separator-showcase.example';
import { ShowcaseExample as SkeletonShowcase } from '../examples/skeleton-showcase.example';
import { ShowcaseExample as SwitchShowcase } from '../examples/switch-showcase.example';
import { ShowcaseExample as TabsShowcase } from '../examples/tabs-showcase.example';
import { ShowcaseExample as TextareaShowcase } from '../examples/textarea-showcase.example';
import { ShowcaseExample as TooltipShowcase } from '../examples/tooltip-showcase.example';
import { ShowcaseExample as BadgeShowcase } from '../examples/badge-showcase.example';
import { ShowcaseExample as HeaderShowcase } from '../examples/header-showcase.example';
import { ShowcaseExample as VerticalMenuShowcase } from '../examples/vertical-menu-showcase.example';
import { ShowcaseExample as SidebarShowcase } from '../examples/sidebar-showcase.example';
import { ShowcaseExample as FooterShowcase } from '../examples/footer-showcase.example';
import { ShowcaseExample as GitHubFooterShowcase } from '../examples/github-footer-showcase.example';
import buttonShowcaseRaw from '../examples/button-showcase.example.tsx?raw';
import cardShowcaseRaw from '../examples/card-showcase.example.tsx?raw';
import accordionShowcaseRaw from '../examples/accordion-showcase.example.tsx?raw';
import alertShowcaseRaw from '../examples/alert-showcase.example.tsx?raw';
import avatarShowcaseRaw from '../examples/avatar-showcase.example.tsx?raw';
import calendarShowcaseRaw from '../examples/calendar-showcase.example.tsx?raw';
import checkboxShowcaseRaw from '../examples/checkbox-showcase.example.tsx?raw';
import datePickerShowcaseRaw from '../examples/date-picker-showcase.example.tsx?raw';
import dialogShowcaseRaw from '../examples/dialog-showcase.example.tsx?raw';
import dropdownMenuShowcaseRaw from '../examples/dropdown-menu-showcase.example.tsx?raw';
import errorBoundaryShowcaseRaw from '../examples/error-boundary-showcase.example.tsx?raw';
import inputShowcaseRaw from '../examples/input-showcase.example.tsx?raw';
import labelShowcaseRaw from '../examples/label-showcase.example.tsx?raw';
import loaderShowcaseRaw from '../examples/loader-showcase.example.tsx?raw';
import popoverShowcaseRaw from '../examples/popover-showcase.example.tsx?raw';
import progressShowcaseRaw from '../examples/progress-showcase.example.tsx?raw';
import selectShowcaseRaw from '../examples/select-showcase.example.tsx?raw';
import separatorShowcaseRaw from '../examples/separator-showcase.example.tsx?raw';
import skeletonShowcaseRaw from '../examples/skeleton-showcase.example.tsx?raw';
import switchShowcaseRaw from '../examples/switch-showcase.example.tsx?raw';
import tabsShowcaseRaw from '../examples/tabs-showcase.example.tsx?raw';
import textareaShowcaseRaw from '../examples/textarea-showcase.example.tsx?raw';
import tooltipShowcaseRaw from '../examples/tooltip-showcase.example.tsx?raw';
import badgeShowcaseRaw from '../examples/badge-showcase.example.tsx?raw';
import headerShowcaseRaw from '../examples/header-showcase.example.tsx?raw';
import verticalMenuShowcaseRaw from '../examples/vertical-menu-showcase.example.tsx?raw';
import sidebarShowcaseRaw from '../examples/sidebar-showcase.example.tsx?raw';
import footerShowcaseRaw from '../examples/footer-showcase.example.tsx?raw';
import githubFooterShowcaseRaw from '../examples/github-footer-showcase.example.tsx?raw';

export type ComponentShowcase = {
  id: string;
  title: string;
  filename: string;
  code: string;
  Preview: ComponentType;
};

export const COMPONENT_SHOWCASES: ComponentShowcase[] = [
  { id: 'accordion-showcase', title: 'Accordion', filename: 'accordion-showcase.example.tsx', code: accordionShowcaseRaw, Preview: AccordionShowcase },
  { id: 'alert-showcase', title: 'Alert', filename: 'alert-showcase.example.tsx', code: alertShowcaseRaw, Preview: AlertShowcase },
  { id: 'avatar-showcase', title: 'Avatar', filename: 'avatar-showcase.example.tsx', code: avatarShowcaseRaw, Preview: AvatarShowcase },
  { id: 'badge-showcase', title: 'Badge', filename: 'badge-showcase.example.tsx', code: badgeShowcaseRaw, Preview: BadgeShowcase },
  { id: 'button-showcase', title: 'Button', filename: 'button-showcase.example.tsx', code: buttonShowcaseRaw, Preview: ButtonShowcaseExample },
  { id: 'calendar-showcase', title: 'Calendar', filename: 'calendar-showcase.example.tsx', code: calendarShowcaseRaw, Preview: CalendarShowcase },
  { id: 'card-showcase', title: 'Card', filename: 'card-showcase.example.tsx', code: cardShowcaseRaw, Preview: CardShowcaseExample },
  { id: 'checkbox-showcase', title: 'Checkbox', filename: 'checkbox-showcase.example.tsx', code: checkboxShowcaseRaw, Preview: CheckboxShowcase },
  { id: 'date-picker-showcase', title: 'DatePicker', filename: 'date-picker-showcase.example.tsx', code: datePickerShowcaseRaw, Preview: DatePickerShowcase },
  { id: 'dialog-showcase', title: 'Dialog', filename: 'dialog-showcase.example.tsx', code: dialogShowcaseRaw, Preview: DialogShowcase },
  { id: 'dropdown-menu-showcase', title: 'DropdownMenu', filename: 'dropdown-menu-showcase.example.tsx', code: dropdownMenuShowcaseRaw, Preview: DropdownMenuShowcase },
  { id: 'error-boundary-showcase', title: 'ErrorBoundary', filename: 'error-boundary-showcase.example.tsx', code: errorBoundaryShowcaseRaw, Preview: ErrorBoundaryShowcase },
  { id: 'footer-showcase', title: 'Footer', filename: 'footer-showcase.example.tsx', code: footerShowcaseRaw, Preview: FooterShowcase },
  { id: 'github-footer-showcase', title: 'GitHubFooter', filename: 'github-footer-showcase.example.tsx', code: githubFooterShowcaseRaw, Preview: GitHubFooterShowcase },
  { id: 'header-showcase', title: 'Header', filename: 'header-showcase.example.tsx', code: headerShowcaseRaw, Preview: HeaderShowcase },
  { id: 'input-showcase', title: 'Input', filename: 'input-showcase.example.tsx', code: inputShowcaseRaw, Preview: InputShowcase },
  { id: 'label-showcase', title: 'Label', filename: 'label-showcase.example.tsx', code: labelShowcaseRaw, Preview: LabelShowcase },
  { id: 'loader-showcase', title: 'Loader', filename: 'loader-showcase.example.tsx', code: loaderShowcaseRaw, Preview: LoaderShowcase },
  { id: 'popover-showcase', title: 'Popover', filename: 'popover-showcase.example.tsx', code: popoverShowcaseRaw, Preview: PopoverShowcase },
  { id: 'progress-showcase', title: 'Progress', filename: 'progress-showcase.example.tsx', code: progressShowcaseRaw, Preview: ProgressShowcase },
  { id: 'select-showcase', title: 'Select', filename: 'select-showcase.example.tsx', code: selectShowcaseRaw, Preview: SelectShowcase },
  { id: 'separator-showcase', title: 'Separator', filename: 'separator-showcase.example.tsx', code: separatorShowcaseRaw, Preview: SeparatorShowcase },
  { id: 'sidebar-showcase', title: 'Sidebar', filename: 'sidebar-showcase.example.tsx', code: sidebarShowcaseRaw, Preview: SidebarShowcase },
  { id: 'skeleton-showcase', title: 'Skeleton', filename: 'skeleton-showcase.example.tsx', code: skeletonShowcaseRaw, Preview: SkeletonShowcase },
  { id: 'switch-showcase', title: 'Switch', filename: 'switch-showcase.example.tsx', code: switchShowcaseRaw, Preview: SwitchShowcase },
  { id: 'tabs-showcase', title: 'Tabs', filename: 'tabs-showcase.example.tsx', code: tabsShowcaseRaw, Preview: TabsShowcase },
  { id: 'textarea-showcase', title: 'Textarea', filename: 'textarea-showcase.example.tsx', code: textareaShowcaseRaw, Preview: TextareaShowcase },
  { id: 'tooltip-showcase', title: 'Tooltip', filename: 'tooltip-showcase.example.tsx', code: tooltipShowcaseRaw, Preview: TooltipShowcase },
  { id: 'vertical-menu-showcase', title: 'VerticalMenu', filename: 'vertical-menu-showcase.example.tsx', code: verticalMenuShowcaseRaw, Preview: VerticalMenuShowcase },
];

export const SHOWCASE_MENU_ITEMS = COMPONENT_SHOWCASES.map(({ id, title }) => ({
  label: title,
  href: `#${id}`,
}));
