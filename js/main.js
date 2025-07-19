// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Load data
  if (typeof loadReviews === "function") {
    loadReviews();
  }
  if (typeof loadNews === "function") {
    loadNews();
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector(".header")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    ".feature-card, .instruction-step, .tool-card, .review-card, .feature-highlight, .highlight-card"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Button hover effects
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
    });
  });

  // Hero section parallax effect
  // Removed parallax effect to prevent empty space issue

  // Arcade machines animation
  const machines = document.querySelectorAll(".machine");
  machines.forEach((machine, index) => {
    machine.style.animationDelay = `${index * 0.2}s`;
  });

  // Money animation effects
  const moneyElements = document.querySelectorAll(
    ".money-animation, .coin-spin"
  );
  moneyElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.animationPlayState = "paused";
    });
    element.addEventListener("mouseleave", () => {
      element.style.animationPlayState = "running";
    });
  });

  // Form validation (for contact form)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !message) {
        showNotification("Please fill in all fields.", "error");
        return;
      }

      // Phone validation (basic)
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""))) {
        showNotification("Please enter a valid phone number.", "error");
        return;
      }

      // Simulate form submission
      showNotification("Thank you! We will contact you soon.", "success");
      contactForm.reset();
    });
  }

  // Notification system
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

    // Set background color based on type
    switch (type) {
      case "success":
        notification.style.background = "var(--accent-color)";
        break;
      case "error":
        notification.style.background = "var(--danger-color)";
        break;
      default:
        notification.style.background = "var(--primary-color)";
    }

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 5000);
  }

  // Lazy loading for images
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Escape key to close mobile menu
    if (e.key === "Escape") {
      const mobileMenu = document.getElementById("mobile-menu");
      const burgerMenu = document.getElementById("burger-menu");

      if (mobileMenu && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        burgerMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });

  // Performance optimization: Debounce scroll events
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      // Header scroll effect
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    }, 10);
  });

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  // Arcade-style sound effects (optional)
  const arcadeButtons = document.querySelectorAll(
    ".btn-primary, .feature-card, .tool-card, .highlight-card"
  );
  arcadeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Add arcade-style visual feedback
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "";
      }, 150);
    });
  });

  // Business simulation animations
  const businessElements = document.querySelectorAll(
    ".stat-item, .feature-highlight, .stat"
  );
  businessElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = "scale(1.05)";
      element.style.boxShadow = "0 8px 25px rgba(255, 107, 53, 0.3)";
    });
    element.addEventListener("mouseleave", () => {
      element.style.transform = "";
      element.style.boxShadow = "";
    });
  });

  // Tycoon-style progress indicators
  const progressElements = document.querySelectorAll(".step-number");
  progressElements.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
      element.style.background = "var(--gradient-gold)";
      element.style.transform = "rotate(360deg)";
    });
    element.addEventListener("mouseleave", () => {
      element.style.background = "";
      element.style.transform = "";
    });
  });
});

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
