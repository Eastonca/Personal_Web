import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Style from './Header.module.scss'

function Header() {
  return (
    <div className={Style.header}>
      <Navbar></Navbar>
    </div>
  );
}

export default Header;
