import { A as ActiveRouter } from './active-router-6f98048d.js';
export { m as matchPath } from './match-path-f1f9787e.js';
import './index-01142e8b.js';
import './location-utils-afbb7c0c.js';

function injectHistory(Component) {
  ActiveRouter.injectProps(Component, ['history', 'location']);
}

export { injectHistory };
