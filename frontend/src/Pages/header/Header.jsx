// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
// import { FaBars } from 'react-icons/fa';
// import { AiOutlineClose } from 'react-icons/ai';
// import axios from 'axios';
// import './Header.css'

// export default function Header() {
//   const { setUserInfo, userInfo } = useContext(UserContext);
//   const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
  
//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get(`https://restaurantwebsite-mernstack.onrender.com/users/profile`, {
//           withCredentials: true // Include credentials (cookies) with the request
//         });
//         setUserInfo(response.data);
//       } catch (error) {
//         console.error('Error fetching user info:', error);
//       }
//     };

//     fetchUserInfo();
//   }, [setUserInfo]);

//   const username = userInfo?.username;

//   const closeNavHandler = () => {
//     if (window.innerWidth < 800) {
//       setIsNavShowing(false);
//     } else {
//       setIsNavShowing(true);
//     }
//   };

//   return (
//     <header>
//       <nav className="nav-item">
//         <div className="container nav__container">
//           <Link to='/' className='nav__logo' onClick={closeNavHandler}>
//            <h1>FlavorFusion</h1>
//           </Link>
//           {isNavShowing && (
//             <ul className="nav__menu">
//               {username ? (
//                 <>
//                   <li><Link to='/reservation' onClick={closeNavHandler}>Reservation</Link></li>
//                   <li><Link to='/' >Logout</Link></li>
//                   <li><Link to='/' onClick={closeNavHandler}>{username}</Link></li>
//                 </>
//               ) : (
//                 <>
//                   <li><Link to="/login">Login</Link></li>
//                   <li><Link to="/register">Register</Link></li>
//                 </>
//               )}
//             </ul>
//           )}
//           <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
//             {isNavShowing ? <AiOutlineClose /> : <FaBars />}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }



import React, { useState,useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import './Header.css'

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [show, setShow] = useState(false);

    useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`https://restaurantwebsite-mernstack.onrender.com/users/profile`, {
          withCredentials: true // Include credentials (cookies) with the request
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [setUserInfo]);

  const username = userInfo?.username;

  return (
    <>
      <nav>
        <div className="logo">FlavorFusion</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            
          {username ? (
                <>
                  <Link to='/reservation' >Reservation</Link>
                  
                </>
              ) : (
                <>
                  
                  
                </>
              )}

         
            
            
          </div>
          {username ? (
            
            <>
            <Link to='/mainpage'><button className="menuBtn">Logout</button></Link>
            
            </>
          ) : (<Link to="/login" className="menuBtn">Login</Link>)}
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Header;
