window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    document.getElementById("tourist-nav").style.background = "#2980b9";
  } else {
    document.getElementById("tourist-nav").style.background = "transparent";
  }
};