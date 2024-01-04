var href;
var urlid;
var str;
var l = decodeURI(location.href.replace(href,""))
eval("str = " + atob(l))


function getAttribute(num) {
  if (str[num]) {
    return str[num]
  } else {
    return "null"
    console.log("Couldn't find that URL attribute.")
  }
}