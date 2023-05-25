function name() {
  window.history.forward(); 
}

setTimeout("name()", 0);

window.onunload = function () { null };