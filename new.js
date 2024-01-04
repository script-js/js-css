function find() {
  var frame = document.getElementById("myframe")
  var input = document.getElementById("bar")
  frame.src = input.value;
  if (frame.src.status == 404) {
    frame.src = "404.html"
  }
}

function hideC() {
  var target = document.getElementById("controls")
  target.style.display = "none";
  var otarget = document.getElementById("l")
  l.style.display = "block";
}

function showC() {
  var target = document.getElementById("controls")
  target.style.display = "block";
  var otarget = document.getElementById("l")
  l.style.display = "none";
}