import React from "react";
import  '../styles/Header-Control.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/shopping-cart-bag-logo-260nw-small.png";
import {FaSearch, FaBars, FaHeart, FaUserAlt} from "react-icons/fa"
import { useGlobalContext } from "../context";
import { Link,useNavigate } from "react-router-dom";


function HeaderControl() {
  const navigate = useNavigate();
  const { showSearchBar, toggleNavbar, showNvbar,center } = useGlobalContext();

  // const linksContainerRef = useRef(null);
  // const navbarRef = useRef(null);
  const logout = () => {
    localStorage.setItem("admintoken", "");
    navigate("/admins");
  };
  //____________________________UI__________________________________-
  return (
    <div className="header-control-comp">
      <div className="logo">
        <Link to="/" className="logo-name">
          <img src={logo} alt="" />
           ديليفري مول 
        </Link>
      </div>
     
      <div className={showNvbar ? "navbar active" : "navbar"}>
        <Link to="/admins">ادارة التطبيق</Link>
     
      </div>
      <div className="icons">
        <i className="fa fa-bars" id="menu-bars" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </i>
        <i className="fa fa-search" id="search-icon" onClick={showSearchBar}><FaSearch/></i>
       
        <i className="fa-solid fa-user"><FaUserAlt/></i>
      </div>
      <div className="logout">
          <button type="button" onClick={logout}>
            تسجيل الخروج
          </button>
        </div>
    </div>
  );
}

export default HeaderControl;
