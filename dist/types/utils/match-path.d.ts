import { MatchOptions, MatchResults } from '../global/interfaces';
/**
 * Public API for matching a URL pathname to a path pattern.
 */
export declare const matchPath: (pathname: string, options?: MatchOptions) => null | MatchResults;
export declare const matchesAreEqual: (a: MatchResults | null, b: MatchResults | null) => boolean | null;
