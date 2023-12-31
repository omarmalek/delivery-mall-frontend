import React from "react";
import '../styles/Cart.css'
import { useGlobalContext } from "../context";
import { FaTimes,FaShekelSign,FaCartArrowDown} from "react-icons/fa";
import CustomerInfo from "./CustomerInfo";

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    cart,
    deleteFromCart,
    emptyCart,
    cartTotal,
    cartCount,
    incProductQuantityInCart,
    decreasProductAmount,
   
  } = useGlobalContext();
  //_______________________________UI______________________________________
  return (
    <div className="cart-scroll">
      <aside className={isCartOpen ? "cart show-cart" : "cart "}>
        <div className="cart-header">
          <button className="cart-close" onClick={closeCart}>
            <FaTimes />
          </button>
          <h3>سلة المشتريات</h3>
          <i className="fa fa-cart-shopping cart-logo"><FaCartArrowDown/>
            <span>{cartCount > 0 ? cartCount : ""}</span>
          </i>
        </div>
        <div className="cart-body">
          <table className="table">
            <thead>
              <tr>
                <th>م</th>
                <th>الصنف</th>
                <th>السعر</th>
                <th className="amount-caption">الكمية</th>
                <th>المجموع</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => {
                let sumOfRow = product.unitPrice * product.amount;
                sumOfRow = parseFloat(sumOfRow.toFixed(2));
                return (
                  <tr key={product.id}>
                    <td className="counter">
                      <span id="counter"></span>
                    </td>
                    <td>{product.name}</td>
                    <td>
                      {product.unitPrice}
                      <span> شيقل</span>
                    </td>
                    <td>
                      <div className="amount under-btn ">
                        <button
                          onClick={() => incProductQuantityInCart(product)}
                        >
                          +
                        </button>
                        <input
                          type="text"
                          value={product.amount + " " + product.packType}
                          readOnly
                        />
                        <button onClick={() => decreasProductAmount(product)}>
                          -
                        </button>
                      </div>
                    </td>
                    <td>
                      {sumOfRow} <i className="fa-solid fa-shekel-sign">
                        <FaShekelSign/>
                      </i>
                    </td>
                    <td>
                      <button
                        className="remov-btn"
                        onClick={() => deleteFromCart(product.id)}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-summary">
            <span>المجموع</span>
            <input id="total" type="text" value={cartTotal} readOnly />
            <span> شيكل</span>
            <div>
              <button id="empty-cart" onClick={emptyCart}>
                أفرغ السلة <i className="fas fa-trash"></i>
              </button>
              <ul>
    </ul>
            </div>
          </div>
        </div>
        <CustomerInfo />
      </aside>
    </div>
  );
};
export default Cart;
//go to this website -> https://fontawesome.com/icons/moped?s=solid&f=classic
