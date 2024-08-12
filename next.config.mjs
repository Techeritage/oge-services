/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'ik.imagekit.io',
              port: '',
              pathname: '/krr3p3joi/**', // Adjust the pathname based on the images you're using
          },
      ],
  },
};

export default nextConfig;
