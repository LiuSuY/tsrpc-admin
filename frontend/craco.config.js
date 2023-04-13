const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        configure: {
            resolve: {
                symlinks: false,
            },
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
        }
    ],
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
};