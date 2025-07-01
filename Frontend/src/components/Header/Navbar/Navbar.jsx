import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="bar">
          <li>
            <a href="#" className="li">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="li">
              About
            </a>
          </li>
          <li>
            <a href="#" className="li">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="li">
              Careers
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar