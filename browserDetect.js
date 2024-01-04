// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

var isChromium = !!window.chrome;

function getBrowser() {
  if (isChrome || isChromium) {
    return "CHROMIUM"
  } else if (isFirefox) {
    return "FIREFOX"
  } else if (isSafari) {
    return "SAFARI"
  } else if (isIE) {
    return "IE"
  } else if (isEdge) {
    return "EDGEHTML"
  } else {
    return false
  }
}

function getBrowserExt() {
  if (isChrome) {
    return "CHROME"
  } else if (isOpera) {
    return "OPERA"
  } else if (isEdgeChromium) {
    return "EDGECHROMIUM"
  } else if (isFirefox) {
    return "FIREFOX"
  } else if (isSafari) {
    return "SAFARI"
  } else if (isIE) {
    return "IE"
  } else if (isEdge) {
    return "EDGEHTML"
  } else if (isChromium) {
    return "CHROMIUM"
  } else {
    return false
  }
}