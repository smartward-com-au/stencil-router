import { A as ActiveRouter } from './active-router-6f98048d.js';
export { m as matchPath } from './match-path-d857b99e.js';
import './index-01142e8b.js';
import './location-utils-97b64e17.js';

function injectHistory(Component) {
  ActiveRouter.injectProps(Component, ['history', 'location']);
}

export { injectHistory };
