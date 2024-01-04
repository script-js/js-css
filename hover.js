function pairhoversee(controlerId,target) {
  controlerId.onmouseover = function() {
    target.style.display = "block";
  }
  controlerId.onmouseout = function() {
    target.style.display = "none";
  }
}

function pairhovercolor(target,color1,color2) {
  target.style.color = color2;
  target.onmouseover = function() {
    target.style.color = color1;
  }
  target.onmouseout = function() {
    target.style.color = color2;
  }
}

function pairhoverseeclick(controlerId,target) {
  controlerId.onclick = function() {
    target.style.display = "block";
    controlerId.onclick = function() {pairhoverseeclick2(controlerId,target)}
  }

}

function pairhoverseeclick2(controlerId,target) {
  controlerId.onclick = function() {
    target.style.display = "none";
    controlerId.onclick = function() {pairhoverseeclick(controlerId,target)}
  }
}