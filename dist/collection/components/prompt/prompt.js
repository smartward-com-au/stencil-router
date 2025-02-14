import { Component, Prop, Element, Watch, State, } from "@stencil/core";
import ActiveRouter from "../../global/active-router";
export class StencilRouterPrompt {
  constructor() {
    this.when = true;
    this.message = "";
  }
  enable(message) {
    if (this.unblock) {
      this.unblock();
    }
    if (this.history) {
      this.unblock = this.history.block(message);
    }
  }
  disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = undefined;
    }
  }
  componentWillLoad() {
    if (this.when) {
      this.enable(this.message);
    }
  }
  updateMessage(newMessage, prevMessage) {
    if (this.when) {
      if (!this.when || prevMessage !== newMessage) {
        this.enable(this.message);
      }
    }
    else {
      this.disable();
    }
  }
  disconnectedCallback() {
    this.disable();
  }
  render() {
    return null;
  }
  static get is() { return "stencil-router-prompt"; }
  static get properties() { return {
    "when": {
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
      "attribute": "when",
      "reflect": false,
      "defaultValue": "true"
    },
    "message": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | Prompt",
        "resolved": "((location: LocationSegments, action: string) => string) | string",
        "references": {
          "Prompt": {
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
      "attribute": "message",
      "reflect": false,
      "defaultValue": "\"\""
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
    }
  }; }
  static get states() { return {
    "unblock": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "message",
      "methodName": "updateMessage"
    }, {
      "propName": "when",
      "methodName": "updateMessage"
    }]; }
}
ActiveRouter.injectProps(StencilRouterPrompt, ["history"]);
