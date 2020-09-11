import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer__main">
      {/* Box 1 */}
      <div className="navigation">
        <h4>NAVIGATION</h4>
        <div className="links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>

          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>

          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="mailto: abc@example.com">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="tel:1123456789">
            <i class="fas fa-phone"></i>
          </a>
        </div>
      </div>

      {/* Box 2 */}
      <div className="general">
        <h4>GENERAL</h4>
        <div className="links">
          <ul>
            <NavLink to="/about">

            <li>
              <a href="#">About</a>
            </li>
            </NavLink>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Hiring</a>
            </li>
          </ul>
        </div>
        <div className="other-info">
          <p>
            {" "}
            All Rights Reserved © 2020 Converge Inc.
            <br />
            Made With ❤️ In Africa
          </p>
        </div>
      </div>
    </div>
  );
}
