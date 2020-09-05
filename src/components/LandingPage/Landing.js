import React from "react";
import "./landing.css";
import Footer from "../Footer/Footer";

export default function Landing() {
  return (
    <React.Fragment>
      {/* Section 1 */}
      <div className="hero">
        <div className="hero__container">
          <h1>
            Need Exposure? <br />
            Let's help you <span>Converge</span>
          </h1>
          <p>
            Converge is a platform for developers looking to exhibit their
            projects <br />
            and connect with recruiters. Converge makes sure all your work is
            accessible in one <br />
            place, when you need to impress that potential employer.
          </p>
          <button className="primary-cta-button">SIGN UP</button>
        </div>
      </div>
      {/* section 2 */}
      <div className="section-2">
        <h4 className="heading">HERE'S HOW</h4>
        <div className="section-2__container">
          {/* box 1 */}
          <div className="box" id="box-1">
            <i class="fas fa-users"></i>
            <h3>Join a Program</h3>
            <p>
              Participation in a development bootcamp program or internship
              qualifies you to use the platform
            </p>
          </div>
          {/* box 2 */}
          <div className="box" id="box-2">
            <i class="fas fa-code"></i>
            <h3>Build a Product</h3>
            <p>
              Create a real-life solution as participant in your choice of
              program
            </p>
          </div>
          {/* box 3 */}
          <div className="box" id="box-3">
            <i class="fas fa-handshake"></i>
            <h3>Converge</h3>
            <p>
              Link your project/product/solution on your converge profile for
              recruiters to explore and hire you
            </p>
          </div>
        </div>
        <button className="primary-cta-button" id="section-2__cta">
          READ FAQs
        </button>
      </div>

      {/* section 3 */}
      <div className="section-3">
        <h4 className="heading">SEE WHAT'S TRENDING</h4>
        <div className="section-3__container">
          <div className="box" id="box-1">
            <h2>PAYONEER</h2>
            <h5>FINANCE | 2019</h5>
            <h5>FACEBOOK SDG PROGRAM</h5>
            <a href="#">
              <p>EBUKA NWAJU, JULIE KORST AND 3 OTHERS</p>
            </a>
            <button>VIEW</button>
          </div>
          <div className="box" id="box-2">
            <h2>PAYONEER</h2>
            <h5>FINANCE | 2019</h5>
            <h5>FACEBOOK SDG PROGRAM</h5>
            <a href="#">
              <p>EBUKA NWAJU, JULIE KORST AND 3 OTHERS</p>
            </a>
            <button>VIEW</button>
          </div>
          <div className="box" id="box-3">
            <h2>PAYONEER</h2>
            <h5>FINANCE | 2019</h5>
            <h5>FACEBOOK SDG PROGRAM</h5>
            <a href="#">
              <p>EBUKA NWAJU, JULIE KORST AND 3 OTHERS</p>
            </a>
            <button>VIEW</button>
          </div>
          <div className="box" id="box-4">
            <h2>PAYONEER</h2>
            <h5>FINANCE | 2019</h5>
            <h5>FACEBOOK SDG PROGRAM</h5>
            <a href="#">
              <p>EBUKA NWAJU, JULIE KORST AND 3 OTHERS</p>
            </a>
            <button>VIEW</button>
          </div>
        </div>
        <button className="primary-cta-button" id="section-3__cta">
          EXPLORE
        </button>
      </div>

      {/* section 4 */}
      <div className="section-4">
        {/* Box 1 */}
        <div className="box-1">
          <img
            src="https://res.cloudinary.com/theebuka/image/upload/v1599041947/corinne-kutz-q8h7S0CnENg-unsplash_ehprrd.jpg"
            alt="background"
          />
        </div>
        {/* Box 2 */}
        <div className="box-2">
          <h5>WANT MORE OPPORTUNITIES?</h5>
          <h2>
            USE CONVERGE TO FIND <br />
            RECRUITERS NOW
          </h2>
          <p className="paragraph">
            Entry level positions for Junior Developers are hard to find and
            even harder to get. Let your project do the talking for you
            Recruitment made easy!
          </p>
          <button className="primary-cta-button">SIGN UP</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
