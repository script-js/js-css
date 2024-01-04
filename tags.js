function getTags() {
  var hover = document.getElementsByTagName("hover")
  var hovtgt = hover.getAttribute("target")
  hover.onmouseover = function() {
    document.getElementById(hovtgt).style.display = "block";
  }
}