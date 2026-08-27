import { access, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const requiredFiles = [
  "dist/index.html",
  "dist/rechtliches/index.html",
  "dist/en/index.html",
  "dist/en/legal/index.html",
  "dist/styles.css",
  "dist/app.js",
  "dist/config.js",
  "dist/config.template.js",
  "dist/LICENSE",
  "dist/THIRD_PARTY_NOTICES.md",
  "dist/campus-koethen-icon.png",
  "dist/campus-koethen-logo.png",
  "dist/app-news-screen-de.png",
  "dist/app-news-screen-en.png",
  "dist/fonts/AlbertSans-Variable.ttf",
  "dist/fonts/AlbertSans-OFL.txt",
];

for (const file of requiredFiles) {
  await access(resolve(root, file));
}

const sourceMarkdown = await readFile(resolve(root, "datenschutz-und-impressum.md"), "utf8");
const englishSourceMarkdown = await readFile(resolve(root, "legal-notice-and-privacy.md"), "utf8");
const legalHtml = await readFile(resolve(root, "dist/rechtliches/index.html"), "utf8");
const englishLegalHtml = await readFile(resolve(root, "dist/en/legal/index.html"), "utf8");
const indexHtml = await readFile(resolve(root, "dist/index.html"), "utf8");
const englishIndexHtml = await readFile(resolve(root, "dist/en/index.html"), "utf8");
const localConfig = await readFile(resolve(root, "dist/config.js"), "utf8");
const thirdPartyNotices = await readFile(resolve(root, "dist/THIRD_PARTY_NOTICES.md"), "utf8");
const dockerfile = await readFile(resolve(root, "Dockerfile"), "utf8");
const composeConfig = await readFile(resolve(root, "compose.yaml"), "utf8");
const reverseProxyConfig = await readFile(resolve(root, "nginx.conf"), "utf8");
const containerWorkflow = await readOptionalFile(resolve(root, ".github/workflows/container.yml"));
const sitemap = await readFile(resolve(root, "dist/sitemap.xml"), "utf8");

assertMarkdownPreserved(sourceMarkdown, legalHtml, "German");
assertMarkdownPreserved(englishSourceMarkdown, englishLegalHtml, "English");

assert(indexHtml.includes('data-store="googlePlay"'), "Google Play button is missing");
assert(indexHtml.includes('data-store="appStore"'), "App Store button is missing");
assert(indexHtml.match(/aria-disabled="true"/g)?.length === 2, "Store buttons must be disabled by default");
assert(englishIndexHtml.includes('data-store="googlePlay"'), "English Google Play button is missing");
assert(englishIndexHtml.includes('data-store="appStore"'), "English App Store button is missing");
assert(englishIndexHtml.match(/aria-disabled="true"/g)?.length === 2, "English store buttons must be disabled by default");
assert(localConfig.includes('googlePlayUrl: ""'), "Google Play must be empty by default");
assert(localConfig.includes('appStoreUrl: ""'), "App Store must be empty by default");
assert(indexHtml.includes("https://campuskoethen.sturahsa.de/"), "Production domain metadata is missing");
assert(englishIndexHtml.includes("https://campuskoethen.sturahsa.de/en/"), "English production metadata is missing");
assert(indexHtml.includes('href="/en/"'), "English language switch is missing");
assert(englishIndexHtml.includes('href="/"'), "German language switch is missing");
assert(legalHtml.includes('href="/en/legal/"'), "English legal language switch is missing");
assert(englishLegalHtml.includes('href="/rechtliches/"'), "German legal language switch is missing");
assert(indexHtml.includes("AGPL-3.0-only"), "AGPL notice is missing");
assert(englishIndexHtml.includes("AGPL-3.0-only"), "English AGPL notice is missing");
assert(
  indexHtml.includes('href="/THIRD_PARTY_NOTICES.md"'),
  "Third-party notices link is missing",
);
assert(
  indexHtml.includes('href="/fonts/AlbertSans-OFL.txt"'),
  "Albert Sans license link is missing",
);
assert(
  indexHtml.includes("https://github.com/Leviora-Studio/campus-koethen-landing"),
  "Public source repository link is missing",
);
assert(
  indexHtml.includes('<a href="https://leviora.studio">Leviora Studio</a>'),
  "Leviora Studio footer link is missing",
);
assert(
  englishIndexHtml.includes('<a href="https://leviora.studio">Leviora Studio</a>'),
  "English Leviora Studio footer link is missing",
);
assert(indexHtml.includes("campus-koethen-logo.png"), "Brand logo is missing");
assert(englishIndexHtml.includes("campus-koethen-logo.png"), "English brand logo is missing");
assert(indexHtml.includes("app-news-screen-de.png"), "German app screen is missing");
assert(englishIndexHtml.includes("app-news-screen-en.png"), "English app screen is missing");
assert(indexHtml.includes('class="app-preview"'), "Platform-neutral app preview is missing");
assert(englishIndexHtml.includes('class="app-preview"'), "English app preview is missing");
assert(!indexHtml.includes('class="phone"'), "Apple-like phone simulation is still present");
assert(!englishIndexHtml.includes('class="phone"'), "English page contains an Apple-like phone simulation");
assert(!indexHtml.includes("play-icon"), "A Google-like store icon is still present");
assert(!indexHtml.includes("apple-icon"), "An Apple-like store icon is still present");
assert(sitemap.includes("https://campuskoethen.sturahsa.de/en/"), "English page is missing from the sitemap");
assert(sitemap.includes("https://campuskoethen.sturahsa.de/en/legal/"), "English legal page is missing from the sitemap");

await assertFileHash(
  "site/app-news-screen-de.png",
  "182267423d7952ebce53a188b66fe6cf6505f90facf946b6adf6a031ffacc2a4",
  "German source screenshot was modified",
);
await assertFileHash(
  "dist/app-news-screen-de.png",
  "182267423d7952ebce53a188b66fe6cf6505f90facf946b6adf6a031ffacc2a4",
  "German built screenshot was modified",
);
await assertFileHash(
  "site/app-news-screen-en.png",
  "05f77cbe85c2c51959bcbbca01131cb588d9fd75dfa1b09f33a13fcca96eff87",
  "English source screenshot was modified",
);
await assertFileHash(
  "dist/app-news-screen-en.png",
  "05f77cbe85c2c51959bcbbca01131cb588d9fd75dfa1b09f33a13fcca96eff87",
  "English built screenshot was modified",
);
assert(thirdPartyNotices.includes("BSD 2-Clause"), "nginx BSD notice is missing");
assert(thirdPartyNotices.includes("Alpine Linux"), "Alpine notice is missing");
assert(
  thirdPartyNotices.includes("flutter_tabler_icons` version 1.43.0"),
  "flutter_tabler_icons attribution is missing",
);
assert(
  thirdPartyNotices.includes("Tabler Icons version\n3.19.0"),
  "Tabler Icons attribution is missing",
);
assert(thirdPartyNotices.includes("Copyright (c) 2020 bigbadbob2003"), "Flutter icon package copyright is missing");
assert(thirdPartyNotices.includes("Copyright (c) 2020-2026 Paweł Kuna"), "Tabler Icons copyright is missing");
assert(thirdPartyNotices.includes("App Store is a service mark"), "Apple attribution is missing");
assert(thirdPartyNotices.includes("Google Play is a trademark"), "Google attribution is missing");
assert(dockerfile.includes("nginx:1.31.4-alpine@sha256:"), "nginx base image is not pinned");
assert(dockerfile.includes("node:24-alpine@sha256:"), "Node build image is not pinned");
assert(
  dockerfile.includes("AGPL-3.0-only AND LicenseRef-ThirdParty-Components"),
  "Container license metadata does not reference third-party components",
);
assert(
  reverseProxyConfig.includes("server_name campus-koethen.sturahsa.de;"),
  "Production domain is missing from the reverse proxy config",
);
assert(
  composeConfig.includes('\"127.0.0.1:${LANDING_PORT:-8080}:80\"'),
  "Landing page container is not bound to the loopback interface",
);
assert(
  !composeConfig.includes("0.0.0.0"),
  "Landing page container must not listen on every host interface",
);
assert(
  reverseProxyConfig.includes("proxy_pass http://127.0.0.1:8080;"),
  "Loopback container upstream is missing from the reverse proxy config",
);
assert(
  !reverseProxyConfig.includes("resolver 127.0.0.11"),
  "System-wide nginx must not use Docker's embedded DNS server",
);
assert(
  reverseProxyConfig.includes("/etc/letsencrypt/live/campus-koethen.sturahsa.de/fullchain.pem"),
  "TLS certificate path is missing from the reverse proxy config",
);
assert(
  reverseProxyConfig.includes("return 301 https://campus-koethen.sturahsa.de$request_uri;"),
  "HTTPS redirect is missing from the reverse proxy config",
);
if (containerWorkflow) {
  assert(containerWorkflow.includes("sbom: true"), "Container SBOM generation is missing");
}

const stylesheet = await readFile(resolve(root, "dist/styles.css"), "utf8");
assert(stylesheet.includes('font-family: "Albert Sans"'), "Albert Sans is not configured");
assert(!stylesheet.includes("monospace"), "A monospace font is still configured");
assert(stylesheet.includes("background: #090909"), "Minimal black app frame is missing");
assert(stylesheet.includes("border: 1px solid #000000"), "Black app frame border is missing");
assert(
  stylesheet.includes("grid-template-columns: repeat(3, minmax(0, max-content))"),
  "Footer links are not arranged three per row",
);
for (const colour of [
  "#C2185B", "#EC6E9F", "#97114A", "#F6C6DA", "#FBE4EE", "#511F37",
  "#FAF7F8", "#1B1418", "#FDFBFC", "#251D22", "#221A1E", "#F3ECF0",
  "#6F6268", "#A79CA2", "#E0F2FE", "#15384E", "#075985", "#8ECDF2",
  "#EADFE4", "#3A3037", "#1D7A55", "#7CC5A0", "#B3261E", "#E8837B",
]) {
  assert(stylesheet.includes(colour), `Brand colour is missing: ${colour}`);
}

console.log("Build checks passed.");

function assertMarkdownPreserved(markdown, html, language) {
  let legalCursor = 0;
  const normalisedHtml = normaliseText(html);

  for (const line of markdown.replace(/\r\n/g, "\n").split("\n")) {
    const expected = markdownLineToText(line);
    if (!expected) continue;

    const matchAt = normalisedHtml.indexOf(expected, legalCursor);
    if (matchAt === -1) {
      throw new Error(`${language} legal text is missing or out of order: ${expected.slice(0, 80)}`);
    }
    legalCursor = matchAt + expected.length;
  }
}

async function assertFileHash(path, expectedHash, message) {
  const contents = await readFile(resolve(root, path));
  const actualHash = createHash("sha256").update(contents).digest("hex");
  assert(actualHash === expectedHash, message);
}

function markdownLineToText(line) {
  if (line.trim() === "" || line.trim() === "---") return "";

  return normaliseText(
    line
      .replace(/^#{1,3}\s+/, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\s{2}$/, ""),
  );
}

function normaliseText(value) {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replace(/\s+/g, " ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s+([,.;:])/g, "$1")
    .trim();
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function readOptionalFile(path) {
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (error?.code === "ENOENT") return "";
    throw error;
  }
}
