// Cookie Banner functionality
function initCookieBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  if (!cookieBanner) return;

  // Check if cookies were already accepted
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (!cookiesAccepted) {
    // Show cookie banner after a short delay
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 1000);
  }
}

// Accept cookies function
function acceptCookies() {
  const cookieBanner = document.getElementById("cookie-banner");

  // Store acceptance in localStorage
  localStorage.setItem("cookiesAccepted", "true");

  // Hide banner with animation
  if (cookieBanner) {
    cookieBanner.style.transform = "translateY(100%)";
    setTimeout(() => {
      cookieBanner.style.display = "none";
    }, 300);
  }
}

// Initialize cookie banner when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initCookieBanner();
});

// Make acceptCookies function globally available
window.acceptCookies = acceptCookies;
