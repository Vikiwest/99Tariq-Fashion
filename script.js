// //Hide Header
// const header = document.getElementById("mainHeader");
// let lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {
//   if (window.scrollY > lastScrollY) {
//     // Scrolling down
//     header.classList.add("hidden");
//   } else {
//     // Scrolling up
//     header.classList.remove("hidden");
//   }
//   lastScrollY = window.scrollY;
// });


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
