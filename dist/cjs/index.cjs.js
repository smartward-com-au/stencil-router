'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const activeRouter = require('./active-router-05f0f1fd.js');
const matchPath = require('./match-path-acf74873.js');
require('./index-eaad315e.js');
require('./location-utils-2d643b4e.js');

function injectHistory(Component) {
  activeRouter.ActiveRouter.injectProps(Component, ['history', 'location']);
}

exports.matchPath = matchPath.matchPath;
exports.injectHistory = injectHistory;
