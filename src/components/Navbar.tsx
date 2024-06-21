import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const styles:any = {
            ul: {
                display: 'flex',
                flexDirection: 'row',
                listStyle: 'none',
                gap: '10px',
                padding: 0,
                margin: 0,
              },
      }


  return (
    <nav>
      <ul style={styles.ul}>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
