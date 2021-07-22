'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eaad315e.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["context-consumer.cjs",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["stencil-route.cjs",[[0,"stencil-route",{"group":[513],"componentUpdated":[16],"match":[1040],"url":[1],"component":[1],"componentProps":[16],"exact":[4],"routeRender":[16],"scrollTopOffset":[2,"scroll-top-offset"],"routeViewsUpdated":[16],"location":[1040],"history":[1040],"historyType":[1025,"history-type"]}]]],["stencil-route-link.cjs",[[4,"stencil-route-link",{"url":[1],"urlMatch":[1,"url-match"],"activeClass":[1,"active-class"],"exact":[4],"strict":[4],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"history":[1040],"location":[1040],"root":[1025],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"],"match":[32]}]]],["stencil-route-switch.cjs",[[4,"stencil-route-switch",{"group":[513],"scrollTopOffset":[2,"scroll-top-offset"],"location":[1040],"routeViewsUpdated":[16]}]]],["stencil-route-title.cjs",[[0,"stencil-route-title",{"titleSuffix":[1,"title-suffix"],"pageTitle":[1,"page-title"]}]]],["stencil-router.cjs",[[4,"stencil-router",{"root":[1025],"historyType":[1025,"history-type"],"titleSuffix":[1,"title-suffix"],"scrollTopOffset":[2,"scroll-top-offset"],"location":[32],"history":[32]}]]],["stencil-router-prompt.cjs",[[0,"stencil-router-prompt",{"when":[4],"message":[1],"history":[1040],"unblock":[32]}]]],["stencil-router-redirect.cjs",[[0,"stencil-router-redirect",{"history":[1040],"root":[1025],"url":[1]}]]],["stencil-async-content.cjs",[[0,"stencil-async-content",{"documentLocation":[1,"document-location"],"content":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
