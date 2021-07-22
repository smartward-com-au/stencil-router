import { ComponentInterface } from "../../stencil-public-runtime";
import { RouterHistory, Prompt } from "../../global/interfaces";
export declare class StencilRouterPrompt implements ComponentInterface {
  el: HTMLElement;
  when: boolean;
  message: string | Prompt;
  history?: RouterHistory;
  unblock?: () => void;
  enable(message: string | Prompt): void;
  disable(): void;
  componentWillLoad(): void;
  updateMessage(newMessage: string, prevMessage: string): void;
  disconnectedCallback(): void;
  render(): null;
}
