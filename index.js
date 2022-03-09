let lastPositionvalue = 0;
let body = document.body;
let topbar = document.getElementById("topbar");

window.addEventListener("scroll", () => {
  let currentPositionvalue = window.pageYOffset;

  if (currentPositionvalue <= 0) {
    body.classList.remove("show_header");
    if (window.innerWidth > 950) {
      topbar.style.display = "block";
    } else {
      topbar.style.display = "none";
    }
  }

  if (
    currentPositionvalue > lastPositionvalue &&
    !body.classList.contains("remove_header")
  ) {
    body.classList.add("remove_header");
    topbar.style.display = "none";
  }
  if (
    currentPositionvalue < lastPositionvalue &&
    body.classList.contains("remove_header")
  ) {
    body.classList.remove("remove_header");
  }
  lastPositionvalue = currentPositionvalue;
});

let gototop = document.querySelector(".gototop");
gototop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
