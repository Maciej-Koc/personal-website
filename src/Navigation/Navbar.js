import "./Navbar.css";
import { ReactComponent as GitHub } from "./github-brands.svg";

export default function NavBar() {
  return (
    <nav className="navbar ">
      <ul className="navbar-links">
        <li className="logo">Maciej</li>
        <li>Work</li>
        <li>Contact Me</li>
        <li>
          <a href="https://github.com/Maciej-Koc">
            <GitHub className="github-logo" href="www.google.com" />
          </a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
