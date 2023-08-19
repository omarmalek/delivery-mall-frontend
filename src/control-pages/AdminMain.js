import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderControl from "./Header-Control";
import { useGlobalContext } from "../context";


const AdminPage = () => {
  const { serverIP, serverPort} = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = async () => {
    const url = `http://${serverIP}:${serverPort}/checkAdminAuthentication`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("admintoken"),
        },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      if (!error.response) {
        console.log("الخادم لا يستجيب");
      } else {
        if (error.response.status === 401) {
          console.log("unauthorized!");
        }
        localStorage.removeItem("roleName");// inside else means anyway 
          navigate("/admins");
      }
    }
  };
 
  return (
    <div>
      <HeaderControl />
      <section>
        <br></br>
        <br></br>
        <h1>AdminPage</h1>
        
        <Link to="/admin/orders">Orders</Link>
        <br></br>
        <Link to="/admin/ordres-old">OldOrders</Link>
        <br></br>
        <Link to="/admin/addproduct">newProduct</Link>
        <br></br>
        <Link to="/admin/searchresult">search</Link>
      </section>
    </div>
  );
};

export default AdminPage;
