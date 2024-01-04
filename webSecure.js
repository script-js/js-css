function disableIframes() {
  if (window.self != window.top) {
    if (document.title) {
      document.body.innerHTML = "Sorry, but " + document.title + " (" + location.href + ") is not avalible to be embedded.<br><a href='" + location.href + "' target='_blank'>Open in a new tab</a>"
    } else {
      document.body.innerHTML = "Sorry, but " + location.href + " is not avalible to be embedded.<br><a href='" + location.href + "' target='_blank'>Open in a new tab</a>"
    }
  }
}

function s(href,value) {
  eval(atob(value));
  if (location.href != href) {
    document.body.innerHTML = "Hmm. This isn't the right site!<br><a href='" + href + "'>Go there</a>";
  }
}