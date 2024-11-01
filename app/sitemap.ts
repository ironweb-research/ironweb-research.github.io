import { url } from "inspector";

const globby = require("globby");

export const revalidate = 3600; // hourly revalidation

function addPage(page: string) {
  console.log(`route = page.                  >>>>>>>>>>>>>>>: ${page}`)
  
  const path = page
  .replace("app/", "")
  .replace(".tsx", "")
  .replace(".mdx", "")
  .replace("/page", "");
  console.log(`route = path.                  >>>>>>>>>>>>>>>: ${path}`)
  return path;
}
export default async function sitemap() {
  const pages = await globby([
    "app/**/*.{js,jsx,ts,tsx,md,mdx}",
    "!app/*.{js,jsx,ts,tsx,md,mdx}",
    "!app/{_components,lib}/*.{js,jsx,ts,tsx,md,mdx}",
    "!app/api",
  ]);
  const routes = pages.map((page: string) => ({
    url: `${process.env.WEBSITE_URL}${addPage(page)}`,
    lastModified: new Date().toISOString(),
  }));
  
  console.log(`routes                        >>>>>>>>>>>>>>>>: ${{routes}.routes}`)
  console.log(`pages                         >>>>>>>>>>>>>>>>: ${pages}`)
  console.log(`process.env.WEBSITE_URL       >>>>>>>>>>>>>>>>: ${process.env.WEBSITE_URL}`)
  console.log(`process.env.WEBSITE_URL       >>>>>>>>>>>>>>>>: ${{url}}`)
  return [...routes]; // spread operator on [routes]
}
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