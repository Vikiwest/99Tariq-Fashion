// Display loading screen on page load
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 1200); // Loading screen will stay visible for 1 seconds
});

// Show loading screen when navigating to another page
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default navigation temporarily
    document.getElementById("loading-screen").style.display = "flex";
    setTimeout(() => {
      window.location.href = this.href; // Redirect after delay
    }, 1000); // Adjust delay as needed
  });
});

//ProductName and Image linked to whatsapp
function buyNow(productName) {
  var phoneNumber = "+2347071315170"; // Replace with your WhatsApp number
  var productImage = document.getElementById("productImage").src;
  var message = encodeURIComponent(
    "Hello, I am interested in " +
      productName +
      ". Here is the product image: " +
      productImage
  );
  var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + message;
  window.open(whatsappUrl, "_blank");
}

//CURRENT PAGE INDICATOR
document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL path
  const currentPath = window.location.pathname.split("/").pop();

  // Get all links in the navigation menu
  const links = document.querySelectorAll("nav a");

  // Loop through the links and highlight the active one
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});
