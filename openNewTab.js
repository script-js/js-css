var ntDIV = document.createElement("div")
ntDIV.classList = "openNew";
ntDIV.innerHTML = "open_in_new";
ntDIV.onmouseover = function() {this.innerHTML = "<span style='font-family:sans-serif'>Open in New Tab</span>open_in_new";}
ntDIV.onmouseout = function() {this.innerHTML = "open_in_new";}
document.body.appendChild(ntDIV)
