var ntDIV = document.createElement("div")
ntDIV.classList = "openNew";
ntDIV.innerHTML = "open_in_new";
ntDIV.onmouseover = function() {this.innerHTML = "open_in_new <span style='font-family:sans-serif'>Open in New Tab</span>";}
document.body.appendChild(ntDIV)
