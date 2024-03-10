setTimeout(function() {
  var elemList = document.querySelector(".selector")
  Object.keys(elemList).forEach(function (k) {
    elemList[k].addEventListener('click',function() {this.select()})
  })
},1000)
