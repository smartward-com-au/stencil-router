import { ComponentInterface } from "../../stencil-public-runtime";
import { RouterHistory, Listener, LocationSegments, MatchResults, Path } from "../../global/interfaces";
/**
 * @name Route
 * @module ionic
 * @description
 */
export declare class RouteLink implements ComponentInterface {
  el: HTMLElement;
  unsubscribe: Listener;
  url?: string;
  urlMatch?: Path;
  activeClass: string;
  exact: boolean;
  strict: boolean;
  /**
   *  Custom tag to use instead of an anchor
   */
  custom: string;
  anchorClass?: string;
  anchorRole?: string;
  anchorTitle?: string;
  anchorTabIndex?: string;
  anchorId?: string;
  history?: RouterHistory;
  location?: LocationSegments;
  root?: string;
  ariaHaspopup?: string;
  ariaPosinset?: string;
  ariaSetsize?: number;
  ariaLabel?: string;
  match: MatchResults | null;
  componentWillLoad(): void;
  computeMatch(): void;
  handleClick(e: MouseEvent): void;
  render(): any;
}
