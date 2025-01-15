/** @type {import('next').NextConfig} */
const nextConfig = {}
const { DeleteSourceMapsPlugin } = require('webpack-delete-sourcemaps-plugin');
module.exports = nextConfig 

{
  // ...
  webpack: (config, { isServer }) => {
    devtool: 'hidden-source-map', // optional, see the #hidden-source-map section for 
    config.plugins.push(new DeleteSourceMapsPlugin({ isServer, keepServerSourcemaps: true }))
    return config
  }
}
