window.onload = function() {
  var subOrUnsub = window.location.search;
  var subForm = document.forms["newsletterForm"];

  switch (subOrUnsub) {
    case "subscribe":
      subForm.innerHTML += "<p><b>Erfolgreich angemeldet!</b></p>";
      break;
    case "unsubscribe":
      subForm.innerHTML += "<p><b>Erfolgreich abgemeldet!</b></p>";
      break;
  }

};

document.forms["newsletterForm"].onsubmit = function() {
  this.innerHTML = "<p><b>Erfolgreich übertragen!</b></p>" + this.innerHTML;
  var unsub = document.getElementById('unsubscribe').checked;
  var nextURL = document.getElementById("nextURL");

  if (unsub == "true") {
    nextURL.value += "?unsubscribe";
  } else {
    nextURL.value += "?subscribe";
  }
}
