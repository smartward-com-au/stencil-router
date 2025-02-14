import { Component, Prop, Element, Watch, } from "@stencil/core";
import ActiveRouter from "../../global/active-router";
/**
 * Updates the document title when found.
 *
 * @name RouteTitle
 * @description
 */
export class RouteTitle {
  constructor() {
    this.titleSuffix = "";
    this.pageTitle = "";
  }
  updateDocumentTitle() {
    const el = this.el;
    if (el.ownerDocument) {
      el.ownerDocument.title = `${this.pageTitle}${this.titleSuffix || ""}`;
    }
  }
  componentWillLoad() {
    this.updateDocumentTitle();
  }
  static get is() { return "stencil-route-title"; }
  static get properties() { return {
    "titleSuffix": {
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
      "attribute": "title-suffix",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "pageTitle": {
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
      "attribute": "page-title",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "pageTitle",
      "methodName": "updateDocumentTitle"
    }]; }
}
ActiveRouter.injectProps(RouteTitle, ["titleSuffix"]);
