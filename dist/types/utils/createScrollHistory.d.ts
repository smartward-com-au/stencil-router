declare const createScrollHistory: (win: Window, applicationScrollKey?: string) => {
  set: (key: string, value: [number, number]) => void;
  get: (key: string) => [number, number] | undefined;
  has: (key: string) => boolean;
  capture: (key: string) => void;
};
export default createScrollHistory;
