import { RouterHistory } from '../global/interfaces';
export interface CreateHashHistoryOptions {
  getUserConfirmation?: (message: string, callback: (confirmed: boolean) => {}) => {};
  hashType?: 'hashbang' | 'noslash' | 'slash';
  basename?: string;
  keyLength?: number;
}
declare const createHashHistory: (win: Window, props?: CreateHashHistoryOptions) => RouterHistory;
export default createHashHistory;
