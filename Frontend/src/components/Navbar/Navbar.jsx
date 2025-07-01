import React from "react";
import Style from './Navbar.module.scss';

function Navbar() {
  return (
    <div>
      <nav>
        <ul className={Style.bar}>
          <li>
            <a href="#" className={Style.li}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={Style.li}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={Style.li}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className={Style.li}>
              Careers
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar