import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/shopping-cart-bag-logo-260nw-small.png";
import { useGlobalContext } from "../context";
import { Link,useNavigate } from "react-router-dom";
import './Header-Control.css'

function HeaderControl() {
  const navigate = useNavigate();
  const { showSearchBar, toggleNavbar, showNvbar,center } = useGlobalContext();

  // const linksContainerRef = useRef(null);
  // const navbarRef = useRef(null);
  const logout = () => {
    localStorage.setItem("admintoken", "");
    navigate("/admins");
  };
  return (
    <header>
      <div className="logo">
        <Link to="/" className="logo-name">
          <img src={logo} alt="" />
          غزة ديليفري
        </Link>
      </div>
      <div>
        <h4>  مركز التسوق :   {center.name}</h4>
      </div>
      <div className={showNvbar ? "navbar active" : "navbar"}>
        <Link to="/admins">ادارة التطبيق</Link>
        {/* <Link to="/set">موظف التجهيز</Link> */}
        {/* <Link to="/dv">موظف الديليفري</Link> */}
      </div>
      <div className="icons">
        <i className="fa fa-bars" id="menu-bars" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </i>
        <i className="fa fa-search" id="search-icon" onClick={showSearchBar}></i>
        <Link to="#" className="fas fa-heart"></Link>
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="logout">
          <button type="button" onClick={logout}>
            تسجيل الخروج
          </button>
        </div>
    </header>
  );
}

export default HeaderControl;
