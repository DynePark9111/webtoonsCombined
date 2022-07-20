/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "shared-comic.pstatic.net",
      "kr-a.kakaopagecdn.com",
      "static-page.kakao.com",
    ],
  },
};

module.exports = nextConfig;
