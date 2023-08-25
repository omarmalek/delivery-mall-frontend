import React, { useState } from "react";
import OrderDetails from "./Order-details";

const OrderView = ({ orders, role }) => {
  const [currentOrder, setCurrentOrder] = useState({});
  const [showOrderDetails, setShowOrderDetials] = useState(false);
  const selectOrder = (order) => {
    setCurrentOrder(order);
    setShowOrderDetials(true);
  };
  return (
    <>
      <div className="order-view-component">
        <table>
          <thead>
            <tr>
              <th>م</th>
              <th>رقم الطلبية</th>
              <th>اسم الزبون</th>
              <th>مبلغ الطلبية</th>
              <th>وقت الطلب</th>
              <th>تم التحضير</th>
              <th> ارسل ديلفيري</th>
              <th>تم التوصيل</th>
              <th>ملغاة</th>
              <th>مرفوضة</th>
              <th>فئة التوصيل</th>
            </tr>
          </thead>
          <tbody>
            {orders
              ? orders.map((order) => {
                  const {
                    //here we will take just the important info
                    id,
                    // customerId,
                    // orderSetterId,
                    // deliveryManId,
                    // delivaryCharge,
                    cartTotal,
                    date,
                    // paymentType,
                    delivaryServiceType,
                    packed,
                    sentDelivery,
                    delivered,
                    // paid,
                    cancelled,
                    rejected,
                    // customerEvaluation,
                    // controlNotes,
                    customerName,
                    //   customerPhone,
                    //   customerAddress,
                  } = order;

                  return (
                    <>
                      <tr
                        key={id}
                        onClick={() => selectOrder(order)}
                        className={
                          currentOrder.id === id ? "current-order" : ""
                        }
                      >
                        <td className="counter">
                          <span id="counter"></span>
                        </td>
                        <td>{id}</td>
                        <td>{customerName}</td>
                        <td>{cartTotal}</td>
                        <td>{date}</td>
                        <td className={packed ? "selected" : ""}>
                          {packed ? "yes" : "No"}
                        </td>
                        <td className={sentDelivery ? "selected" : ""}>
                          {sentDelivery ? "yes" : "No"}
                        </td>
                        <td className={delivered ? "selected" : ""}>
                          {delivered ? "yes" : "No"}
                        </td>
                        <td className={cancelled ? "selected" : ""}>
                          {cancelled ? "yes" : "No"}
                        </td>
                        <td className={rejected ? "selected" : ""}>
                          {rejected ? "yes" : "No"}
                        </td>
                        <td>{delivaryServiceType}</td>
                      </tr>
                    </>
                  );
                })
              : "لا توجد بيانات لعرضها"}
          </tbody>
        </table>
        {showOrderDetails && (
          <OrderDetails
            currentOrder={currentOrder}
            role={role}
            setShowOrderDetials={setShowOrderDetials}
          />
        )}
      </div>
    </>
  );
};
export default OrderView;
