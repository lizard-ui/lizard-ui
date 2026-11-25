import type { ErrorInfo, ReactNode } from 'react';

export type ErrorBoundaryLabels = {
  title: string;
  description: string;
  reload: string;
  tryAgain: string;
  showDetails: string;
  hideDetails: string;
};

export const DEFAULT_ERROR_BOUNDARY_LABELS: ErrorBoundaryLabels = {
  title: 'Something went wrong',
  description: 'An unexpected error occurred. Please try refreshing the page.',
  reload: 'Reload page',
  tryAgain: 'Try again',
  showDetails: 'Show details',
  hideDetails: 'Hide details',
};

export type ErrorBoundaryProps = {
  children: ReactNode;
  /** Replace the default themed fallback UI entirely. */
  fallback?: ReactNode;
  /** Override default English copy (no built-in i18n). */
  labels?: Partial<ErrorBoundaryLabels>;
  /** Called after an error is caught (e.g. send to observability). */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** When true, show expandable stack details in non-production builds. */
  showDetailsInDevelopment?: boolean;
  /** Center in the viewport (`min-h-screen`); set false when nesting in a layout region. */
  fullScreen?: boolean;
  className?: string;
  /** Invoked when the user clicks “Try again” (before internal state reset). */
  onReset?: () => void;
};

export type ErrorBoundaryFallbackProps = {
  error: Error;
  errorInfo: ErrorInfo | null;
  labels: ErrorBoundaryLabels;
  detailsOpen: boolean;
  showDevDetails: boolean;
  onReload: () => void;
  onReset: () => void;
  onToggleDetails: () => void;
  fullScreen?: boolean;
  className?: string;
  /** Shows the default `Loader` on the reload action (e.g. while `location.reload()` is pending). */
  reloadLoading?: boolean;
};
