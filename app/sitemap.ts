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
    "app/**/*{.js,jsx,ts,tsx,.mdx}",
    "!app/_*.js",
    "!app/{sitemap,layout}.{js,jsx,ts,tsx}",
    "!app/api",
  ]);
  const routes = pages.map((page: string) => ({
    url: `${process.env.WEBSITE_URL}${addPage(page)}`,
    lastModified: new Date().toISOString(),
  }));
  
  console.log(`routes                        >>>>>>>>>>>>>>>>: ${{routes}}`)
  console.log(`pages                         >>>>>>>>>>>>>>>>: ${pages}`)
  console.log(`process.env.WEBSITE_URL       >>>>>>>>>>>>>>>>: ${process.env.WEBSITE_URL}`)
  return [...routes]; // spread operator on [routes]
}
