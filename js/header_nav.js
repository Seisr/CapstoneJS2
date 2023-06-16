var navBar = document.getElementById("navList");
var openBar = document.getElementById("open");
var closeBar = document.getElementById("closer");
function windowResize(breakpoint) {
  // If media query matches
  if (breakpoint.matches) {
    navBar.classList.add("changeBar");
    openBar.classList.remove("none");
    closeBar.classList.add("none");
  } else {
    navBar.classList.remove("changeBar");
    openBar.classList.add("none");
    closeBar.classList.add("none");
  }
}
var breakpoint = window.matchMedia("(max-width: 768px)");
// Call listener function at run time
windowResize(breakpoint);
// Attach listener function on state changes
breakpoint.addEventListener("change", () => {
  console.log(breakpoint);
  windowResize(breakpoint);
});

openBar.addEventListener("click", function () {
  console.log("hello");
  navBar.classList.remove("changeBar");
  closeBar.classList.remove("none");
  openBar.classList.add("none");
});
closeBar.addEventListener("click", function () {
  navBar.classList.add("changeBar");
  openBar.classList.remove("none");
  closeBar.classList.add("none");
});
