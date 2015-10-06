document.forms["newsletterForm"].onsubmit = function(){
    this.innerHTML = "<p>Erfolgreich übertragen!</p>" + this.innerHTML;
    return false;
}
