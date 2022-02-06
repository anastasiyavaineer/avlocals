const withPWA = require("next-pwa");
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // {
  //   key: "Content-Security-Policy",
  //   value: "default-src; self'",
  // },
];

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/coffee",
        destination: "https://www.buymeacoffee.com/avlocals",
        permanent: true,
      },
      {
        source: "/audio",
        destination: "https://audi0phile.netlify.app/",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
});
