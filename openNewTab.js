var ntDIV = document.createElement("div")
var sslink = document.createElement("link")
sslink.href = "https://script-js.github.io/js-css/openNewTab.css";
sslink.rel = "stylesheet";
ntDIV.classList = "openNew";
ntDIV.innerHTML = "open_in_new";
ntDIV.onmouseover = function() {this.innerHTML = "<span style='font-family:sans-serif'>Open in New Tab</span>open_in_new";}
ntDIV.onmouseout = function() {this.innerHTML = "open_in_new";}
ntDIV.onclick = function() {window.open(location.href)}
document.body.appendChild(sslink)
document.body.appendChild(ntDIV)
