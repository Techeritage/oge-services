/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ogeprofessionals.com', // Replace with your domain
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 5000, // Limit the number of URLs per sitemap file
  changefreq: 'daily', // How often the pages are likely to change
  priority: 0.7, // Priority of URLs
};
