import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div className="footer" styles={{ Color: "white" }}>
      <Navbar bg="dark" variant="dark">
        Created By
        <i class="fa-solid fa-heart"></i>
        <a
          href="https://www.linkedin.com/in/kabeerchaturvedi/"
          target="_blank"
          rel="noreferrer"
        >
          kabeerchaturvedi
        </a>
        <i class="fa-solid fa-copyright"></i>2023
        <strong>
          Online<span>Restro</span>
        </strong>
      </Navbar>
    </div>
  );
};

export default Footer;
