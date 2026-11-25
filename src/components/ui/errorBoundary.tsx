import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Component, type ErrorInfo, type ReactNode } from 'react';
import type {
  ErrorBoundaryFallbackProps,
  ErrorBoundaryLabels,
  ErrorBoundaryProps,
} from '../../types/ui/errorBoundary';
import { DEFAULT_ERROR_BOUNDARY_LABELS } from '../../types/ui/errorBoundary';
import { cn } from '../../utils/cn';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

function isDevelopmentBuild(): boolean {
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
    return false;
  }
  return true;
}

/** Default fallback panel — usable on its own or via `ErrorBoundary` props. */
export function ErrorBoundaryFallback({
  error,
  errorInfo,
  labels,
  detailsOpen,
  showDevDetails,
  onReload,
  onReset,
  onToggleDetails,
  fullScreen = true,
  className,
  reloadLoading = false,
}: ErrorBoundaryFallbackProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex flex-col items-center justify-center bg-background p-6',
        fullScreen && 'min-h-screen',
        className,
      )}
    >
      <Card className="mx-auto w-full max-w-md text-center">
        <CardHeader className="items-center space-y-4">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertTriangle className="size-12 text-destructive" aria-hidden />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl">{labels.title}</CardTitle>
            <CardDescription className="text-base">{labels.description}</CardDescription>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" loading={reloadLoading} onClick={onReload}>
            {!reloadLoading ? <RefreshCw className="size-4 shrink-0" aria-hidden /> : null}
            {labels.reload}
          </Button>
          <Button type="button" variant="outline" onClick={onReset}>
            {labels.tryAgain}
          </Button>
        </CardFooter>
        {showDevDetails && errorInfo && (
          <CardContent className="pt-0">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-muted-foreground"
              onClick={onToggleDetails}
            >
              {detailsOpen ? labels.hideDetails : labels.showDetails}
            </Button>
            {detailsOpen && (
              <pre className="mt-4 max-h-48 overflow-auto rounded-md border border-border bg-muted p-4 text-left text-xs text-foreground">
                {error.toString()}
                {'\n\n'}
                {errorInfo.componentStack}
              </pre>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  detailsOpen: boolean;
  reloadLoading: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      detailsOpen: false,
      reloadLoading: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    this.props.onError?.(error, errorInfo);
    if (isDevelopmentBuild()) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  private resolveLabels(): ErrorBoundaryLabels {
    return { ...DEFAULT_ERROR_BOUNDARY_LABELS, ...this.props.labels };
  }

  handleReload = () => {
    this.setState({ reloadLoading: true });
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  handleReset = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null, errorInfo: null, detailsOpen: false });
  };

  toggleDetails = () => {
    this.setState((prev) => ({ detailsOpen: !prev.detailsOpen }));
  };

  render(): ReactNode {
    const { hasError, error, errorInfo, detailsOpen } = this.state;
    if (hasError && error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const showDevDetails =
        this.props.showDetailsInDevelopment ?? isDevelopmentBuild();

      return (
        <ErrorBoundaryFallback
          error={error}
          errorInfo={errorInfo}
          labels={this.resolveLabels()}
          detailsOpen={detailsOpen}
          showDevDetails={showDevDetails}
          onReload={this.handleReload}
          onReset={this.handleReset}
          onToggleDetails={this.toggleDetails}
          fullScreen={this.props.fullScreen ?? true}
          className={this.props.className}
          reloadLoading={this.state.reloadLoading}
        />
      );
    }

    return this.props.children;
  }
}
