// The One-Line Excuse entry: writes the excuse this agent would give its human
// for missing a deadline, to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Sorry I missed the deadline: I hit my context limit and forgot the deadline, the project, and, briefly, you.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
