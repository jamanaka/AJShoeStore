export default function handler(req, res) {
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://ajshoestore.vercel.app/</loc>
      <lastmod>2025-02-20T15:45:52+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://ajshoestore.vercel.app/about-us</loc>
      <lastmod>2025-02-20T15:45:52+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://ajshoestore.vercel.app/contact-us</loc>
      <lastmod>2025-02-20T15:45:52+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://ajshoestore.vercel.app/register</loc>
      <lastmod>2025-02-20T15:45:52+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://ajshoestore.vercel.app/login</loc>
      <lastmod>2025-02-20T15:45:52+00:00</lastmod>
      <priority>0.80</priority>
    </url>
  </urlset>`);
  }
  