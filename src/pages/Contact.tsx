import { useState } from 'react';
import '../App.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); // auto-hide after 4s
  };
  return (
    <div className="page-container">
      <div className="content-box fade-in">
        <h1 className="title">Contact Us</h1>
        <p className="details">📧 Email: info@techtrimmers.com</p>
        <p className="details">📞 Phone: +27 123 456 7890</p>
        <p className="details">🌍 Location: Brakpan, Gauteng, South Africa</p>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        {/* Success popup */}
        {submitted && (
          <div className="success-popup">✅ Message sent successfully!</div>
        )}
      </div>
    </div>
  );
}
