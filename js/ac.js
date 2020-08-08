var acc = document.getElementsByClassName("accordion");
var accHelp = document.getElementsByClassName("accordion--help");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-slide");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < accHelp.length; i++) {
  accHelp[i].addEventListener("click", function() {
    this.classList.toggle("active-slide--help");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}