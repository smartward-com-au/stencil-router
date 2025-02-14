import { Component, Prop, Element, Watch, h, } from "@stencil/core";
import ActiveRouter from "../../global/active-router";
import { matchPath } from "../../utils/match-path";
const getUniqueId = () => {
  return ((Math.random() * 10e16).toString().match(/.{4}/g) || []).join("-");
};
const getMatch = (pathname, url, exact) => {
  return matchPath(pathname, {
    path: url,
    exact: exact,
    strict: true,
  });
};
const isHTMLStencilRouteElement = (elm) => {
  return elm.tagName === "STENCIL-ROUTE";
};
export class RouteSwitch {
  constructor() {
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
    return h("slot", null);
  }
  static get is() { return "stencil-route-switch"; }
  static get properties() { return {
    "group": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "group",
      "reflect": true,
      "defaultValue": "getUniqueId()"
    },
    "scrollTopOffset": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "scroll-top-offset",
      "reflect": false
    },
    "location": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "LocationSegments",
        "resolved": "LocationSegments | undefined",
        "references": {
          "LocationSegments": {
            "location": "import",
            "path": "../../global/interfaces"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "routeViewsUpdated": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(options: RouteViewOptions) => void",
        "resolved": "((options: RouteViewOptions) => void) | undefined",
        "references": {
          "RouteViewOptions": {
            "location": "import",
            "path": "../../global/interfaces"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "location",
      "methodName": "regenerateSubscribers"
    }]; }
}
ActiveRouter.injectProps(RouteSwitch, ["location", "routeViewsUpdated"]);
