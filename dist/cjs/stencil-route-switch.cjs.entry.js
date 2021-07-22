'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eaad315e.js');
const activeRouter = require('./active-router-05f0f1fd.js');
const matchPath = require('./match-path-acf74873.js');
require('./location-utils-2d643b4e.js');

const getUniqueId = () => {
  return ((Math.random() * 10e16).toString().match(/.{4}/g) || []).join("-");
};
const getMatch = (pathname, url, exact) => {
  return matchPath.matchPath(pathname, {
    path: url,
    exact: exact,
    strict: true,
  });
};
const isHTMLStencilRouteElement = (elm) => {
  return elm.tagName === "STENCIL-ROUTE";
};
const RouteSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.group = getUniqueId();
    this.subscribers = [];
  }
  componentWillLoad() {
    if (this.location != null) {
      this.regenerateSubscribers(this.location);
    }
  }
  async regenerateSubscribers(newLocation) {
    if (newLocation == null) {
      return;
    }
    let newActiveIndex = -1;
    this.subscribers = Array.prototype.slice
      .call(this.el.children)
      .filter(isHTMLStencilRouteElement)
      .map((childElement, index) => {
      const match = getMatch(newLocation.pathname, childElement.url, childElement.exact);
      if (match && newActiveIndex === -1) {
        newActiveIndex = index;
      }
      return {
        el: childElement,
        match: match,
      };
    });
    if (newActiveIndex === -1) {
      return;
    }
    // Check if this actually changes which child is active
    // then just pass the new match down if the active route isn't changing.
    if (this.activeIndex === newActiveIndex) {
      this.subscribers[newActiveIndex].el.match =
        this.subscribers[newActiveIndex].match;
      return;
    }
    this.activeIndex = newActiveIndex;
    // Set all props on the new active route then wait until it says that it
    // is completed
    const activeChild = this.subscribers[this.activeIndex];
    if (this.scrollTopOffset) {
      activeChild.el.scrollTopOffset = this.scrollTopOffset;
    }
    activeChild.el.group = this.group;
    activeChild.el.match = activeChild.match;
    activeChild.el.componentUpdated = (routeViewUpdatedOptions) => {
      // After the new active route has completed then update visibility of routes
      requestAnimationFrame(() => {
        this.subscribers.forEach((child, index) => {
          child.el.componentUpdated = undefined;
          if (index === this.activeIndex) {
            return (child.el.style.display = "");
          }
          if (this.scrollTopOffset) {
            child.el.scrollTopOffset = this.scrollTopOffset;
          }
          child.el.group = this.group;
          child.el.match = null;
          child.el.style.display = "none";
        });
      });
      if (this.routeViewsUpdated) {
        this.routeViewsUpdated(Object.assign({ scrollTopOffset: this.scrollTopOffset }, routeViewUpdatedOptions));
      }
    };
  }
  render() {
    return index.h("slot", null);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "location": ["regenerateSubscribers"]
  }; }
};
activeRouter.ActiveRouter.injectProps(RouteSwitch, ["location", "routeViewsUpdated"]);

exports.stencil_route_switch = RouteSwitch;
