import type { LoaderSize, LoaderVariant } from '../../types/ui/loader';
import { cn } from '../cn';

export const LOADER_SIZE_MAP: Record<LoaderSize, string> = {
  sm: 'size-3',
  default: 'size-4',
  lg: 'size-6',
  xl: 'size-8',
};

export const LOADER_DOT_SIZE_MAP: Record<LoaderSize, string> = {
  sm: 'size-1',
  default: 'size-1.5',
  lg: 'size-2',
  xl: 'size-2.5',
};

export const LOADER_DOT_GAP_MAP: Record<LoaderSize, string> = {
  sm: 'gap-0.5',
  default: 'gap-1',
  lg: 'gap-1.5',
  xl: 'gap-2',
};

export const LOADER_BAR_SIZE_MAP: Record<LoaderSize, string> = {
  sm: 'h-2 w-0.5',
  default: 'h-3 w-0.5',
  lg: 'h-4 w-1',
  xl: 'h-5 w-1',
};

export const LOADER_BAR_GAP_MAP: Record<LoaderSize, string> = {
  sm: 'gap-0.5',
  default: 'gap-0.5',
  lg: 'gap-1',
  xl: 'gap-1',
};

export const LOADER_SPINNER_BASE = 'inline-block shrink-0 animate-spin text-current';

export const LOADER_RING_BASE =
  'inline-block shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent';

export const LOADER_DOTS_BASE = 'inline-flex shrink-0 items-center text-current';

export const LOADER_BARS_BASE = 'inline-flex shrink-0 items-center text-current';

export const LOADER_PULSE_BASE = 'inline-block shrink-0 rounded-full bg-current text-current animate-pulse';

export function loaderVariants(opts: {
  size?: LoaderSize;
  variant?: LoaderVariant;
  className?: string;
}): string {
  const { size = 'default', variant = 'spinner', className } = opts;

  if (variant === 'ring') {
    return cn(LOADER_RING_BASE, LOADER_SIZE_MAP[size], className);
  }

  if (variant === 'dots') {
    return cn(LOADER_DOTS_BASE, LOADER_DOT_GAP_MAP[size], className);
  }

  if (variant === 'bars') {
    return cn(LOADER_BARS_BASE, LOADER_BAR_GAP_MAP[size], className);
  }

  if (variant === 'pulse') {
    return cn(LOADER_PULSE_BASE, LOADER_SIZE_MAP[size], className);
  }

  return cn(LOADER_SPINNER_BASE, LOADER_SIZE_MAP[size], className);
}

export function loaderDotClass(size: LoaderSize = 'default'): string {
  return cn(LOADER_DOT_SIZE_MAP[size], 'rounded-full bg-current');
}

export function loaderBarClass(size: LoaderSize = 'default'): string {
  return cn(LOADER_BAR_SIZE_MAP[size], 'rounded-full bg-current');
}
