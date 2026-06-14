// Generates src/app/theme.generated.css from theme.json.
// Runs automatically via the `predev` / `prebuild` npm scripts.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const theme = JSON.parse(readFileSync(join(root, "theme.json"), "utf8"));

const toVars = (obj) =>
  Object.entries(obj)
    .filter(([k]) => !k.startsWith("_"))
    .map(([k, v]) => `  --${k}: ${v};`)
    .join("\n");

const css = `/* AUTO-GENERATED from theme.json — do not edit by hand.
   Run \`npm run theme\` (or just \`npm run dev\` / \`npm run build\`). */
:root {
  --radius: ${theme.radius ?? "0.75rem"};
${toVars(theme.light)}
}

.dark {
${toVars(theme.dark)}
}
`;

const out = join(root, "src/app/theme.generated.css");
writeFileSync(out, css);
console.log("✓ Generated src/app/theme.generated.css from theme.json");
