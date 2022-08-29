import React from "react";
import About from "./About";
import { NavLink, Link } from "react-router-dom";
import logo from "../image/Logo-Horizont.jpeg";
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import image5 from "../image/5.jpg";
import image6 from "../image/6.jpg";
import image7 from "../image/7.jpg";
import image8 from "../image/8.jpg";

export default function Header({ handleLogout }) {
  return (
    <div>
      <div className="background">
        <nav>
          <div className="row">
            <Link to="/">
              <img src={logo} alt="Horizont" className="logo"></img>
            </Link>
            <ul className="main-nav">
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/login">Log in </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={handleLogout}>
                  Log out{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="hero-text-box">
        <h1>
          Welcome!
          <br />
          Restaurant Horizonti
        </h1>

        {/* <button className="btn btn-full">
          <Link to="/menu">Menu</Link>
        </button> */}
      </div>
      <section className="section-features">
        <div className="row">
          <h2>MENU</h2>
          <p className="long-copy">
            Hello, we're Horizont Restaurant, your new premium food restaurant.
            We know you're always busy. No time for cooking. So let us take care
            of that, we're really good at it, we promise!
          </p>
        </div>
      </section>

      <section className="section-meals">
        <ul className="meals-showcase">
          <li>
            <figure className="meal-photo">
              <img
                src={image1}
                alt="Korean bibimbap with egg and vegetables"
              ></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img
                src={image2}
                alt="Simple italian pizza with cherry tomatoes"
              ></img>
            </figure>
          </li>
          <li>
            <figure class="meal-photo">
              <img src={image3} alt="Chicken breast steak with vegetables" />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image4} alt="Autmn pumpkin soup"></img>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img
                src={image5}
                alt="Korean bibimbap with egg and vegetables"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img
                src={image6}
                alt="Healthy baguette with egg and vegetables"
              ></img>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img src={image7} alt="Burger with cheddar and bacon"></img>
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img
                src={image8}
                alt="Granola with cherries and strawberries"
              ></img>
            </figure>
          </li>
        </ul>
      </section>
      <footer>
        <About />
      </footer>
    </div>
  );
}
