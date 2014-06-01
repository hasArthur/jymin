/**
 * Log values to the console, if it's available.
 */
var log = function (
  message,
  object
) {
    if (window.console && console.log) {
        // Prefix the first argument (hopefully a string) with the marker.
        if (typeof object == 'undefined') {
            console.log(message);
        }
        else {
            console.log(message, object);
        }
    }
};
