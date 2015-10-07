window.onload = function() {
  var subOrUnsub = window.location.search;
  var subForm = document.forms["newsletterForm"];

  switch (subOrUnsub) {
    case "?subscribe":
      subForm.innerHTML += "<p><b>Erfolgreich angemeldet!</b></p>";
      break;
    case "?unsubscribe":
      subForm.innerHTML += "<p><b>Erfolgreich abgemeldet!</b></p>";
      break;
  }
};

document.forms["newsletterForm"].onsubmit = function() {
  var unsub = document.getElementById('unsubscribe').checked;
  var nextURL = document.getElementById("nextURL");
  var baseURL = window.location.href;
  baseURL = baseURL.split("?")[0];

  if (unsub) {
    nextURL.value = baseURL + "?unsubscribe";
  } else {
    nextURL.value = baseURL + "?subscribe";
  }
}
