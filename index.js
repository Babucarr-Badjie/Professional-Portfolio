// Change Navbar on sroll
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("on-scroll", window.scrollY);
});

// show/hide NavBar Menu
const menu = document.querySelector(".nav-menu");
const menuBotton = document.querySelector("#open-menu");
const closeBotton = document.querySelector("#close-menu");

menuBotton.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBotton.style.display = "inline-block";
  menuBotton.style.display = "none";
});

// close NavBar menu
const closeNavBar = () => {
  menu.style.display = "none";
  closeBotton.style.display = "none";
  menuBotton.style.display = "inline-block";
};
closeBotton.addEventListener("click", closeNavBar);


// ============Open clicked content in the experience ===================

const tabs = document.getElementsByClassName("title-link")
const tabContents = document.getElementsByClassName("experience-content");
function opentab(contentName) {
  for (tabContents of tabContent) {
    tabContent.classList.remove("title-link")
  }

}