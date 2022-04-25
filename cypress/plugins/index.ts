/// <reference types="cypress" />

import path = require('path');
import fs = require('fs');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('task', {
    getResqFilePath() {
      const pathName = path.join(process.cwd(), '.yarn/unplugged');
      const files = fs.readdirSync(pathName);
      const resqFiles = files.filter(f => f.includes('resq-npm-'));
      if (resqFiles.length != 1) {
        throw new Error(
          `Cannot find the resq module in the unplugged ${pathName} - make sure the 'resq' package is unplugged`,
        );
      }
      const resqFile = path.join(
        pathName,
        resqFiles[0],
        'node_modules/resq/dist/index.js',
      );
      return resqFile;
    },
  });
};