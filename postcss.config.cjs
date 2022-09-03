const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const purgefonts = require('postcss-purgefonts')

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: ['./index.html', './src/**/*.ts', './src/**/*.js', './src/**/*.vue'],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
      safelist: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/,/tick.*/],
      fontFace: true
    }),
    // purgefonts({
    //   'purge_only_fonts': [
    //     'Font Awesome 5 Free',
    //     'Font Awesome 5 Brands',
    //     'Font Awesome 6 Free',
    //     'Font Awesome 6 Brands',
    //     'Font Awesome 6 Duotone',
    //     'Font Awesome 5 Brands',
    //     'Font Awesome 5 Duotone',
    //     'FontAwesome']
    // })
  ]
}