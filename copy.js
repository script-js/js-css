function copyById(target) {
  var copyText = document.getElementById(target);
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

function copy() {
  this.select();
  this.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// <script src="//js-css.cti.repl.co/scripts/copy.js"></script>