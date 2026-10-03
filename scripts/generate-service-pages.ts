import fs from 'fs';
import path from 'path';
import { getAllServicePagesMetadata, injectServiceMetaIntoHtml } from '../src/utils/servicePagesMeta';

export function generateStaticServicePages(distDir: string = path.resolve('dist')) {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`[prerender] Template not found at ${templatePath}. Build must run first.`);
    return;
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  const allPages = getAllServicePagesMetadata();

  console.log(`[prerender] Generating static HTML for ${allPages.length} service pages...`);

  let count = 0;
  for (const page of allPages) {
    const pageHtml = injectServiceMetaIntoHtml(baseHtml, page);
    const targetDir = path.join(distDir, page.cityId, 'services', page.serviceId);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf-8');
    count++;
  }

  console.log(`[prerender] Successfully generated ${count} service pages with static SEO tags.`);
}

// Run directly if called as a script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticServicePages();
}
