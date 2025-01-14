/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/a/**",
      },
    ],
  },
};
// https://photos.google.com/photo/AF1QipPLBrNuQE7gz2cLSWOsN-Ge_hop-DuMEdWzjU9A
// https://s10.aconvert.com/convert/p3r68-cdx67/a857d-fmcgf.jpg
// https://lh3.googleusercontent.com/a/ACg8ocJjN5J-yd9kzul9vkcLjMrHBgiNNFpHeI0I2eyRP_d1kYPUZteA=s96-c
export default nextConfig;
