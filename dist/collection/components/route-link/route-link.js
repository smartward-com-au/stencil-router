import { Component, Prop, State, Watch, Element, h, } from "@stencil/core";
import { matchPath } from "../../utils/match-path";
import { isModifiedEvent } from "../../utils/dom-utils";
import ActiveRouter from "../../global/active-router";
const getUrl = (url, root) => {
  // Don't allow double slashes
  if (url.charAt(0) == "/" && root.charAt(root.length - 1) == "/") {
    return root.slice(0, root.length - 1) + url;
  }
  return root + url;
};
/**
 * @name Route
 * @module ionic
 * @description
 */
export class RouteLink {
  constructor() {
    this.unsubscribe = () => {
      return;
    };
    this.activeClass = "link-active";
    this.exact = false;
    this.strict = true;
    /**
     *  Custom tag to use instead of an anchor
     */
    this.custom = "a";
    this.match = null;
  }
  componentWillLoad() {
    this.computeMatch();
  }
  // Identify if the current route is a match.
  computeMatch() {
    if (this.location) {
      this.match = matchPath(this.location.pathname, {
        path: this.urlMatch || this.url,
        exact: this.exact,
        strict: this.strict,
      });
    }
  }
  handleClick(e) {
    if (isModifiedEvent(e) || !this.history || !this.url || !this.root) {
      return;
    }
    e.preventDefault();
    return this.history.push(getUrl(this.url, this.root));
  }
  // Get the URL for this route link without the root from the router
  render() {
    let anchorAttributes = {
      class: {
        [this.activeClass]: this.match !== null,
      },
      onClick: this.handleClick.bind(this),
    };
    if (this.anchorClass) {
      anchorAttributes.class[this.anchorClass] = true;
    }
    if (this.custom === "a") {
      anchorAttributes = Object.assign(Object.assign({}, anchorAttributes), { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex, "aria-haspopup": this.ariaHaspopup, id: this.anchorId, "aria-posinset": this.ariaPosinset, "aria-setsize": this.ariaSetsize, "aria-label": this.ariaLabel });
    }
    return (h(this.custom, Object.assign({}, anchorAttributes),
      h("slot", null)));
  }
  static get is() { return "stencil-route-link"; }
  static get properties() { return {
    "url": {
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
      "attribute": "url",
      "reflect": false
    },
    "urlMatch": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Path",
        "resolved": "(string | RegExp)[] | RegExp | string | undefined",
        "references": {
          "Path": {
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
      "attribute": "url-match",
      "reflect": false
    },
    "activeClass": {
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
      "attribute": "active-class",
      "reflect": false,
      "defaultValue": "\"link-active\""
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
    "strict": {
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
      "attribute": "strict",
      "reflect": false,
      "defaultValue": "true"
    },
    "custom": {
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
        "text": "Custom tag to use instead of an anchor"
      },
      "attribute": "custom",
      "reflect": false,
      "defaultValue": "\"a\""
    },
    "anchorClass": {
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
      "attribute": "anchor-class",
      "reflect": false
    },
    "anchorRole": {
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
      "attribute": "anchor-role",
      "reflect": false
    },
    "anchorTitle": {
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
      "attribute": "anchor-title",
      "reflect": false
    },
    "anchorTabIndex": {
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
      "attribute": "anchor-tab-index",
      "reflect": false
    },
    "anchorId": {
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
      "attribute": "anchor-id",
      "reflect": false
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
    "root": {
      "type": "string",
      "mutable": true,
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
      "attribute": "root",
      "reflect": false
    },
    "ariaHaspopup": {
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
      "attribute": "aria-haspopup",
      "reflect": false
    },
    "ariaPosinset": {
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
      "attribute": "aria-posinset",
      "reflect": false
    },
    "ariaSetsize": {
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
      "attribute": "aria-setsize",
      "reflect": false
    },
    "ariaLabel": {
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
      "attribute": "aria-label",
      "reflect": false
    }
  }; }
  static get states() { return {
    "match": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "location",
      "methodName": "computeMatch"
    }]; }
}
ActiveRouter.injectProps(RouteLink, ["history", "location", "root"]);
