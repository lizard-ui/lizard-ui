import * as React from 'react';

const KEYWORD =
  /\b(import|export|from|as|const|let|var|function|return|type|interface|extends|implements|default|async|await|new|this|class|if|else|for|of|in)\b/g;
const JSX_TAG = /<\/?[A-Za-z][A-Za-z0-9.]*(?:\s[^>]*)?\/?>/g;
const STRING = /(['"`])(?:(?!\1)[^\\]|\\.)*\1/g;
const COMMENT = /\/\/[^\n]*|\/\*[\s\S]*?\*\//g;

type Segment = { text: string; className: string };

function pushSegments(source: string, regex: RegExp, className: string, out: Segment[]): void {
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g');
  while ((m = re.exec(source)) !== null) {
    if (m.index > last) {
      out.push({ text: source.slice(last, m.index), className: '' });
    }
    out.push({ text: m[0], className });
    last = m.index + m[0].length;
  }
  if (last < source.length) {
    out.push({ text: source.slice(last), className: '' });
  }
}

/**
 * Lightweight TSX coloring using theme tokens (primary/secondary/muted/foreground).
 */
export function highlightTsxTheme(code: string): React.ReactNode {
  const lines = code.split('\n');
  return lines.map((line, lineIdx) => (
    <React.Fragment key={lineIdx}>
      {lineIdx > 0 ? '\n' : null}
      <HighlightLine line={line} />
    </React.Fragment>
  ));
}

function HighlightLine({ line }: { line: string }): React.ReactNode {
  const segments: Segment[] = [];
  const withComments: Segment[] = [];
  pushSegments(line, COMMENT, 'text-muted-foreground/80 italic', withComments);

  for (const seg of withComments) {
    if (seg.className) {
      segments.push(seg);
      continue;
    }
    const sub: Segment[] = [];
    pushSegments(seg.text, STRING, 'text-secondary-foreground', sub);
    for (const s of sub) {
      if (s.className) {
        segments.push(s);
        continue;
      }
      const sub2: Segment[] = [];
      pushSegments(s.text, JSX_TAG, 'text-primary', sub2);
      for (const t of sub2) {
        if (t.className) {
          segments.push(t);
          continue;
        }
        const sub3: Segment[] = [];
        pushSegments(t.text, KEYWORD, 'text-primary font-medium', sub3);
        for (const u of sub3) {
          if (u.className) {
            segments.push(u);
          } else if (u.text) {
            segments.push({ text: u.text, className: 'text-foreground' });
          }
        }
      }
    }
  }

  if (segments.length === 0) {
    return <span className="text-foreground">{line || ' '}</span>;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.className ? (
          <span key={i} className={seg.className}>
            {seg.text}
          </span>
        ) : (
          <span key={i} className="text-foreground">
            {seg.text}
          </span>
        ),
      )}
    </>
  );
}
