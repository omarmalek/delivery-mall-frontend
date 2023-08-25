import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Loading from "../Loading";
import OrderDetailsCustomer from "./OrderDetails-Customer"
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

function CustomerHistory() {
  //console.log("customer - history");
  //console.log("CustomerHistory proccess is active. ");
  let navigate = useNavigate();

  const { customer, center,log} = useGlobalContext();
  const [loading, setLoading] = useState(true);
  //const [errMsg, setErrMsg] = useState(false);

  const [customerOrders, setCustomerOrders] = useState([]);
  const [customerOldOrders, setCustomerOldOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [showOrderDetails, setShowOrderDetials] = useState(false);
  
 
  
  // =============================================   useEffect   ===========================================

  useEffect(() => {
    if (customer.id !== 0 && customer.id !== undefined) {
      fetchCustomerOrders();
     fetchCustomerOldOrders();
    } else {
      navigate("/login");
    }
  }, []);

 

  //  ============================================   fetch    ========================================

  const fetchCustomerOrders = async () => {
    setLoading(true);
    let pageIndex = 0;
    let pageSize = 10;
    const url = `http://${center.serverIP}:${center.serverPort}/customerorders/${customer.id}/${pageIndex}/${pageSize}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setLoading(false);
      setCustomerOrders(response.data);
      log("orders",response.data);
    } catch (err) {
      if (!err.response) {
        //setErrMsg("No Server Response");
        console.log("Error in fetchCustomerOrders: " );
      }
      setLoading(false);
    }
  };
  const fetchCustomerOldOrders = async () => {
    let pageIndex = 0;
    let pageSize = 10; // customer see the last 10 orders
    const url = `http://${center.serverIP}:${center.serverPort}/customeroldorders/${customer.id}/${pageIndex}/${pageSize}`;
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        withCredentials: true,
      });
      setCustomerOldOrders(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      if (!error.response) {
        console.log("Connection failed!");
      } else if (error.response.status === 401) {
        console.log("unauthorized!");
        localStorage.removeItem("roleName");
        navigate("/login");
      } else if (error.response.status === 403) {
        console.log("forbidden!");
        localStorage.removeItem("roleName");
        navigate("/login");
      }

      setLoading(false);
    }
  };
  //                                  ------- fetch Ends    -------
  //------------------------ Fnctions ----------------------------
  const selectOrder = (order) => {
    setCurrentOrder(order);
    setShowOrderDetials(true);
  };
  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  //________________________________UI_________________________________________
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <div className="header">
      <h3>حسابك في مركز تسوق : {center.name}</h3>
        <h1 className="center">مرحبا {customer.name || "زبوننا الكريم"}</h1>
        <div className="logout">
          <button type="button" onClick={logout}>
            تسجيل الخروج
          </button>
        </div>
      </div>

      <div className="customer-history-component">
        {customerOldOrders.length > 0 ? (
          <div>
            <h2 className="center">قائمة الطلبات السابقة</h2>
            <table>
              <thead>
                <tr>
                  <th>م</th>
                  <th>رقم الطلبية</th>
                  <th>مبلغ الطلبية</th>
                  <th>اليوم</th>
                  <th>التاريخ</th>
                  <th>فئة التوصيل</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {customerOldOrders.map((order) => {
                  const {
                    id,
                    cartTotal,
                    date,
                    delivaryServiceType,
                    delivered,
                    cancelled,
                  } = order;

                  return (
                    <tr
                      key={id}
                      onClick={() => selectOrder(order)}
                      // onClick={() => setCurrentOrder(order)}
                      // className={currentOrder.id === id ? "current-order" : ""}
                    >
                      <td className="counter">
                        <span id="counter"></span>
                      </td>
                      <td>{id}</td>
                      <td>
                        {cartTotal} <i className="fa-solid fa-shekel-sign"></i>
                      </td>
                      <td></td>
                      <td>{date}</td>
                      <td>{delivaryServiceType}</td>
                      <td>
                        {!cancelled
                          ? delivered
                            ? "تمت"
                            : "Rejected"
                          : "قمت بإلغائها"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
        <h2>الطلبيات في الانتظار</h2>
        {customerOrders.length > 0 ? (
          <div className="customer-order-section">
            <table>
              <thead>
                <tr>
                  <th>م</th>
                  <th>رقم الطلبية</th>
                  <th>مبلغ الطلبية</th>
                  <th> اليوم</th>
                  <th>وقت الطلب</th>
                  <th>التاريخ</th>
                  <th>فئة التوصيل</th>
                  <th>حالة الطلبية</th>
                </tr>
              </thead>
              <tbody>
                {customerOrders
                  ? customerOrders.map((order) => {
                      const {
                        id,
                        cartTotal,
                        date,
                        delivaryServiceType,
                        packed,
                        sentDelivery,
                      } = order;
                      return (
                        <tr
                          key={id}
                          // onClick={() => setCurrentOrder(order)}
                          // className={currentOrder.id === id ? "current-order" : ""}
                        >
                          <td className="counter">
                            <span id="counter"></span>
                          </td>
                          <td>{id}</td>
                          <td>
                            {cartTotal}{" "}
                            <i className="fa-solid fa-shekel-sign"></i>
                          </td>
                          <td></td>
                          <td>{date}</td>
                          <td></td>

                          <td>{delivaryServiceType}</td>
                          <td>
                            {!sentDelivery
                              ? packed
                                ? "تم تجهيز الطلبية"
                                : "في الانتظار"
                              : "تم ارسال الطلبية"}
                          </td>
                        </tr>
                      );
                    })
                  : "no list to view"}
              </tbody>
            </table>
            {showOrderDetails && (
          <OrderDetailsCustomer 
            currentOrder={currentOrder}
            setShowOrderDetials={setShowOrderDetials}
          />
        )}
          </div>
        ) : (
          <p className="center"> "لا يوجد طلبيات في الانتظار"</p>
        )}
        <br></br>
        <br></br>
       
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/*     <p>الطلبية قيد الاحضار</p>
        <p> سيتم التسليم خلال:....</p>
        <p>معرف عامل الدييفري</p>
        <p>رقم هاتف الديليفري</p>
        <p>الغاء الطلبية</p>
        <p>
          (سيتم عدم تفعيل زر الغاء الطلبية في حال تم تسليمها الى عامل الديليفري)
        </p>
        <p>تقييم الزبون</p>
        تصفير الكارت */}
      </div>
    </div>
  );
}
export default CustomerHistory;
