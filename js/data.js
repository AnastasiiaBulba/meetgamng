// Sample data structure - in real implementation this would be loaded from JSON files
const siteData = {
  reviews: [
    {
      id: 1,
      author: "ArcadeMaster Pro",
      text: "Finally, a tycoon game that gets arcade management right! The business simulation is incredibly deep - I love how every decision affects my profits. The idle gameplay keeps me engaged even when I'm at work. This is exactly what I've been looking for in a business simulation game!",
      rating: 5,
    },
    {
      id: 2,
      author: "RetroGaming Queen",
      text: "As someone who grew up in arcades, this game hits all the nostalgic buttons while teaching real business skills. The classic machines bring back memories, and the management aspect is surprisingly educational. My kids love watching me build my arcade empire!",
      rating: 5,
    },
    {
      id: 3,
      author: "BusinessWizard",
      text: "This isn't just a game - it's a business education disguised as entertainment! The profit optimization mechanics are spot-on, and the staff management system is brilliant. I've learned more about running a business from this game than from some textbooks.",
      rating: 5,
    },
    {
      id: 4,
      author: "PixelPioneer",
      text: "The perfect blend of nostalgia and strategy! I love collecting classic arcade machines and watching my empire grow. The upgrade system is addictive, and the analytics dashboard helps me make smart business decisions. This game is pure gold!",
      rating: 5,
    },
    {
      id: 5,
      author: "TycoonTitan",
      text: "After playing countless tycoon games, this one stands out for its authenticity. The arcade theme is perfect, and the business mechanics are realistic without being overwhelming. The idle progression keeps me coming back every day!",
      rating: 5,
    },
    {
      id: 6,
      author: "ArcadeEmpire Builder",
      text: "This game has become my daily escape! The strategic depth is incredible - every machine placement matters, every staff hire affects profits. The retro arcade theme is executed perfectly. I've been playing for months and still discover new strategies!",
      rating: 5,
    },
  ],

  news: [
    {
      id: 1,
      title: "New Arcade Machines Update",
      category: "Arcade Empire Updates",
      icon: "🎮",
      date: "April 15, 2025",
      excerpt:
        "We've added 15 new retro arcade machines to our collection, including classic pinball machines and vintage video games. Now you can expand your arcade with even more exciting attractions.",
      fullText:
        "We're excited to announce our biggest arcade machine update yet! We've added 15 new retro arcade machines to our collection, including classic pinball machines and vintage video games. These new machines will allow you to create even more diverse and profitable arcade centers. The pinball machines bring back the golden age of arcade gaming, while the vintage video games offer classic gameplay that appeals to all ages. All existing arcades will remain unchanged, and you can start purchasing these new machines immediately. We've also improved the machine selection interface to make it easier to compare profits and choose the best machines for your empire. Stay tuned for more updates coming soon!<br><br><img src='./depict_center/canter_new1.jpg' alt='New Arcade Machines' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 2,
      title: "Tycoon Spotlight: Empire Builders",
      category: "Arcade Empire Stories",
      icon: "👥",
      date: "June 8, 2025",
      excerpt:
        "Discover amazing arcade empires created by our community members. From small family arcades to massive gaming complexes, see how players are building their virtual business empires.",
      fullText:
        "We're absolutely blown away by the incredible arcade empires our community has been building! This month, we're featuring some of the most impressive arcade centers shared by our players. From cozy family arcades that focus on classic games, to massive gaming complexes with hundreds of machines, our community continues to amaze us with their business acumen. We've seen everything from themed arcades specializing in retro games, to modern entertainment centers with the latest attractions, proving that My Arcade Center is truly a platform for business creativity. Many players have shared that the game has helped them understand business management concepts, with some even using their virtual strategies as inspiration for real business ideas. We love seeing how each person brings their unique vision to arcade management, creating completely different and successful empires.",
    },
    {
      id: 3,
      title: "Performance Improvements & Bug Fixes",
      category: "Arcade Empire Updates",
      icon: "⚡",
      date: "February 22, 2025",
      excerpt:
        "We've optimized the game for smoother performance and fixed several minor bugs. Your arcade management experience should now be even more fluid and enjoyable.",
      fullText:
        "We're constantly working to improve your My Arcade Center experience, and this update brings significant performance improvements and bug fixes. We've optimized the business simulation engine to provide smoother gameplay, especially on older devices. The machine management is now more responsive, and we've reduced loading times between different arcade views. We've also fixed several minor bugs that were affecting the user experience, including issues with profit calculations and staff management. The game should now run more smoothly across all devices, providing an even more enjoyable tycoon experience. We've also improved the auto-save feature to ensure your arcade empire is always protected. These updates are part of our ongoing commitment to providing the best possible business simulation experience.",
    },
    {
      id: 4,
      title: "New Staff Management System",
      category: "Arcade Empire Updates",
      icon: "👥",
      date: "April 3, 2025",
      excerpt:
        "Introducing our new staff management system with 10 different employee types perfect for optimizing your arcade operations. Each staff member brings unique skills to boost your business efficiency.",
      fullText:
        "We're thrilled to introduce our brand new staff management system! This special release features 10 different employee types that are perfect for optimizing your arcade operations. Each staff member has been carefully designed with unique skills and specializations, providing the perfect balance of complexity and accessibility. The employee types range from basic maintenance staff to specialized technicians and marketing experts, ensuring there's something for every arcade strategy. Many of our players have found that hiring the right staff makes all the difference in their arcade's profitability, making it the perfect feature for serious tycoon players. The staff system is designed to be intuitive while providing deep management options. We've also included special training programs for each employee type to help you maximize their potential. This system represents our commitment to providing not just entertainment, but also realistic business management through arcade simulation.<br><br><img src='./depict_center/canter_new2.jpg' alt='Staff Management System' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 5,
      title: "Player Story: From Small Arcade to Gaming Empire",
      category: "Arcade Empire Stories",
      icon: "🏆",
      date: "June 15, 2025",
      excerpt:
        "Read the inspiring story of Alex, a business student who discovered the strategic depth of arcade management and used the game to learn real business concepts.",
      fullText:
        "Today we want to share the inspiring story of Alex, a business student who discovered the strategic depth of arcade management. Alex was struggling with business management concepts in school and discovered My Arcade Center during a particularly difficult semester. He found that the game helped him understand real business principles through hands-on simulation. 'I started playing during study breaks,' Alex shares. 'Even just 30 minutes of arcade management helped me grasp concepts like profit margins, staff optimization, and business scaling that I was learning in class.' Alex's story is just one example of how our game is helping people understand business concepts in an engaging way. He has since built multiple successful arcade empires and has even started a study group with his classmates. 'It's amazing how a game can make complex business concepts so accessible and fun,' he says. Stories like Alex's remind us why we created this game and inspire us to continue improving the experience for all our players.",
    },
    {
      id: 6,
      title: "Advanced Business Analytics Released",
      category: "Arcade Empire Updates",
      icon: "📊",
      date: "February 8, 2025",
      excerpt:
        "New advanced business analytics including profit tracking, customer satisfaction metrics, and performance reports are now available for premium users. Transform your arcade management with professional-grade tools.",
      fullText:
        "We're excited to announce the release of our advanced business analytics for premium users! This major update introduces professional-grade features that will take your arcade management to the next level. The new profit tracking system allows you to analyze revenue streams in detail, while the customer satisfaction metrics help you understand what attracts visitors to your arcade. Performance reports include machine efficiency ratings, staff productivity analysis, and market trend predictions that make your business decisions more informed. We've also added a business history feature that tracks your empire's growth over time, making it easier to identify successful strategies and replicate them. The analytics are designed to be comprehensive while remaining accessible to casual players. Early feedback from our beta testers has been overwhelmingly positive, with many users reporting that these new features have helped them optimize their arcades and increase profits significantly. The advanced analytics are available immediately for all premium subscribers, and we're offering a special discount for new users who want to try these features.",
    },
  ],

  contact: {
    email: "connection@2025 Meetgamng.com",
    phone: "+1 (393) 555-6868",
    address: "87 Main Street, Thunder Bay, Ontario P7A 1A1, Canada",
    mapLocation: "87 Main Street, Thunder Bay, Ontario P7A 1A1, Canada",
  },
};

