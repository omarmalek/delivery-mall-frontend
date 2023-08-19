import React, { useState, useEffect, useContext } from "react";
import { temp_catgories } from "./data";
import { temp_full_catgories } from "./data";

const AppContext = React.createContext();

const log = (itm, msg,extra) =>{
  if (extra ===undefined){extra = ""}
const array = [itm,":", msg, extra]
console.log("________________info _______________")
console.log(...array)
}

const getCustomerLocalInfo = () => {
  if (localStorage.getItem("customerInfo")) {
    return JSON.parse(localStorage.getItem("customerInfo"));
  } else {
    return {
      id: 0,
      name: "",
      phoneNumber: "",
      address: "",
      exist: false,
    };
  }
};

const AppProvider = ({ children }) => {
  //-----------------------------pre setup ----------------
const baseServer = "localhost";
const baseServerPort = "8080";

let startCenter = {
  id: 0,
  name: "Mall One",
  logoAsLink: "", //TODO : put primary image
  logoAsBytes: "",
  serverIP : baseServer,
  serverPort: baseServerPort,
  address: "العنوان هنا ",
  phone:"072 888 8888"
};

if(localStorage.getItem("prefairedCenter")){
  startCenter = JSON.parse(localStorage.getItem("prefairedCenter"));
}
  
  // ----------------------------   states     -------------------------------------
  const [loading, setLoading] = useState(false);
  
  const [center, setCenter] = useState( startCenter); //TODO: we will get prefaired center from local storage;
  //log("this is runing from contex!")
  log("Center is",center.name)
  
  //const [serverIP, setServerIP] = useState(baseServer);
  //const [serverPort, setServerPort] = useState(baseServerPort);
  log("Server Port is:", center.serverPort)
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [catgories, setCatgories] = useState(temp_catgories);
  const [isSearchBarshown, setIsSearchBarshown] = useState(false);
  const [isCustomerInfoShown, setIsCustomerInfoShown] = useState(false);
  
  const [showNvbar, setshowNvbar] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [customer, setCustomer] = useState(getCustomerLocalInfo());
  const [page, setPage] = useState(1); //TODO: to be removed
  const [currentCatId, setCurrentCatId] = useState(1);

  // ===============================================   Effect     =================================
  
  useEffect(() => {
    fetchCatgories();
  }, [center]);

  useEffect(() => {
    computCartTotal();
    computeCartCount();
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("customerInfo", JSON.stringify(customer));
  }, [customer]);

  //                                 ---     Effect     ---ends
  //-------------------------------------Fetch functions  --------------------------------

  const fetchCatgories = async () => {  //TODO: move this to menu
    try {
      const response = await fetch(`http://${center.serverIP}:${center.serverPort}/catgories`);
      const data = await response.json();
      setCatgories(data);
    } catch (error) {
      console.log("Error in fetchCatgories: ");
      setCatgories(temp_catgories);
      setLoading(false);
    }
  };
 
  const updateOrderFinal = (newUpdatedOrder) => {
    fetch(`http://${center.serverIP}:${center.serverPort}/admin/order`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("admintoken"),
      },
      body: JSON.stringify(newUpdatedOrder),
    });
  };

  const fetchSearchResult = (str) => {
    let pageIndex = 0;
    let pageSize = 50;
    if (str.length > 0) {
      try {
        fetch(
          `http://${center.serverIP}:${center.serverPort}/products/byname/${str}/${pageIndex}/${pageSize}`
        )
          .then((response) => response.json())
          .then((data) => {
            //setProductsOfCurrentCatgory(data);  //temp action
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  //                                       ------- Fetch functions --------ends
  // ------------------------------------------- Functions -----------------------------
 
  const updateCusomerInfo = (event) => {
    const { name, value } = event.target;
    setCustomer((cstmr) => {
      return { ...cstmr, [name]: value };
    });

    console.log("updating customer info: ");
    console.log(customer);
    localStorage.removeItem("token"); //to prevent login to previous account
  };

  const choosCatgory = (catgoryId) => {
    setCurrentCatId(catgoryId);
    setPage(1);
    setProductsAternativly(catgoryId);
    setLoading(false);
    
  };
  
  const openCart = () => {
    setIsCartOpen(true);
    closeSerchBar();
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  const showSearchBar = () => {
    setIsSearchBarshown(!isSearchBarshown);
    setshowNvbar(false);
    closeCart();
  };
  const toggleNavbar = () => {
    setshowNvbar(!showNvbar);
    setIsSearchBarshown(false);
  };
  const closeSerchBar = () => {
    setIsSearchBarshown(false);
  };
  const setProductsAternativly = (id) => {
   // const targetCatgory = temp_full_catgories.map((cat) => cat.id === id);
    //setProductsOfCurrentCatgory(targetCatgory.contents);
  };
  const showCustomerInfo = () => {
    setIsCustomerInfoShown(true);
  };

  const sendOrder = (e) => {
    e.preventDefault();

    let cartSummary = cart.map((product) => {
      return { productId: product.id, productAmount: product.amount };
    });
    const userOrder = {
      customerId: customer.id,
      customerName: customer.name,
      customerPhone: customer.phoneNumber,
      customerAddress: customer.address,
      cartTotal: cartTotal,
      paymentType: "Cash",
      delivaryServiceType: "Normal",
      orderCart: cartSummary, //I don't send the cart... I send this summary
    };
    if (
      customer.name !== "" &&
      customer.phoneNumber !== "" &&
      customer.address !== "" &&
      cart.length > 0
    ) {
      try {
        fetch(`http://${center.serverIP}:${center.serverPort}/userorder`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userOrder),
        })
          .then((response) => response.json())
          .then((data) => {
            //window.location.assign(`/`);
          });
      } catch (error) {
        console.log(error);
      }
    }

    window.location.assign(`/`);
  };

  // const updateAnyOrder = (orderTarget, orderId, property, value) => {}; // to be done

  const updateOrder = (order, property) => {
    let newUpdatedOrder = { ...order, [property]: true };
    updateOrderFinal(newUpdatedOrder);
  };

  const handleSearch = (e) => {
    let str = e.target.value;
    fetchSearchResult(str);
  };
  const clearCustomerInfo = (e) => {
    e.preventDefault();
    setCustomer({
      id: 0,
      name: "",
      phoneNumber: "",
      address: "",
      exist: false,
    });
  };

  //                                  -------------  Functions ---------Ends

  // ------------------------------------------- Calculating Cart Functions ---------------------------
  const incProductQuantityInCart = (product) => {
    let newCart = cart.map((item) => {
      //ma be I can use forEach insted of map
      if (item.id === product.id) {
        item.amount = item.amount + 1;
      }
      return item;
    });
    setCart(newCart);
  };
  const decreasProductAmount = (product) => {
    let newCart = cart.map((item) => {
      if (item.id === product.id) {
        if (item.amount > 1) {
          item.amount = item.amount - 1;
        }
      }
      return item;
    });
    // .filter((item) => item.amount !== 0);
    setCart(newCart);
  };

  const buyProduct = (product) => {
    if (inCart(product)) {
      console.log("product already in cart...!");
      incProductQuantityInCart(product);
    }
    if (!inCart(product)) {
      product.amount = 1;
      setCart((cart) => [...cart, product]);
    }
  };
  const inCart = (product) => {
    return cart.some((currentProduct) => currentProduct.id === product.id);
  };
  const getQuantity = (id) => {
    let quantity = 0;
    cart.map((product) => {
      if (product.id === id) {
        quantity = product.amount;
      }
      return 0;
    });
    return quantity;
  };
  const deleteFromCart = (id) => {
    let newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  const emptyCart = () => {
    setCart([]);
    setIsCustomerInfoShown(false);
  };
  const computCartTotal = () => {
    let total = cart.reduce(
      (total, product) => (total += product.unitPrice * product.amount),
      0
    );
    setCartTotal(total);
  };
  const computeCartCount = () => {
    let count = 0;
    cart.map((product) => {
      count += product.amount;
      return count;
    });
    setCartCount(count);
  };
  //                                      --- Calculating Cart   ---ends

  return (
    <AppContext.Provider
      value={{
        baseServer,
        baseServerPort,
        center,
        // serverIP,
        // serverPort,
        setCenter,
        loading,
        isCartOpen,
        openCart,
        closeCart,
        catgories,
        currentCatId,
        choosCatgory,
        isSearchBarshown,
        showSearchBar,
        closeSerchBar,
        showNvbar,
        toggleNavbar,
        cart,
        buyProduct,
        incProductQuantityInCart,
        decreasProductAmount,
        getQuantity,
        deleteFromCart,
        emptyCart,
        cartTotal,
        cartCount,
        showCustomerInfo,
        isCustomerInfoShown,
        setCurrentCatId,
        customer,
        setCustomer,
        clearCustomerInfo,
        sendOrder,
        updateCusomerInfo,
        updateOrder,
        handleSearch,
        log,
        page, //leave it for now 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
//note: to send sms message to the customer by form
