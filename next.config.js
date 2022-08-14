/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "shared-comic.pstatic.net",
      "kr-a.kakaopagecdn.com",
      "static-page.kakao.com",
      "dn-img-page.kakao.com",
      "buffimgs.plaync.com",
    ],
  },
};

module.exports = nextConfig;
