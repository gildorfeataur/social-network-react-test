import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dialogs">Dialogs</NavLink>
      </nav>
    </header>
  );
}

export default Header;