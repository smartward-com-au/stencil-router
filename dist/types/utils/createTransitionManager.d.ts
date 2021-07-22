import { LocationSegments, Prompt } from '../global/interfaces';
declare const createTransitionManager: () => {
  setPrompt: (nextPrompt: Prompt | string | null) => () => void;
  confirmTransitionTo: (location: LocationSegments, action: string, getUserConfirmation: Function, callback: Function) => void;
  appendListener: (fn: Function) => () => void;
  notifyListeners: (...args: any[]) => void;
};
export default createTransitionManager;
