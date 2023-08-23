import React, { useRef } from "react";
import logo from "../images/shopping-cart-bag-logo-260nw-small.png";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import {FaSearch, FaBars, FaHeart, FaUserAlt} from "react-icons/fa"

function Header() {
  const {
    showSearchBar,
    toggleNavbar,
    showNvbar,
    //customer,
  } = useGlobalContext();

  const navbarRef = useRef(null);

  return (
    <header>
      <div className="logo">
        <Link to="/" className="logo-name">
          <img src={logo} alt="logo" />
           ديليفري مول
        </Link>
      </div>

      <div className={showNvbar ? "navbar active" : "navbar"} ref={navbarRef}>
      <Link to="/main" className="active">الرئيسية</Link>
       <Link to="/" >
          مراكز التسوق
        </Link>
        
        <Link to="#">أسعار التوصيل</Link>
        <Link to={`/customerhistory`}> الطلبات السابقة</Link>
        <Link to="/admins"> Testing</Link>
      </div>
      <div className="icons">
        <i className="fa fa-bars" id="menu-bars" onClick={toggleNavbar}>
        <FaBars/>
        </i>
        <i
          className="fa fa-search"
          id="search-icon"
          onClick={showSearchBar}
        >
          <FaSearch/>
        </i>
        <Link to="#" className="fas fa-heart"><FaHeart /></Link>
        <Link to="/login" className="fa-solid fa-user"><FaUserAlt/></Link>
      </div>
    </header>
  );
}

export default Header;
