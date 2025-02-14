/**
 * TS adaption of https://github.com/pillarjs/path-to-regexp/blob/master/index.js
 */
export interface RegExpOptions {
  sensitive?: boolean;
  strict?: boolean;
  end?: boolean;
  delimiter?: string;
  delimiters?: string | string[];
  endsWith?: string | string[];
}
export interface ParseOptions {
  delimiter?: string;
  delimiters?: string | string[];
}
export interface Key {
  name: string | number;
  prefix: string | null;
  delimiter: string | null;
  optional: boolean;
  repeat: boolean;
  pattern: string | null;
  partial: boolean;
}
export interface PathFunctionOptions {
  encode?: (value: string) => string;
}
export declare type Token = string | Key;
export declare type Path = string | RegExp | Array<string | RegExp>;
export declare type PathFunction = (data?: {
  [key: string]: any;
}, options?: PathFunctionOptions) => string;
/**
 * Parse a string for the raw tokens.
 */
export declare const parse: (str: string, options?: ParseOptions | undefined) => Token[];
/**
 * Compile a string to a template function for the path.
 */
export declare const compile: (str: string, options?: ParseOptions | undefined) => PathFunction;
/**
 * Expose a method for transforming tokens into the path function.
 */
export declare const tokensToFunction: (tokens: Token[]) => PathFunction;
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
export declare const tokensToRegExp: (tokens: Token[], keys?: Key[] | undefined, options?: RegExpOptions | undefined) => RegExp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
export declare const pathToRegexp: (path: Path, keys: Key[], options: RegExpOptions) => RegExp;
