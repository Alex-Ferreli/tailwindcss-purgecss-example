module.exports = {
  content: ['public/index.html', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  css: ['src/tailwind.css'],
  extractors: [
    {
      extractor: content => content.match(/[\w-/:]+(?<!:)/gi) || [],
      extensions: ['html', 'js'],
    },
  ],
};
