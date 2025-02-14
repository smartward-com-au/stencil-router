import { Component, Prop, Element } from "@stencil/core";
import ActiveRouter from "../../global/active-router";
// Get the URL for this route link without the root from the router
const getUrl = (url, root) => {
  // Don't allow double slashes
  if (url.charAt(0) == "/" && root.charAt(root.length - 1) == "/") {
    return root.slice(0, root.length - 1) + url;
  }
  return root + url;
};
export class Redirect {
  componentWillLoad() {
    if (this.history && this.root && this.url) {
      return this.history.replace(getUrl(this.url, this.root));
    }
  }
  static get is() { return "stencil-router-redirect"; }
  static get properties() { return {
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
    }
  }; }
  static get elementRef() { return "el"; }
}
ActiveRouter.injectProps(Redirect, ["history", "root"]);
