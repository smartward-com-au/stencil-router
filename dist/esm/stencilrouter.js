import { p as promiseResolve, b as bootstrapLazy } from './index-01142e8b.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["stencil-route",[[0,"stencil-route",{"group":[513],"componentUpdated":[16],"match":[1040],"url":[1],"component":[1],"componentProps":[16],"exact":[4],"routeRender":[16],"scrollTopOffset":[2,"scroll-top-offset"],"routeViewsUpdated":[1040],"location":[1040],"history":[1040],"historyType":[1025,"history-type"]}]]],["stencil-route-link",[[4,"stencil-route-link",{"url":[1],"urlMatch":[1,"url-match"],"activeClass":[1,"active-class"],"exact":[4],"strict":[4],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"history":[1040],"location":[1040],"root":[1025],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"],"match":[32]}]]],["stencil-route-switch",[[4,"stencil-route-switch",{"group":[513],"scrollTopOffset":[2,"scroll-top-offset"],"location":[1040],"routeViewsUpdated":[16]}]]],["stencil-route-title",[[0,"stencil-route-title",{"titleSuffix":[1025,"title-suffix"],"pageTitle":[1,"page-title"]}]]],["stencil-router",[[4,"stencil-router",{"root":[1025],"historyType":[1025,"history-type"],"titleSuffix":[1,"title-suffix"],"scrollTopOffset":[2,"scroll-top-offset"],"location":[32],"history":[32]}]]],["stencil-router-prompt",[[0,"stencil-router-prompt",{"when":[4],"message":[1],"history":[1040],"unblock":[32]}]]],["stencil-router-redirect",[[0,"stencil-router-redirect",{"history":[1040],"root":[1025],"url":[1]}]]],["stencil-async-content",[[0,"stencil-async-content",{"documentLocation":[1,"document-location"],"content":[32]}]]]], options);
});
