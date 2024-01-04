document.write("<link rel='stylesheet' href='https://js-css.cti.repl.co/styles/pdf.css'/><script src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js'></script>")

var myState = {
  pdf: null,
  currentPage: 1,
  zoom: 1
}

function render() {
  myState.pdf.getPage(myState.currentPage).then((page) => {
    var canvas = document.getElementById("pdf_renderer");
    var ctx = canvas.getContext('2d');
    var viewport = page.getViewport(myState.zoom);
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    page.render({
      canvasContext: ctx,
      viewport: viewport
    });
  });
  lodimg.style = "display:none";
}

function createPDF(pdflink) {
  document.write('<cti-pdf><div id="my_pdf_viewer"><div id="canvas_container"><img id="lodimg" src="//news-cattomato.jakobsteele.repl.co/cnd/images/CT_Loading.gif"><canvas id="pdf_renderer"></canvas></div><div id="navigation_controls"><button id="go_previous">Previous</button><input id="current_page" value="1" type="number" min="1" max="100"/><button id="go_next">Next</button></div><div id="zoom_controls"><button id="zoom_in">+</button><button id="zoom_out">-</button></div></div></cti-pdf>')
  document.getElementById('go_previous').addEventListener('click', (e) => {
  if(myState.pdf == null || myState.currentPage == 1) 
    return;
    myState.currentPage -= 1;
    document.getElementById("current_page").value = myState.currentPage;
    render();
  });
 
  document.getElementById('go_next').addEventListener('click', (e) => {
  if(myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages) 
    return;
    myState.currentPage += 1;
    document.getElementById("current_page").value = myState.currentPage;
    render();
  });
  document.getElementById('current_page').addEventListener('change', (e) => {
  if(myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages) 
    return;
    myState.currentPage = document.getElementById('current_page').valueAsNumber;
    render();
  });
  document.getElementById('current_page').addEventListener('keypress', (e) => {
  if(myState.pdf == null) return;      
    // Get key code
    var code = (e.keyCode ? e.keyCode : e.which);
          
    // If key code matches that of the Enter key
    if(code == 13) {
    var desiredPage = 
    document.getElementById('current_page').valueAsNumber;
                                  
    if(desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
      myState.currentPage = desiredPage;
      document.getElementById("current_page").value = desiredPage;
      render();
    }
  }
  });
 
  document.getElementById('zoom_in').addEventListener('click', (e) => {
  if(myState.pdf == null) return;
    myState.zoom += 0.5;
    render();
  });
 
  document.getElementById('zoom_out').addEventListener('click', (e) => {
  if(myState.pdf == null) return;
    myState.zoom -= 0.5;
    render();
  });
  pdfjsLib.getDocument(pdflink).then((pdf) => {
    myState.pdf = pdf;
    current_page.max = pdf.numPages
    render();
  });
}