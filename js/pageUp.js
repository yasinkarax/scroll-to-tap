var scrollFunc = function() {
  var scroll = window.scrollY;
  var scrollSize = 600;
  var upDisplay = document.getElementById('up').style;
  if (scroll >= scrollSize) {
    upDisplay.display = 'block';
  } else {
    upDisplay.display = 'none';
  }
};

window.addEventListener("scroll", scrollFunc);

function pageUp() {
  document.body.scrollTop = 0; // For safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, ıe and opera
}