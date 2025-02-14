import { RouterHistory } from '../global/interfaces';
export interface CreateBrowserHistoryOptions {
  getUserConfirmation?: (message: string, callback: (confirmed: boolean) => {}) => {};
  forceRefresh?: boolean;
  keyLength?: number;
  basename?: string;
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
declare const createBrowserHistory: (win: Window, props?: CreateBrowserHistoryOptions) => RouterHistory;
export default createBrowserHistory;
