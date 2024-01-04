var importText;
var setupI = 0;
var exportI = 0;
var data;

function download_txt(textToSave,fname) {
  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text;base64,' + btoa(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = fname + '.cookieexport';
  hiddenElement.click();
}

function cookieExport(filename) {
  var txtcontent = "document.cookie = '" + document.cookie + "'; data = " + JSON.stringify(localStorage) + ";";
  download_txt(txtcontent,filename)
}

function cookieExportVar() {
  return "document.cookie = '" + document.cookie + "'; data = " + JSON.stringify(localStorage) + ";";
}

function cookieImport(input) {
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(input.files[0])
  }
  eval(importText)
  setTimeout(function() {
    Object.keys(data).forEach(function (k) {
      localStorage.setItem(k, JSON.stringify(data[k]).replace('"','').replace('"',''));
    });
    alert("Import Successful")
  }, 1000)
}

function placeFileContent(file) {
	readFileContent(file).then(content => {
  	 importText = content;
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}