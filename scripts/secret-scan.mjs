import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const EXCLUDED_DIRS = new Set([
  ".git",
  "node_modules",
  ".next",
  "out",
  "build",
  "coverage",
  "dist",
  "src/generated",
]);
const EXCLUDED_FILES = new Set([
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  "README.md",
  ".env.example",
]);
const ALLOWED_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".yml",
  ".yaml",
]);

const SECRET_PATTERNS = [
  /DATABASE_URL\s*=\s*["']?postgres(ql)?:\/\/(?!USER:PASSWORD@HOST:5432\/DB_NAME)/i,
  /NEXTAUTH_SECRET\s*=\s*["']?(?!replace-with-long-random-secret)["'][^"']{16,}/i,
  /AUTH_SECRET\s*=\s*["']?(?!replace-with-long-random-secret)["'][^"']{16,}/i,
  /GOOGLE_CLIENT_SECRET\s*=\s*["']?(?!replace-with-google-client-secret)["'][^"']{10,}/i,
  /DO_SPACES_SECRET_KEY\s*=\s*["']?(?!replace-with-spaces-secret-key)["'][^"']{10,}/i,
  /DO_SPACES_ACCESS_KEY\s*=\s*["']?(?!replace-with-spaces-access-key)["'][^"']{8,}/i,
  /SPACES_SECRET\s*=\s*["'][^"']{8,}/i,
  /SPACES_KEY\s*=\s*["'][^"']{8,}/i,
  /AWS_SECRET_ACCESS_KEY\s*=\s*["']?/i,
  /AIza[0-9A-Za-z-_]{35}/,
  /ghp_[A-Za-z0-9]{20,}/,
  /xox[baprs]-[A-Za-z0-9-]{10,}/,
];

const findings = [];

function shouldScanFile(filePath) {
  if (EXCLUDED_FILES.has(path.basename(filePath))) return false;
  const rel = path.relative(ROOT, filePath);
  if (!rel) return false;
  if (rel.startsWith(".env") && rel !== ".env.example") return false;
  const ext = path.extname(filePath);
  return ALLOWED_EXTENSIONS.has(ext) || path.basename(filePath) === ".env.example";
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name)) walk(fullPath);
      continue;
    }
    if (!shouldScanFile(fullPath)) continue;

    const content = fs.readFileSync(fullPath, "utf8");
    const lines = content.split(/\r?\n/);
    lines.forEach((line, idx) => {
      for (const pattern of SECRET_PATTERNS) {
        if (pattern.test(line)) {
          findings.push({
            file: path.relative(ROOT, fullPath),
            line: idx + 1,
            text: line.trim().slice(0, 200),
          });
          break;
        }
      }
    });
  }
}

walk(ROOT);

if (findings.length > 0) {
  console.error("Potential secrets found:");
  for (const item of findings) {
    console.error(`- ${item.file}:${item.line} -> ${item.text}`);
  }
  process.exit(1);
}

console.log("Secret scan passed. No potential secrets detected.");
