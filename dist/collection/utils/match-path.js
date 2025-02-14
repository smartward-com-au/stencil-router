import { pathToRegexp } from './path-to-regex';
import { valueEqual } from './location-utils';
let cacheCount = 0;
const patternCache = {};
const cacheLimit = 10000;
// Memoized function for creating the path match regex
const compilePath = (pattern, options) => {
  const cacheKey = `${options.end}${options.strict}`;
  const cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  const cachePattern = JSON.stringify(pattern);
  if (cache[cachePattern]) {
    return cache[cachePattern];
  }
  const keys = [];
  const re = pathToRegexp(pattern, keys, options);
  const compiledPattern = { re, keys };
  if (cacheCount < cacheLimit) {
    cache[cachePattern] = compiledPattern;
    cacheCount += 1;
  }
  return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */
export const matchPath = (pathname, options = {}) => {
  if (typeof options === 'string') {
    options = { path: options };
  }
  const { path = '/', exact = false, strict = false } = options;
  const { re, keys } = compilePath(path, { end: exact, strict });
  const match = re.exec(pathname);
  if (!match) {
    return null;
  }
  const [url, ...values] = match;
  const isExact = pathname === url;
  if (exact && !isExact) {
    return null;
  }
  return {
    path,
    url: path === '/' && url === '' ? '/' : url,
    isExact,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};
export const matchesAreEqual = (a, b) => {
  if (a == null && b == null) {
    return true;
  }
  if (b == null) {
    return false;
  }
  return a && b &&
    a.path === b.path &&
    a.url === b.url &&
    valueEqual(a.params, b.params);
};
