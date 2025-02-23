import React from "react";
import "./App.css"; // Import CSS for styling

function App() {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">JobFinder</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#jobs">Jobs</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="cta-button">Sign In</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>
            Join thousands of companies and candidates who trust JobFinder to
            connect talent with opportunity.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Job title or keyword" />
            <input type="text" placeholder="Location" />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose JobFinder?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Easy to Use</h3>
            <p>Our platform is designed to be intuitive and user-friendly.</p>
          </div>
          <div className="card">
            <h3>Wide Range of Jobs</h3>
            <p>Explore thousands of job listings across various industries.</p>
          </div>
          <div className="card">
            <h3>Fast Hiring</h3>
            <p>Get connected with employers quickly and efficiently.</p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="jobs">
        <h2>Featured Jobs</h2>
        <div className="job-listings">
          <div className="job-card">
            <h3>Software Engineer</h3>
            <p>Company: TechCorp</p>
            <p>Location: Remote</p>
            <button>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Product Manager</h3>
            <p>Company: Innovate Inc.</p>
            <p>Location: New York</p>
            <button>Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Data Scientist</h3>
            <p>Company: DataWorks</p>
            <p>Location: San Francisco</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"JobFinder helped me land my dream job in just two weeks!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial">
            <p>
              "The platform is so easy to use, and the job listings are always
              up-to-date."
            </p>
            <p>- Jane Smith</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2023 JobFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
