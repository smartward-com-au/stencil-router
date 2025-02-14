import { ComponentInterface } from "../../stencil-public-runtime";
import { RouterHistory, LocationSegments, MatchResults, RouteViewOptions, HistoryType, RouteRenderProps } from "../../global/interfaces";
/**
 * @name Route
 * @module ionic
 * @description
 */
export declare class Route implements ComponentInterface {
  group: string | null;
  componentUpdated?: (options: RouteViewOptions) => void;
  match: MatchResults | null;
  url?: string | string[];
  component?: string;
  componentProps?: {
    [key: string]: any;
  };
  exact: boolean;
  routeRender?: (props: RouteRenderProps) => any;
  scrollTopOffset?: number;
  routeViewsUpdated?: (options: RouteViewOptions) => void;
  location?: LocationSegments;
  history?: RouterHistory;
  historyType?: HistoryType;
  el: HTMLStencilRouteElement;
  componentDidRerender: Function | undefined;
  scrollOnNextRender: boolean;
  previousMatch: MatchResults | null;
  computeMatch(newLocation: LocationSegments): MatchResults | null | undefined;
  loadCompleted(): Promise<void>;
  componentDidUpdate(): Promise<void>;
  componentDidLoad(): Promise<void>;
  render(): any;
}
