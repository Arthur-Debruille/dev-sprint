import React from "react";

import Logo from '../components/utils/Logo'
import Navigation from "./utils/Navigation";
import '../styles/components/header.scss';


const Header = () => {
  return (
    <header>
      <Logo/>
      <Navigation/>
    </header>
  );
};

export default Header;
