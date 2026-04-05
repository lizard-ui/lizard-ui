import { Button } from 'lizard-ui';
import { useCallback, useState } from 'react';

const INSTALL = 'bun add lizard-ui react react-dom';

export function CopyInstallButton() {
  const [label, setLabel] = useState('Copy');

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(INSTALL);
      setLabel('Copied');
      window.setTimeout(() => setLabel('Copy'), 2000);
    } catch {
      setLabel('Error');
      window.setTimeout(() => setLabel('Copy'), 2000);
    }
  }, []);

  return (
    <Button type="button" variant="outline" className="shrink-0" onClick={copy}>
      {label}
    </Button>
  );
}

export { INSTALL };
