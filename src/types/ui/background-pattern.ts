import type * as React from 'react';

export type BackgroundPatternVariant = 'mesh' | 'grid' | 'meshGrid' | 'aurora';

export type BackgroundPatternPlacement = 'fixed' | 'absolute';

export type BackgroundPatternProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * `mesh` — soft radial mesh + vertical wash.
   * `grid` — masked circuit grid.
   * `meshGrid` — mesh then grid (default).
   * `aurora` — soft dual blobs.
   */
  variant?: BackgroundPatternVariant;
  placement?: BackgroundPatternPlacement;
  children?: React.ReactNode;
};
