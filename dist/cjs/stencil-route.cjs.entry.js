'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eaad315e.js');
const matchPath = require('./match-path-03941a21.js');
const activeRouter = require('./active-router-05f0f1fd.js');
require('./location-utils-24a4ec63.js');

const routeCss = "stencil-route.inactive{display:none}";

const Route = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.group = null;
    this.match = null;
    this.componentProps = {};
    this.exact = false;
    this.scrollOnNextRender = false;
    this.previousMatch = null;
  }
  // Identify if the current route is a match.
  computeMatch(newLocation) {
    const isGrouped = this.group != null ||
      (this.el.parentElement != null &&
        this.el.parentElement.tagName.toLowerCase() === "stencil-route-switch");
    if (!newLocation || isGrouped) {
      return;
    }
    this.previousMatch = this.match;
    return (this.match = matchPath.matchPath(newLocation.pathname, {
      path: this.url,
      exact: this.exact,
      strict: true,
    }));
  }
  async loadCompleted() {
    let routeViewOptions = {};
    if (this.history && this.history.location.hash) {
      routeViewOptions = {
        scrollToId: this.history.location.hash.substr(1),
      };
    }
    else if (this.scrollTopOffset) {
      routeViewOptions = {
        scrollTopOffset: this.scrollTopOffset,
      };
    }
    // After all children have completed then tell switch
    // the provided callback will get executed after this route is in view
    if (typeof this.componentUpdated === "function") {
      this.componentUpdated(routeViewOptions);
      // If this is an independent route and it matches then routes have updated.
      // If the only change to location is a hash change then do not scroll.
    }
    else if (this.match &&
      !matchPath.matchesAreEqual(this.match, this.previousMatch) &&
      this.routeViewsUpdated) {
      this.routeViewsUpdated(routeViewOptions);
    }
  }
  async componentDidUpdate() {
    await this.loadCompleted();
  }
  async componentDidLoad() {
    await this.loadCompleted();
  }
  render() {
    // If there is no activeRouter then do not render
    // Check if this route is in the matching URL (for example, a parent route)
    if (!this.match || !this.history) {
      return null;
    }
    // component props defined in route
    // the history api
    // current match data including params
    const childProps = Object.assign(Object.assign({}, this.componentProps), { history: this.history, match: this.match });
    // If there is a routerRender defined then use
    // that and pass the component and component props with it.
    if (this.routeRender) {
      return this.routeRender(Object.assign(Object.assign({}, childProps), { component: this.component }));
    }
    if (this.component) {
      const ChildComponent = this.component;
      return index.h(ChildComponent, Object.assign({}, childProps));
    }
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "location": ["computeMatch"]
  }; }
};
activeRouter.ActiveRouter.injectProps(Route, [
  "location",
  "history",
  "historyType",
  "routeViewsUpdated",
]);
Route.style = routeCss;

exports.stencil_route = Route;
