import React, { useState } from "react";
import { data } from "../../restApi.json";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">FlavorFusion</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {/* {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))} */}
            <Link>Home</Link>
            <Link to='/'>About us</Link>
            <Link>Services</Link>
            <Link >Team</Link>
            <Link to='/reservation'>Reservation</Link>
          </div>
          <Link to='/mainpage'><button className="menuBtn">OUR MENU</button></Link>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
