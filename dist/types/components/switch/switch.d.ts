import { ComponentInterface } from "../../stencil-public-runtime";
import { LocationSegments, MatchResults, RouteViewOptions } from "../../global/interfaces";
interface Child {
  el: HTMLStencilRouteElement;
  match: MatchResults | null;
}
export declare class RouteSwitch implements ComponentInterface {
  el: HTMLElement;
  group: string;
  scrollTopOffset?: number;
  location?: LocationSegments;
  routeViewsUpdated?: (options: RouteViewOptions) => void;
  activeIndex?: number;
  subscribers: Child[];
  componentWillLoad(): void;
  regenerateSubscribers(newLocation: LocationSegments): Promise<void>;
  render(): any;
}
export {};
