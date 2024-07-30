var sfx = {
  play: function(url) {
    var sfxPlayer = new Audio(url);
    sfxPlayer.addEventListener("canplaythrough", (event) => {
  sfxPlayer.play();
});

  },
  addMenuSounds: function(url) {
    var elems = document.querySelectorAll("button")
    var addfx = function() {
    Object.keys(elems).forEach(function(k) {
      elems[k].addEventListener("click",function() {
        sfx.play(url)
      }
    })
    }
    addfx()
    const observer = (new MutationObserver(addfx)).observe(document.body, {
  subtree: true,
  childList: true,
});
  }
}
