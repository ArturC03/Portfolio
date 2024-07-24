/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    lintConfig: {
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    },
  },
};

export default nextConfig;