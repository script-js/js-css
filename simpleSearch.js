function search(resultLocation,searchBox,arrayTitles,arrayLinks) {
  var sskeyword = searchBox.value
  var sscontval = "<p></p>";
  if (arrayTitles.length != arrayLinks.length) {
    alert("SimpleSearch Error: Title array length does not equal link array length")
  } else {
    resultLocation.innerHTML = '<p>Searching...</p><div id="Progress_Status" style="width: 50%;background-color: #ddd;"><div id="myprogressBar" style="width: 2%;height: 20px;background-color: #4CAF50;"></div></div>'
    for (var i = 0; i != arrayTitles.length; i++) {
      updatePB()
      if (arrayTitles[i].includes(sskeyword)) {
        sscontval = sscontval + "<a href='" + arrayLinks[i] + "'>" + arrayTitles[i] + "</a><p></p>"
      }
      if (i == arrayTitles.length - 1) {
        if (sscontval == "<p></p>") {
          sscontval = sscontval + "No results found"
        }
        resultLocation.innerHTML = sscontval;
      }
    }
  }
}

function updatePB() {
  var element = document.getElementById("myprogressBar");   
  var width = 1;
  width++; 
  element.style.width = width + '%'; 
}