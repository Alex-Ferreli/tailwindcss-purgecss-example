/* eslint-disable import/no-extraneous-dependencies */

const { override, addPostcssPlugins } = require('customize-cra');

const tailwindcss = require('tailwindcss');

module.exports = override(
  addPostcssPlugins([tailwindcss]),
);