// Load reviews
function loadReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  if (!reviewsContainer) return;

  siteData.reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    const stars = "★".repeat(review.rating);

    reviewCard.innerHTML = `
            <div class="review-rating">
                <span class="star">${stars}</span>
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">${review.author}</div>
        `;

    reviewsContainer.appendChild(reviewCard);
  });
}

// Load news (for news page)
function loadNews() {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) return;

  // Group articles by category
  const arcadeUpdates = siteData.news.filter(
    (article) => article.category === "Arcade Empire Updates"
  );
  const arcadeStories = siteData.news.filter(
    (article) => article.category === "Arcade Empire Stories"
  );

  // Create Arcade Empire Updates section
  const updatesSection = document.createElement("div");
  updatesSection.className = "news-section-category";
  updatesSection.innerHTML = `
    <h2 class="category-title">Arcade Empire Updates</h2>
    <div class="news-grid-category">
      ${arcadeUpdates
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <div class="news-date">${article.date}</div>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(updatesSection);

  // Create Arcade Empire Stories section
  const storiesSection = document.createElement("div");
  storiesSection.className = "news-section-category";
  storiesSection.innerHTML = `
    <h2 class="category-title">Arcade Empire Stories</h2>
    <div class="news-grid-category">
      ${arcadeStories
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <div class="news-date">${article.date}</div>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(storiesSection);

  // Add event listeners for read more buttons
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const articleId = this.getAttribute("data-article-id");
      const article = siteData.news.find((a) => a.id == articleId);

      if (article) {
        showNewsModal(article);
      }
    });
  });
}

// Show news modal
function showNewsModal(article) {
  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "news-modal-overlay";
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "news-modal-content";
  modalContent.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 2rem;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    transform: scale(0.8);
    transition: transform 0.3s ease;
    margin: 20px;
  `;

  modalContent.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="font-size: 2rem;">${article.icon}</div>
        <div>
          <div style="color: var(--primary-color); font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">${article.category}</div>
          <h2 style="color: var(--dark-gray); font-size: 1.5rem; font-weight: 700; margin: 0;">${article.title}</h2>
        </div>
      </div>
      <button class="close-modal-btn" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--gray); padding: 0.5rem;">×</button>
    </div>
    <div style="color: var(--dark-gray); line-height: 1.7;">${article.fullText}</div>
  `;

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Animate in
  setTimeout(() => {
    modalOverlay.style.opacity = "1";
    modalContent.style.transform = "scale(1)";
  }, 10);

  // Close modal functionality
  const closeBtn = modalContent.querySelector(".close-modal-btn");
  const closeModal = () => {
    modalOverlay.style.opacity = "0";
    modalContent.style.transform = "scale(0.8)";
    setTimeout(() => {
      document.body.removeChild(modalOverlay);
    }, 300);
  };

  closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);
}

// Export functions for use in other scripts
window.loadReviews = loadReviews;
window.loadNews = loadNews;
