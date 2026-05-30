import './App.css';
import { Link } from 'react-router-dom';
{
  /* Slide bar navigation */
}
export default function Navbar() {
  return (
    <nav className="slide-bar">
      <h1 className="nav-title">🌱 Tech Trimmers</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
