import { ComponentInterface } from "../../stencil-public-runtime";
import { RouterHistory } from "../../global/interfaces";
export declare class Redirect implements ComponentInterface {
  el: HTMLElement;
  history?: RouterHistory;
  root?: string;
  url?: string;
  componentWillLoad(): void;
}
