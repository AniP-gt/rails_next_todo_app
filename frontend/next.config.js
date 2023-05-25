/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withSass = require('sass');

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
