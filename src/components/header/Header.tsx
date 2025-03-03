import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="flex justify-center items-center sm:justify-end">
      <nav>
        <ul className="gap-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/athelete">Athelete</Link>
          </li>
          <li>
            <Link to="/sign-up">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
