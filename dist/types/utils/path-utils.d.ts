import { LocationSegments } from '../global/interfaces';
export declare const hasBasename: (path: string, prefix: string) => boolean;
export declare const stripBasename: (path: string, prefix: string) => string;
export declare const stripTrailingSlash: (path: string) => string;
export declare const addLeadingSlash: (path: string) => string;
export declare const stripLeadingSlash: (path: string) => string;
export declare const stripPrefix: (path: string, prefix: string) => string;
export declare const parsePath: (path: string) => LocationSegments;
export declare const createPath: (location: LocationSegments) => string;
export declare const parseQueryString: (query: string) => {
  [key: string]: any;
};
