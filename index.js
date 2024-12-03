const menuIcon = document.querySelector(".menu-icon");
const dropdownMenu = document.querySelector("#dropdownMenu");

// Toggle dropdown menu when clicking the menu icon
menuIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent event from bubbling up to the document
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
});

// Close the dropdown menu when clicking anywhere else on the page
document.addEventListener("click", () => {
  if (dropdownMenu.style.display === "flex") {
    dropdownMenu.style.display = "none";
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
