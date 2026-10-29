import { useState, type ErrorInfo } from 'react';
import { DEFAULT_ERROR_BOUNDARY_LABELS, ErrorBoundaryFallback } from 'lizard-ui';
import { ShowcaseRow, ShowcaseRows } from './showcase-layout';

const DEMO_ERROR = new Error('Demo: terrarium humidity sensor unreachable');

const DEMO_ERROR_INFO: ErrorInfo = {
  componentStack: `
    at HumidityPanel (app/terrarium/page.tsx:42:11)
    at ErrorBoundary (lizard-ui/errorBoundary.tsx:161:5)
    at RootLayout (app/layout.tsx:18:7)`,
};

const DEMO_RELOAD_MS = 1800;

export function ShowcaseExample() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [reloadLoading, setReloadLoading] = useState(false);

  const handleDemoReload = () => {
    if (reloadLoading) return;
    setReloadLoading(true);
    window.setTimeout(() => setReloadLoading(false), DEMO_RELOAD_MS);
  };

  return (
    <ShowcaseRows>
      <ShowcaseRow label="Themed fallback" className="items-stretch">
        <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border">
          <ErrorBoundaryFallback
            error={DEMO_ERROR}
            errorInfo={DEMO_ERROR_INFO}
            labels={{
              ...DEFAULT_ERROR_BOUNDARY_LABELS,
              description:
                'Wrap your app or route segments in ErrorBoundary so users see this panel instead of a blank screen.',
            }}
            detailsOpen={detailsOpen}
            showDevDetails
            reloadLoading={reloadLoading}
            onReload={handleDemoReload}
            onReset={() => undefined}
            onToggleDetails={() => setDetailsOpen((open) => !open)}
            fullScreen={false}
            className="py-10"
          />
        </div>
      </ShowcaseRow>
    </ShowcaseRows>
  );
}
