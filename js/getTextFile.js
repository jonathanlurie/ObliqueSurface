var getTextFile = function(url, successHandler, errorHandler) {
var xhr = typeof XMLHttpRequest != 'undefined'
  ? new XMLHttpRequest()
  : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', url, true);
xhr.onload = function() {
  var status;
  var data;
  // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
  if (xhr.readyState == 4) { // `DONE`
    status = xhr.status;
    if (status == 200) {
      successHandler && successHandler(xhr.responseText);
    } else {
      errorHandler && errorHandler(status);
    }
  }
};

xhr.onerror = function(e) {
  errorHandler && errorHandler(e);
  
}

xhr.send();
};
