import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';
export default createProviderConsumer({
  historyType: 'browser',
  location: {
    pathname: '',
    query: {},
    key: ''
  },
  titleSuffix: '',
  root: '/',
  routeViewsUpdated: () => { }
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));
