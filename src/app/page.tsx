'use client';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <main className="home-container">
      <header className="header">
        <div className="profile-pic">👤</div>
        <nav className="tabs">
          <span className="active-tab">For You</span>
          <span>Featured</span>
          <span>Top Stories</span>
        </nav>
        <div className="menu">☰</div>
      </header>

      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-cards">
          <div className="card">
            <img src="https://tse4.mm.bing.net/th/id/OIP.BOBhFM7UqQNhOaD9FJKWJAHaEK?pid=Api&P=0&h=180" alt="Latest News" />
            <p>Cutting-Edge Technology, Security, and Data Trends</p>
          </div>
        </div>
      </section>

      <section className="topics">
        <h3>Popular Topics</h3>
        <div className="topic-list">
          {['Lifestyle', 'Travel', 'Sports', 'Cuisine'].map((topic) => (
            <div key={topic} className="topic-card">
              <div className="topic-icon">📌</div>
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </section>

    <section className="recent-search">
  <h3>Recent Search</h3>

  <div className="recent-item">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      alt="Search 1"
    />
    <div>
      <p>Bel-Air anchored by a multi-level mansion property</p>
      <small>By Lukas · June 06, 2018</small>
    </div>
  </div>

  <div className="recent-item">
    <img
      src="https://media.cntraveler.com/photos/598339c9b7a86962e8e27c5d/master/pass/Paris_GettyImages-601763009.jpg"
      alt="Search 2"
    />
    <div>
      <p>10 Travel Destinations You Shouldn’t Miss in 2025</p>
      <small>By Emma · June 12, 2025</small>
    </div>
  </div>

  <div className="recent-item">
    <img
      src="https://the-tech-trend.com/wp-content/uploads/2023/06/Smart-Home-Technologies.jpg"
      alt="Search 3"
    />
    <div>
      <p>Top 5 Smart Home Gadgets That Changed My Life</p>
      <small>By Alex · July 01, 2025</small>
    </div>
  </div>

  <div className="recent-item">
    <img
      src="https://tse2.mm.bing.net/th/id/OIP.LT8evOjXSNFNdO2zT_GqLgHaEK?pid=Api&P=0&h=180"
      alt="Search 4"
    />
    <div>
      <p>Beginner’s Guide to Meditation & Mindfulness</p>
      <small>By Nisha · July 10, 2025</small>
    </div>
  </div>

  <div className="recent-item">
    <img
      src="https://extension.okstate.edu/articles/images/heart_health_banner.jpg"
      alt="Search 5"
    />
    <div>
      <p>Healthy Eating: Simple Recipes to Boost Energy</p>
      <small>By Raj · July 15, 2025</small>
    </div>
  </div>
</section>


      <footer className="footer-links">
        <Link href="/user/listofblogs">📚 View Blogs</Link> |{' '}
  

  
        <Link href="/admin/login">🔐Admin Login</Link> |{' '}
      </footer>
    </main>
  );
}
<style jsx>{`
  .recent-search .recent-item {
    display: flex;
    gap: 0.75rem;
    background: white;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 0.75rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .recent-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
  }
  .recent-item p {
    font-weight: bold;
  }
`}</style>
