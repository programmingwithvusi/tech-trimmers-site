export default function Home() {
  const siteUrl = 'https://tech-trimmers-site.netlify.app'; // replace with your live URL
  const accessedDate = new Date().toLocaleDateString();
  return (
    <div className="page-container">
      {/* Sticky header */}

      <div className="content-box">
        <h2 className="subtitle">Gardening made easy</h2>
        <div className="details">
          <p>Unisa – ICT3642 Business Informatics</p>
          <p>
            Name: <span className="highlight">Levious Vusi Dhlamini</span>
          </p>
          <p>
            Student Number: <span className="highlight">36831263</span>
          </p>
        </div>
        <div className="button-group">
          <a href="/TechTrimmers.pdf" download className="download-btn">
            📥 Download PDF Citation Document
          </a>
          <></>
          <a
            href="/ViewMarkedAssignment.pdf"
            download
            className="download-btn citation-btn"
          >
            📥 Download PDF Feedback Document
          </a>
        </div>
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
