/**
 * Return true if it's a string.
 */
var isString = function (
  object
) {
    return typeof object == 'string';
};

/**
 * Return true if the string contains the given substring.
 */
var containsString = function (
  string,
  substring
) {
    return ('' + string).indexOf(substring) > -1;
};

/**
 * Trim the whitespace from a string.
 */
var trimString = function (
  string
) {
  return ('' + string).replace(/^\s+|\s+$/g, '');
};

/**
 * Return a string, with asterisks replaced by values from a replacements array.
 */
var decorateString = function (
  string,
  replacements
) {
    string = '' + string;
    forEach(replacements, function(replacement) {
        string = string.replace('*', replacement);
    });
    return string;
};

/**
 * Reduce a string to its alphabetic characters.
 */
var extractLetters = function (
  string
) {
    return ('' + string).replace(/[^a-z]/ig, '');
};

/**
 * Reduce a string to its numeric characters.
 */
var extractNumbers = function (
  string
) {
    return ('' + string).replace(/[^0-9]/g, '');
};

/**
 * Returns a query string generated by serializing an object and joined using a delimiter (defaults to '&')
 */
var buildQueryString = function (
  object
) {
  var queryParams = [];
  forIn(object, function(value, key) {
    queryParams.push(escape(key) + '=' + escape(value));
  });
  return queryParams.join('&');
};

/**
 * Return the browser version if the browser name matches or zero if it doesn't.
 */
var getBrowserVersionOrZero = function (
  browserName
) {
    var match = new RegExp(browserName + '[ /](\\d+(\\.\\d+)?)', 'i').exec(navigator.userAgent);
    return match ? +match[1] : 0;
};

