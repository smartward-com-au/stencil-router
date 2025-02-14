import { ComponentInterface } from "../../stencil-public-runtime";
/**
 * Updates the document title when found.
 *
 * @name RouteTitle
 * @description
 */
export declare class RouteTitle implements ComponentInterface {
  el: HTMLElement;
  titleSuffix: string;
  pageTitle: string;
  updateDocumentTitle(): void;
  componentWillLoad(): void;
}
