var devtluse = true;
function enablectilog() {
document.getElementById("cti-login-button").onclick = function() {
  var ctiascanner = document.createElement("div")
  ctiascanner.innerHTML = "<div id='cti_authchecker'>Press your CTI login bookmarklet to continue.<br>Or, log in with a code.<br><input id='cti_pwdcode'><button onclick=" + '"' + "if (cti_pwdcode.value == atob(pwdencyrpted)) {cti_authchecker.innerHTML = 'Logged In!';devtluse = false}" + '"' + ">Submit</button></div>";
  ctiascanner.style = "border: 2px solid green; position: absolute; left: 50%; background: magenta; top: 50%;";
  ctiascanner.setAttribute("id","lbox")
  document.body.appendChild(ctiascanner)
  setInterval(function() {
    if (cti_authchecker.innerHTML == "Logged In!" && devtluse == false) {
      eval(cmdwhendone)
      lbox.style = "display:none"
    }
    if (cti_authchecker.innerHTML == "Logged In!" && devtluse == true) {
      location.replace("//js-css.cti.repl.co/asecno.html")
    }
    if (cti_authchecker.innerHTML != "Logged In!" && devtluse == false) {
      location.replace("//js-css.cti.repl.co/asecno.html")
    }
  }, 1000)
}
}