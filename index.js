const menuIcon = document.querySelector(".menu-icon");
const dropdownMenu = document.querySelector("#dropdownMenu");
menuIcon.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
});

document.querySelector("#year").textContent = new Date().getFullYear();
