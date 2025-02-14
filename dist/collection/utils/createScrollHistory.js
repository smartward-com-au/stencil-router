import { storageAvailable } from './dom-utils';
const createScrollHistory = (win, applicationScrollKey = 'scrollPositions') => {
  let scrollPositions = new Map();
  const set = (key, value) => {
    scrollPositions.set(key, value);
    if (storageAvailable(win, 'sessionStorage')) {
      const arrayData = [];
      scrollPositions.forEach((value, key) => {
        arrayData.push([key, value]);
      });
      win.sessionStorage.setItem('scrollPositions', JSON.stringify(arrayData));
    }
  };
  const get = (key) => {
    return scrollPositions.get(key);
  };
  const has = (key) => {
    return scrollPositions.has(key);
  };
  const capture = (key) => {
    set(key, [win.scrollX, win.scrollY]);
  };
  if (storageAvailable(win, 'sessionStorage')) {
    const scrollData = win.sessionStorage.getItem(applicationScrollKey);
    scrollPositions = scrollData ?
      new Map(JSON.parse(scrollData)) :
      scrollPositions;
  }
  if ('scrollRestoration' in win.history) {
    history.scrollRestoration = 'manual';
  }
  return {
    set,
    get,
    has,
    capture
  };
};
export default createScrollHistory;
