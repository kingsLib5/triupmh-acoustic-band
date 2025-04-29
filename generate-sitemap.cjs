// generate-sitemap.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs   = require('fs');
const path = require('path');

async function buildSitemap() {
  // 1) List your “real” routes here
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
  ];

  // 2) Create the sitemap stream
  const hostname      = 'https://www.triumphacousticband.org/';  // ← replace this
  const sitemapStream = new SitemapStream({ hostname });

  // 3) Generate the XML in-memory
  const xmlBuffer = await streamToPromise(
    Readable.from(links).pipe(sitemapStream)
  );

  // 4) Write it into dist/ so Vite includes it in the final build
  const outputPath = path.resolve(__dirname, 'dist', 'sitemap.xml');
  fs.writeFileSync(outputPath, xmlBuffer.toString());

  console.log(`✅ Sitemap written to ${outputPath}`);
}

buildSitemap().catch(err => {
  console.error(err);
  process.exit(1);
});
