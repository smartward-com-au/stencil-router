import { Component, Prop, Element, Watch, h, } from "@stencil/core";
import { matchPath, matchesAreEqual } from "../../utils/match-path";
import ActiveRouter from "../../global/active-router";
/**
 * @name Route
 * @module ionic
 * @description
 */
export class Route {
  constructor() {
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
    return (this.match = matchPath(newLocation.pathname, {
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
      !matchesAreEqual(this.match, this.previousMatch) &&
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
      return h(ChildComponent, Object.assign({}, childProps));
    }
  }
  static get is() { return "stencil-route"; }
  static get originalStyleUrls() { return {
    "$": ["route.css"]
  }; }
  static get styleUrls() { return {
    "$": ["route.css"]
  }; }
  static get properties() { return {
    "group": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | null",
        "resolved": "null | string",
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
      "defaultValue": "null"
    },
    "componentUpdated": {
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
    },
    "match": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "MatchResults | null",
        "resolved": "MatchResults | null",
        "references": {
          "MatchResults": {
            "location": "import",
            "path": "../../global/interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "null"
    },
    "url": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | string[]",
        "resolved": "string | string[] | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "url",
      "reflect": false
    },
    "component": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "component",
      "reflect": false
    },
    "componentProps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ [key: string]: any }",
        "resolved": "undefined | { [key: string]: any; }",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{}"
    },
    "exact": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "exact",
      "reflect": false,
      "defaultValue": "false"
    },
    "routeRender": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(props: RouteRenderProps) => any",
        "resolved": "((props: RouteRenderProps) => any) | undefined",
        "references": {
          "RouteRenderProps": {
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
    "routeViewsUpdated": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "(\n    options: RouteViewOptions\n  ) => void",
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
    "history": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "RouterHistory",
        "resolved": "RouterHistory | undefined",
        "references": {
          "RouterHistory": {
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
    "historyType": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "HistoryType",
        "resolved": "\"browser\" | \"hash\" | undefined",
        "references": {
          "HistoryType": {
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
      },
      "attribute": "history-type",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "location",
      "methodName": "computeMatch"
    }]; }
}
ActiveRouter.injectProps(Route, [
  "location",
  "history",
  "historyType",
  "routeViewsUpdated",
]);
