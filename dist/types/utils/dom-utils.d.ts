export declare const getConfirmation: (win: Window, message: string, callback: (confirmed: boolean) => {}) => {};
export declare const isModifiedEvent: (ev: MouseEvent) => boolean;
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
export declare const supportsHistory: (win: Window) => boolean;
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
export declare const supportsPopStateOnHashChange: (nav: Navigator) => boolean;
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
export declare const supportsGoWithoutReloadUsingHash: (nav: Navigator) => boolean;
export declare const isExtraneousPopstateEvent: (nav: Navigator, event: any) => boolean;
export declare const storageAvailable: (win: any, type: 'localStorage' | 'sessionStorage') => boolean;
