var focusedElement;

on('a,button,input,select,textarea', 'focus', function (element) {
  var focusMethod = element.focus;
  if (focusMethod) {
    focusedElement = element;
    removeTimeout(focusMethod);
  }
});

on('a,button,input,select,textarea', 'blur', function (element) {
  var focusMethod = element.focus;
  if (focusMethod) {
    addTimeout(focusMethod, function () {
      if (focusedElement == element) {
        focusedElement = null;
      }
    });
  }
});
