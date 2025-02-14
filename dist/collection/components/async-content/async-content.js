import { Component, Prop, State, Watch, h } from '@stencil/core';
export class AsyncContent {
  constructor() {
    this.content = '';
  }
  componentWillLoad() {
    if (this.documentLocation != null) {
      return this.fetchNewContent(this.documentLocation);
    }
  }
  fetchNewContent(newDocumentLocation) {
    return fetch(newDocumentLocation)
      .then(response => response.text())
      .then(data => {
      this.content = data;
    });
  }
  render() {
    return (h("div", { innerHTML: this.content }));
  }
  static get is() { return "stencil-async-content"; }
  static get properties() { return {
    "documentLocation": {
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
      "attribute": "document-location",
      "reflect": false
    }
  }; }
  static get states() { return {
    "content": {}
  }; }
  static get watchers() { return [{
      "propName": "documentLocation",
      "methodName": "fetchNewContent"
    }]; }
}
