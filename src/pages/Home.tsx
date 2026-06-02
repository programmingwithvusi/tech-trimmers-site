export default function Home() {
  const siteUrl = 'https://tech-trimmers-site.netlify.app'; // replace with your live URL
  const accessedDate = new Date().toLocaleDateString();

  return (
    <div className="page-container home-hero">
      {/* Hero Section */}
      <div className="hero-banner">
        <h1 className="hero-title">🌱 Gardening Made Easy</h1>
        <p className="hero-subtitle">Smart solutions for modern gardens</p>
      </div>

      {/* Content Box */}
      <div className="content-box fade-in">
        <h2 className="subtitle">Project Details</h2>
        <div className="details highlight-box">
          <p>Unisa – ICT3642 Business Informatics</p>
          <p>
            Name: <span className="highlight">Levious Vusi Dhlamini</span>
          </p>
          <p>
            Student Number: <span className="highlight">36831263</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <a href="/TechTrimmers.pdf" download className="download-btn">
            📥 Download PDF Citation Document
          </a>
          <a
            href="/ViewMarkedAssignment.pdf"
            download
            className="download-btn citation-btn"
          >
            📥 Download PDF Feedback Document
          </a>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Tech Trimmers</p>
          <p className="citation">
            View Online Citation: <a href={siteUrl}>{siteUrl}</a>
          </p>
          <p>Accessed on {accessedDate}</p>
        </footer>
      </div>
    </div>
  );
}
