const _ = require('underscore');

// Helper function to check null or undefined.
const isNullOrUndefined = (x) => _.isNull(x) || _.isUndefined(x);

const ensureArray = target => {
  if (_.isArray(target)) {
    return target;
  }
  if (target === undefined || target === null) {
    return [];
  }
  return [target];
};

const getSessionToken = (authOptions) => {
  if (authOptions.sessionToken) {
    return authOptions.sessionToken;
  }
  if (
    authOptions.user && typeof authOptions.user.getSessionToken === 'function'
  ) {
    return authOptions.user.getSessionToken();
  }
};

const tap = interceptor => value => ((interceptor(value), value));

module.exports = {
  isNullOrUndefined,
  ensureArray,
  getSessionToken,
  tap,
};
