/**
 * Replaces the Playwright Trace Viewer bundled inside the generated Allure
 * report with the viewer matching the installed Playwright version.
 *
 * Background: allure-commandline pins its own (older) trace viewer build
 * (e.g. v1.60.0). Traces recorded by a newer Playwright (e.g. v1.63.0) are
 * rejected by it with "created by a newer version ... not supported".
 * Copying the viewer from the installed playwright-core keeps both in sync.
 *
 * Usage: node scripts/patch-allure-trace-viewer.cjs [allure-report-dir]
 */
const fs = require('node:fs');
const path = require('node:path');

const reportDir = path.resolve(process.argv[2] || 'allure-report');
const viewerDir = path.join(reportDir, 'playwright-trace-viewer');

function resolveViewerSource() {
  const candidates = ['playwright-core/package.json', '@playwright/test/package.json'];
  for (const candidate of candidates) {
    try {
      const pkgPath = require.resolve(candidate, { paths: [process.cwd()] });
      const dir = path.join(path.dirname(pkgPath), 'lib', 'vite', 'traceViewer');
      if (fs.existsSync(path.join(dir, 'index.html'))) return dir;
    } catch {
      // try next candidate
    }
  }
  throw new Error('Could not locate the Playwright trace viewer build in node_modules.');
}

if (!fs.existsSync(viewerDir)) {
  console.log(`No bundled trace viewer found at ${viewerDir}, nothing to patch.`);
  process.exit(0);
}

const sourceDir = resolveViewerSource();
fs.rmSync(viewerDir, { recursive: true, force: true });
fs.mkdirSync(viewerDir, { recursive: true });
fs.cpSync(sourceDir, viewerDir, { recursive: true });
console.log(`Patched Allure trace viewer from ${sourceDir}`);
