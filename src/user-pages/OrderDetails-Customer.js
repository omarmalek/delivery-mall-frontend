import React from "react";
// import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const OrderDetailsCustomer = ({ currentOrder, setShowOrderDetials }) => {
  // const { updateOrder } = useGlobalContext();
  
  // const {
    // id,
    // customerId,
    // orderSetterId,
    // deliveryManId,
    // delivaryCharge,
    // cartTotal,
    // date,
    // paymentType,
    // delivaryServiceType,
    // packed,
    // sentDelivery,
    // delivered,
    // paid,
    // cancelled,
    // rejected,
    // customerEvaluation,
    // controlNotes,
    // customerName,
    // customerPhone,
    // customerAddress,
  // } = currentOrder;
  return (
     <div className="customer-history-details">
             
      <div className="header">
        <button
          className="btn form-close"
          onClick={() => {
            setShowOrderDetials(false);
          }}
        >
          <FaTimes />
        </button>
        <h1>تفاصيل الطلبية</h1>
        {/* <i className="somelogo">
          <span>number of new orders</span>
        </i> */}
      </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>م</th>
                    <th>الصنف</th>
                    <th>الكمية</th>
                    <th>السعر</th>
                    <th>المجموع</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrder.orderCart &&
                    currentOrder.orderCart.map((item, index) => {
                      const {
                        id,
                        // productId,
                        productName,
                        unitPrice,
                        productAmount,
                        packType,
                      } = item;
                      let sumOfRow = 0;
                      sumOfRow = unitPrice * productAmount;
                      sumOfRow = parseFloat(sumOfRow.toFixed(2));
                      return (
                        <tr key={id}>
                          <td className="counter">
                            <span id="counter"></span>
                          </td>
                          <td>{productName}</td>
                          <td>{productAmount + " " + packType}</td>
                          <td>
                            {unitPrice}
                            <span> شيقل</span>
                          </td>
                          <td>
                            {sumOfRow}{" "}
                            <i className="fa-solid fa-shekel-sign"></i>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div> 
  );
};
export default OrderDetailsCustomer;
