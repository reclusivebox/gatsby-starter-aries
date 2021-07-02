const fs = require('fs');
const path = require('path');
const rawTsconfig = fs.readFileSync(path.resolve('tsconfig.json'), 'utf8');
const tsconfigNoComments = rawTsconfig.replace(/(\/\/.*$)|(\/\*.*\*\/)/gm, '');
const tsconfig = JSON.parse(tsconfigNoComments);
const baseUrl = path.resolve(tsconfig.compilerOptions.baseUrl);

function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules', baseUrl],
    },
  });
}

module.exports = { onCreateWebpackConfig };
