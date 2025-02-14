import { LocationSegments, RouterHistory, RouteViewOptions, HistoryType } from './interfaces';
export interface ActiveRouterState {
  historyType: HistoryType;
  location: LocationSegments;
  titleSuffix: string;
  root: string;
  history?: RouterHistory;
  routeViewsUpdated: (options: RouteViewOptions) => void;
}
declare const _default: {
  Provider: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{
    state: ActiveRouterState;
  }>;
  Consumer: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{}>;
  injectProps: (Cstr: any, fieldList: import("@stencil/state-tunnel/dist/types/declarations").PropList<ActiveRouterState>) => void;
};
export default _default;
