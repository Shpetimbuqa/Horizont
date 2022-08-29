import React from "react";
import { RiMenuLine } from "react-icons/ri";
import { MdOutlineFoodBank } from "react-icons/md";
import { BiDrink } from 'react-icons/bi'
import {RiCake3Line} from 'react-icons/ri'
import {FaIceCream} from 'react-icons/fa'

export default function Menu() {
  return (
    <div className="body">
      <div className="sidebar">
        <div className="logo_name"><h3>Menu</h3></div>
        <div className="bx bx-menu" id="btn">
          <h3>
            <RiMenuLine />
          </h3>
        </div>
        <ul className="nav_list">
          <li>
            <a to="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">
                <MdOutlineFoodBank />
                Ushqim
              </span>
            </a>
            {/* <span className="tooltip">Menu</span> */}
          </li>
          <li>
            <a to="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">
                <BiDrink />
                 Pije
              </span>
            </a>
            {/* <span className="tooltip">Menu</span> */}
          </li>
          <li>
            <a to="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">
                <RiCake3Line />
                Desert
              </span>
            </a>
            {/* <span className="tooltip">Menu</span> */}
          </li>
          <li>
            <a to="#">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">
                <FaIceCream />
                Akullore
              </span>
            </a>
            {/* <span className="tooltip">Menu</span> */}
          </li>
        </ul>
      </div>
      <div className="menu_content">
        <div className="text">Menu</div>
      </div>
    </div>
  );
}
