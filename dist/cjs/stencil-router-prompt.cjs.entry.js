'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eaad315e.js');
const activeRouter = require('./active-router-05f0f1fd.js');

const StencilRouterPrompt = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "message": ["updateMessage"],
    "when": ["updateMessage"]
  }; }
};
activeRouter.ActiveRouter.injectProps(StencilRouterPrompt, ["history"]);

exports.stencil_router_prompt = StencilRouterPrompt;
