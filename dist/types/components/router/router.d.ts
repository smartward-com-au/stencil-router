import { ComponentInterface } from "../../stencil-public-runtime";
import { LocationSegments, HistoryType, RouterHistory, RouteViewOptions } from "../../global/interfaces";
/**
 * @name Router
 * @module ionic
 * @description
 */
export declare class Router implements ComponentInterface {
  el: HTMLElement;
  root: string;
  historyType: HistoryType;
  titleSuffix: string;
  scrollTopOffset?: number;
  location?: LocationSegments;
  history?: RouterHistory;
  componentWillLoad(): void;
  routeViewsUpdated: (options?: RouteViewOptions) => void;
  scrollTo(scrollToLocation?: number): void;
  render(): any;
}
