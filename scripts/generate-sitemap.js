const fs = require("fs");
const globby = require("globby");


/* Only sitemap.ts outputs its console.log, as shown below:
        generate-sitemap.js does not output its console.log
route = page.                  >>>>>>>>>>>>>>>: app/_components/theme-switcher.tsx
route = path.                  >>>>>>>>>>>>>>>: _components/theme-switcher
routes                        >>>>>>>>>>>>>>>>: [object Object]
pages                         >>>>>>>>>>>>>>>>: app/page.tsx,app/contact/page.tsx, \
  app/expertises/page.tsx,app/lib/constants.ts,app/roots/page.tsx,app/_components/alert.tsx, \
  app/_components/avatar.tsx,app/_components/container.tsx,app/_components/cover-image.tsx, \
  app/_components/date-formatter.tsx,app/_components/footer.tsx,app/_components/header.tsx, \
  app/_components/intro.tsx,app/_components/section-separator.tsx,app/_components/theme-switcher.tsx
process.env.WEBSITE_URL       >>>>>>>>>>>>>>>>: https://ironweb-research.github.io/
*/

function addPage(page) {

  // route = page.                  >>>>>>>>>>>>>>>: app/_components/theme-switcher.tsx
  // route = path.                  >>>>>>>>>>>>>>>: _components/theme-switcher

  const path = page.replace("pages", "").replace(".js", "").replace(".mdx", "");

// path = page = app/_components/theme-switcher.tsx
// tsx file survives!

  const route = path === "/index" ? "" : path;

// route = app/_components/theme-switcher.tsx

  console.log(`gen_sitemap____route = path.                  >>>>>>>>>>>>>>>>: ${path}`)
  console.log(`gen_sitemap____process.env.WEBSITE_URL_route. >>>>>>>>>>>>>>>>: ${process.env.WEBSITE_URL}${route}`)

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}
// https://ironweb-research.github.io/expertises
// https://ironweb-research.github.io/app/_components/theme-switcher.tsx

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "pages/**/*{.js,.mdx}",
    "!pages/_*.js",
    "!pages/api",
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
