import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const outputDirectory = resolve(root, "dist");
const siteDirectory = resolve(root, "site");

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(siteDirectory, outputDirectory, { recursive: true });
await cp(resolve(root, "LICENSE"), resolve(outputDirectory, "LICENSE"));
await cp(resolve(root, "THIRD_PARTY_NOTICES.md"), resolve(outputDirectory, "THIRD_PARTY_NOTICES.md"));
await cp(resolve(root, "campus-koethen-icon.png"), resolve(outputDirectory, "campus-koethen-icon.png"));
await cp(resolve(root, "campus-koethen-logo.png"), resolve(outputDirectory, "campus-koethen-logo.png"));

await buildLegalPage({
  markdownPath: resolve(root, "datenschutz-und-impressum.md"),
  templatePath: resolve(siteDirectory, "legal-template.html"),
  outputPath: resolve(outputDirectory, "rechtliches", "index.html"),
});
await buildLegalPage({
  markdownPath: resolve(root, "legal-notice-and-privacy.md"),
  templatePath: resolve(siteDirectory, "legal-template-en.html"),
  outputPath: resolve(outputDirectory, "en", "legal", "index.html"),
});
await rm(resolve(outputDirectory, "legal-template.html"));
await rm(resolve(outputDirectory, "legal-template-en.html"));

async function buildLegalPage({ markdownPath, templatePath, outputPath }) {
  const legalMarkdown = await readFile(markdownPath, "utf8");
  const legalContent = renderMarkdown(legalMarkdown);
  const legalTemplate = await readFile(templatePath, "utf8");
  const legalPage = legalTemplate.replace("<!-- LEGAL_CONTENT -->", legalContent);

  await mkdir(resolve(outputPath, ".."), { recursive: true });
  await writeFile(outputPath, legalPage);
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;

    const renderedLines = paragraph.map(({ text, hardBreak }) =>
      `${renderInline(text)}${hardBreak ? "<br>" : ""}`,
    );
    html.push(`<p>${renderedLines.join(" ")}</p>`);
    paragraph = [];
  };

  for (const line of lines) {
    const heading = /^(#{1,3})\s+(.+)$/.exec(line);

    if (heading) {
      flushParagraph();
      const level = heading[1].length;
      const id = slugify(heading[2]);
      html.push(`<h${level} id="${id}">${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    if (line.trim() === "---") {
      flushParagraph();
      html.push("<hr>");
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      continue;
    }

    paragraph.push({
      text: line.replace(/\s{2}$/, ""),
      hardBreak: /\s{2}$/.test(line),
    });
  }

  flushParagraph();
  return html.join("\n");
}

function renderInline(value) {
  const tokenPattern = /(\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`)/g;
  let result = "";
  let lastIndex = 0;

  for (const match of value.matchAll(tokenPattern)) {
    result += escapeHtml(value.slice(lastIndex, match.index));

    if (match[2] !== undefined) {
      const href = sanitiseHref(match[3]);
      result += `<a href="${escapeAttribute(href)}">${escapeHtml(match[2])}</a>`;
    } else {
      result += `<code>${escapeHtml(match[4])}</code>`;
    }

    lastIndex = match.index + match[0].length;
  }

  return result + escapeHtml(value.slice(lastIndex));
}

function sanitiseHref(value) {
  return /^(https:\/\/|mailto:|tel:)/.test(value) ? value : "#";
}

function slugify(value) {
  return value
    .toLocaleLowerCase("de-DE")
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}
