import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "Black",
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.left}>
        <p>Navbar</p>
        <div>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/Login">Login</Link>
        </div>
      </div>
      <div className={styles.right}>
       
        <div>
          <i className="fa-solid fa-cart-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;