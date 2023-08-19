/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:slug*.html", // Old url with .html
        destination: "/product/:slug*", // Redirect without .html
      },
    ];
  },
};

module.exports = nextConfig;
