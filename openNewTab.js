var ntDIV = document.createElement("div")
var sslink = document.createElement("link")
sslink.href = "https://script-js.github.io/js-css/openNewTab.css";
sslink.rel = "stylesheet";
ntDIV.classList = "openNew";
ntDIV.innerHTML = "open_in_new";
ntDIV.onclick = function() {window.open(location.href)}
document.body.appendChild(sslink)
document.body.appendChild(ntDIV)
