import '../App.css';
export default function About() {
  return (
    <div className="page-container">
      <div className="content-box fade-in">
        <h1 className="title">About Tech Trimmers</h1>
        <p className="details">
          Tech Trimmers is a project that blends gardening with ICT solutions,
          making garden management smarter and easier.
        </p>
        <p className="details">
          Created by <span className="highlight">Levious Vusi Dhlamini</span>
        </p>
        <p className="details">
          Student Number: <span className="highlight">36831263</span>
        </p>

        {/* Mission statement */}
        <div className="highlight-box">
          <h2 className="subtitle">Our Mission</h2>
          <p>
            To empower gardeners with technology-driven tools that simplify
            planning, irrigation, and maintenance — making gardening accessible
            and sustainable for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
