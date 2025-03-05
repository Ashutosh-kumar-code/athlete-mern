import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = ({toggleAuthApi, settoggleAuthApi}) => {
  const navigate = useNavigate();
  const [webToken, setwebToken] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("athlete_web_token");
    if (savedName) {
      setwebToken(savedName);
    }
  }, [toggleAuthApi]);

  const handleLogout = () => {
    localStorage.removeItem("athlete_web_token");
    setwebToken("");
    settoggleAuthApi(!toggleAuthApi);
    navigate('/login');
  }

  return (
    <header className="flex justify-center items-center sm:justify-end bg-blue-600">
      <nav>
        <ul className="gap-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {
            webToken ? <>
              <li>
            <Link to="/athelete">Athelete</Link>
          </li>
            <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="#" onClick={handleLogout} >Logout</Link>
          </li>
            </> : 
            <>
             <li>
            <Link to="/sign-up">Signup</Link>
          </li>
          <li>
            <Link to="/login" >Login</Link>
          </li>
            </>
          }
          
        
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
