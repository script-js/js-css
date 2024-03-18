var inactivitySecs = 0;

function inactivity(seconds,func) {
  window.addEventListener('mousemove', function() {
    inactivitySecs = 0;
  });
  window.addEventListener('keydown', function() {
    inactivitySecs = 0;
  });
  var check = setInterval(function() {
    inactivitySecs = inactivitySecs + 1;
    if (inactivitySecs > seconds) {
      func()
    }
  },1000)
}
