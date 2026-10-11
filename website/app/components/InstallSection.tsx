import { useCallback, useState } from 'react';
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from 'lizard-ui';

const PEERS = 'lizard-ui react react-dom';

const INSTALL_COMMANDS = {
  npm: `npm install ${PEERS}`,
  bun: `bun add ${PEERS}`,
  pnpm: `pnpm add ${PEERS}`,
} as const;

type PackageManager = keyof typeof INSTALL_COMMANDS;

function CopyCommandButton({ command }: { command: string }) {
  const [label, setLabel] = useState('Copy');

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setLabel('Copied');
      window.setTimeout(() => setLabel('Copy'), 2000);
    } catch {
      setLabel('Error');
      window.setTimeout(() => setLabel('Copy'), 2000);
    }
  }, [command]);

  return (
    <Button type="button" variant="outline" className="shrink-0" onClick={copy}>
      {label}
    </Button>
  );
}

function CommandRow({ command }: { command: string }) {
  return (
    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch">
      <div className="flex flex-1 items-center overflow-x-auto rounded-lg border border-border bg-muted/40 px-4 py-3 font-mono text-sm text-foreground">
        <code className="whitespace-pre">{command}</code>
      </div>
      <CopyCommandButton command={command} />
    </div>
  );
}

export function InstallSection() {
  return (
    <Tabs defaultValue="bun" className="mt-6 w-full">
      <TabsList className="grid w-full max-w-md grid-cols-3">
        {(Object.keys(INSTALL_COMMANDS) as PackageManager[]).map((pm) => (
          <TabsTrigger key={pm} value={pm} className="font-mono text-xs sm:text-sm">
            {pm}
          </TabsTrigger>
        ))}
      </TabsList>
      {(Object.keys(INSTALL_COMMANDS) as PackageManager[]).map((pm) => (
        <TabsContent key={pm} value={pm}>
          <CommandRow command={INSTALL_COMMANDS[pm]} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
