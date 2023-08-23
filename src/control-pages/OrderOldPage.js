import React from "react";
import OrderView from "./order-view";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import ServerError from "../ServerError";
import HeaderControl from "./Header-Control";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function OrderOld() {
  const { center} = useGlobalContext();
  
  const [loading, setLoading] = useState(true);
  const [serverStuck, setServerStuck] = useState(false);
  const [oldOrders, setOldOrders] = useState([]);
  useEffect(() => {
    fetchSetterOrders();
  }, []);
  const fetchSetterOrders = async () => {
    let pageIndex = 0;
    let pageSize = 10;
    const url = `http://${center.serverIP}:${center.serverPort}/admin/controloldorders/${pageIndex}/${pageSize}`;
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("admintoken"),
        },
        withCredentials: true,
      });
      setLoading(false);
      setOldOrders(response.data);
    } catch (error) {
      if (!error.response) {
        console.log("Connection failed!");
        setServerStuck(true);
      } else if (error.response.status === 401) {
        console.log("unauthorized!");
        localStorage.removeItem("roleName");
        useNavigate("/admins");
      } else if (error.response.status === 403) {
        console.log("forbidden!");
        localStorage.removeItem("roleName");
        useNavigate("/admins");
      }

      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (serverStuck) {
    return <ServerError />;
  }
  return (
    <div>
      <HeaderControl />
      <h1 className="page-title">الطلبات السابقة </h1>
      <OrderView orders={oldOrders} />
    </div>
  );
}
