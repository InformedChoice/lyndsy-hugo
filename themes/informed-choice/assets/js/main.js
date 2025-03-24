// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get the mobile menu button, close button, and mobile menu element
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenuCloseButton = document.querySelector(".mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  // Function to open the mobile menu
  function openMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove("hidden");
    }
  }

  // Function to close the mobile menu
  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  }

  // Add click event listener to the mobile menu button
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", openMenu);
  }

  // Add click event listener to the mobile menu close button
  if (mobileMenuCloseButton) {
    mobileMenuCloseButton.addEventListener("click", closeMenu);
  }

  // Close menu when clicking on menu items (optional)
  const mobileMenuItems = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
  mobileMenuItems.forEach(function (item) {
    item.addEventListener("click", closeMenu);
  });
});

// Audience detection and redirection (optional)
// You can add logic here to remember user selections
// or redirect based on UTM parameters
