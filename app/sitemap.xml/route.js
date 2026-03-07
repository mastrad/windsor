// sitemap.xml.js or sitemap/page.xml.js
export async function GET() {
    // Define the XML content as a string
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://windsortaekwondo.com</loc>
      <lastmod>2025-04-07</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
        <url>
      <loc>https://resources.windsortaekwondo.com/</loc>
      <lastmod>2025-04-07</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://windsortaekwondo.com/about</loc>
      <lastmod>2025-04-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://windsortaekwondo.com/contact</loc>
      <lastmod>2025-04-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://windsortaekwondo.com/terms</loc>
      <lastmod>2025-04-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://windsortaekwondo.com/privacy</loc>
      <lastmod>2025-04-07</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  </urlset>`;
  
    // Return the XML with proper headers
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }