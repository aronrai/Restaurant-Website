const menuIcon = document.querySelector(".menu-icon");
const dropdownMenu = document.querySelector("#dropdownMenu");
const menuLinks = document.querySelectorAll("#dropdownMenu a"); // Select all anchor tags inside the dropdown

// Function to toggle sidebar visibility
function toggleMenu() {
  dropdownMenu.classList.toggle("open");
}

// Add click event listener to menu icon
menuIcon.addEventListener("click", (event) => {
  toggleMenu();
  event.stopPropagation(); // Prevent event from bubbling up to the document
});

// Close the menu if clicked anywhere outside of the menu
document.addEventListener("click", (event) => {
  if (
    !dropdownMenu.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    dropdownMenu.classList.remove("open");
  }
});

// Close the menu and scroll to the target section when an anchor tag is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior of jumping directly to the section
    const targetId = link.getAttribute("href"); // Get the target ID from href
    const targetElement = document.querySelector(targetId); // Find the corresponding section

    if (targetElement) {
      dropdownMenu.classList.remove("open"); // Close the sidebar
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
    }
  });
});

//Whatsapp from

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Phone number to send the message to (include country code, e.g., 919876543210 for India)
    const phoneNumber = "919564120965";

    // Create the WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}. ${message}`;

    // Redirect to WhatsApp
    window.open(
      `https://wa.me/${919564120965}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  });

document.querySelector("#year").textContent = new Date().getFullYear();
