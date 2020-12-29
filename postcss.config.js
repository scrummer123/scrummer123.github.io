module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {},
    'tailwindcss': true,
    'autoprefixer': true,
    'cssnano': ctx.env === 'production' ? {} : false
  }
});
