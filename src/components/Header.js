import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
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
      {/* <section className="section-testimonials">
        <div className="row">
          <h2>About</h2>
          <th className="col span-1-of-3">
            <h2>Horizont</h2>
            <blockquote>
              Lokacioni i Restaurant “HORIZONT” <br/>është në rrugën Shpetim
              Bojku-Tabje, Pejë
            </blockquote>
          </th>
          <th className="col span-1-of-3">
            <h2 className="orari-position">Orari i Punës</h2>
            <ul>
              <li class="d-flex">
                <span>E hënë: 09:00 - 23:00</span>
              </li>
              <li class="d-flex">
                <span>E martë: 09:00 - 23:00</span>
              </li>
              <li class="d-flex">
                <span>E mërkurë: 09:00 - 23:00</span>
              </li>
              <li class="d-flex">
                <span>E enjte: 09:00 - 23:00</span>
              </li>
              <li class="d-flex">
                <span>E premte: 09:00 - 23:00</span>
              </li>
              <li class="d-flex">
                <span>E shtunë: 09:00 - 23:00</span>
              </li>
              <li class="d-flex">
                <span>E diel: 09:00 - 23:00</span>
              </li>
            </ul>
          </th>
          <th className="col span-1-of-3">
            <h2 style={{textAlign: 'right'}}>Instagram</h2>
            <blockquote>
              
            </blockquote>
          </th>
        </div>
      </section> */}
      {/* <section className="section-testimonials">
        <h2>About</h2>
        <div className="row">
          <div className="col span-1-of-3">
            <p className="horizonti-position">Horizont</p>
            <p>
              Lokacioni i Restaurant “HORIZONT”
              <br /> është në rrugën Shpetim Bojku-Tabje,
              <br /> Pejë
            </p>
          </div>
          <div className="col span-1-of-3">
            <p className="orari-position">hello</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
