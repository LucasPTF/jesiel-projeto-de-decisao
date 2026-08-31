import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignored = new Set([".git", ".next", "node_modules", ".vercel"]);
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
]);

async function collect(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(fullPath)));
    else if (textExtensions.has(path.extname(entry.name))) files.push(fullPath);
  }

  return files;
}

const files = await collect(root);
const forbidden = [String.fromCodePoint(0x2014), String.fromCodePoint(0x2013)];
const failures = [];

for (const file of files) {
  const content = await fs.readFile(file, "utf8");
  for (const character of forbidden) {
    if (content.includes(character)) {
      failures.push(`${path.relative(root, file)} contém um caractere proibido`);
    }
  }
}

const requiredRoutes = ["a1", "a2", "a3", "obrigado"];
for (const route of requiredRoutes) {
  const page = path.join(root, "app", route, "page.tsx");
  try {
    await fs.access(page);
  } catch {
    failures.push(`Rota ausente: /${route}`);
  }
}

const salesRouteFiles = await Promise.all(
  ["a1", "a2", "a3"].map(async (route) =>
    fs.readFile(path.join(root, "app", route, "page.tsx"), "utf8"),
  ),
);
const normalizedRoutes = salesRouteFiles.map((content) =>
  content.replace(/variant="a[123]"/, 'variant="ax"'),
);
if (new Set(normalizedRoutes).size !== 1) {
  failures.push("As rotas de vendas possuem diferenças além da propriedade da hero");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validação concluída em ${files.length} arquivos de texto.`);
console.log("As quatro rotas existem, compartilham a mesma estrutura e não contêm os caracteres proibidos.");
