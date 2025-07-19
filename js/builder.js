// Header Builder
function buildHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return;

  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
        <div class="header-content">
            <a href="./" class="logo">
                <div class="logo-icon">🎮</div>
                meetgamng.com
            </a>
            
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="./" class="nav-link">Arcade Empire</a></li>
                    <li><a href="./arcade-news.html" class="nav-link">Arcade News</a></li>
                    <li><a href="./arcade-contacts.html" class="nav-link">Contact</a></li>
                    <li><a href="./arcade-disclaimer.html" class="nav-link">Tycoon's Guide</a></li>
                </ul>
            </nav>
            
            <button class="burger-menu" id="burger-menu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </button>
        </div>
        
        <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-nav-list">
                <li><a href="./" class="mobile-nav-link">Arcade Empire</a></li>
                <li><a href="./arcade-news.html" class="mobile-nav-link">Arcade News</a></li>
                <li><a href="./arcade-contacts.html" class="mobile-nav-link">Contact</a></li>
                <li><a href="./arcade-disclaimer.html" class="mobile-nav-link">Tycoon's Guide</a></li>
            </ul>
        </div>
    `;

  headerPlaceholder.appendChild(header);

  // Mobile menu functionality
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burgerMenu && mobileMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Footer Builder
function buildFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) return;

  const footer = document.createElement("footer");
  footer.className = "footer";

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>About My Arcade Center</h3>
                    <p>Build and manage your own arcade empire in this exciting business simulation game. Start small and grow into the ultimate gaming tycoon!</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="./">Arcade Empire</a></li>
                        <li><a href="./arcade-news.html">Arcade News</a></li>
                        <li><a href="./arcade-contacts.html">Contact</a></li>
                        <li><a href="./arcade-disclaimer.html">Tycoon's Guide</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <a href="mailto:connection@meetgamng.com">connection@meetgamng.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <a href="tel:+1-393-555-6868">+1 (393) 555-6868</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <span>87 Main Street, Thunder Bay, Ontario P7A 1A1, Canada</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <span class="copyright-year">${currentYear}</span> meetgamng.com - All rights reserved</p>
                <div style="margin-top: var(--spacing-sm);">
                    <a href="./arcade-cookies.html">Cookie Policy</a> | 
                    <a href="./arcade-privacy.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    `;

  footerPlaceholder.appendChild(footer);
}

// Initialize builders when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
});
