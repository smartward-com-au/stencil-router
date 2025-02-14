import { Component, Element, Prop, State, h, } from "@stencil/core";
import createHistory from "../../utils/createBrowserHistory";
import createHashHistory from "../../utils/createHashHistory";
import ActiveRouter from "../../global/active-router";
const getLocation = (location, root) => {
  // Remove the root URL if found at beginning of string
  const pathname = location.pathname.indexOf(root) == 0
    ? "/" + location.pathname.slice(root.length)
    : location.pathname;
  return Object.assign(Object.assign({}, location), { pathname });
};
const HISTORIES = {
  browser: createHistory,
  hash: createHashHistory,
};
/**
 * @name Router
 * @module ionic
 * @description
 */
export class Router {
  constructor() {
    this.root = "/";
    this.historyType = "browser";
    // A suffix to append to the page title whenever
    // it's updated through RouteTitle
    this.titleSuffix = "";
    this.routeViewsUpdated = (options = {}) => {
      if (this.history && options.scrollToId && this.historyType === "browser") {
        const elm = this.history.win.document.getElementById(options.scrollToId);
        if (elm) {
          return elm.scrollIntoView();
        }
      }
      this.scrollTo(options.scrollTopOffset || this.scrollTopOffset);
    };
  }
  componentWillLoad() {
    this.history = HISTORIES[this.historyType](this.el.ownerDocument.defaultView);
    this.history.listen((location) => {
      location = getLocation(location, this.root);
      this.location = location;
    });
    this.location = getLocation(this.history.location, this.root);
  }
  scrollTo(scrollToLocation) {
    const history = this.history;
    if (scrollToLocation == null || !history) {
      return;
    }
    if (history.action === "POP" &&
      Array.isArray(history.location.scrollPosition)) {
      requestAnimationFrame(() => {
        if (history &&
          history.location &&
          Array.isArray(history.location.scrollPosition)) {
          history.win.scrollTo(history.location.scrollPosition[0], history.location.scrollPosition[1]);
        }
      });
    }
    // okay, the frame has passed. Go ahead and render now
    requestAnimationFrame(() => {
      history.win.scrollTo(0, scrollToLocation);
    });
  }
  render() {
    if (!this.location || !this.history) {
      return;
    }
    const state = {
      historyType: this.historyType,
      location: this.location,
      titleSuffix: this.titleSuffix,
      root: this.root,
      history: this.history,
      routeViewsUpdated: this.routeViewsUpdated,
    };
    return (h(ActiveRouter.Provider, { state: state },
      h("slot", null)));
  }
  static get is() { return "stencil-router"; }
  static get properties() { return {
    "root": {
      "type": "string",
      "mutable": true,
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
      "attribute": "root",
      "reflect": false,
      "defaultValue": "\"/\""
    },
    "historyType": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "HistoryType",
        "resolved": "\"browser\" | \"hash\"",
        "references": {
          "HistoryType": {
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
      "attribute": "history-type",
      "reflect": false,
      "defaultValue": "\"browser\""
    },
    "titleSuffix": {
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
      "attribute": "title-suffix",
      "reflect": false,
      "defaultValue": "\"\""
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
    }
  }; }
  static get states() { return {
    "location": {},
    "history": {}
  }; }
  static get elementRef() { return "el"; }
}
