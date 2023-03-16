const openMenu = document.getElementById("open-icon");
openMenu.addEventListener("click", function () {
  document.querySelector(".small-menu").style.display = "flex";
  document.querySelector(".small-menu").style.right = "0";
});

const closeMenu = document.getElementById("close-icon");
closeMenu.addEventListener("click", function () {
  document.querySelector(".small-menu").style.right = "-100%";
});