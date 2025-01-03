import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    //Some Api calls
    navigate("/");
    alert("Your Are Going To Home Page");
  };

  return (
    <nav>
      <h3>Varun V S</h3>
      <div className="navbar">
        <ul>
          <li onClick={handleClick}>Home</li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
