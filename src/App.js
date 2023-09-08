import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./user-pages/Customer";
import AddProduct from "./control-pages/add-product";
import CustomerHistory from "./user-pages/customer-history";
import SearchResult from "./control-pages/Search-result";
import OrderSetterPage from "./control-pages/OrderSetterPage";
import OrderControlPage from "./control-pages/OrderControlPage";
import OrderOldPage from "./control-pages/OrderOldPage";
import ErrorPage from "./ErrorPage";
import Register from "./Register";
import OrderDeliveryPage from "./control-pages/OrderDeliveryPage";
import SignUp from "./user-pages/SignUp";
import Login from "./user-pages/Login";
// import Footer from "./Footer";
import AdminsLogin from "./control-pages/AdminsLogin";
import AdminMain from "./control-pages/AdminMain";
import Main from "./user-pages/Main";
import AddCenter from "./control-pages/AddCenter";
import Test from "./Test"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Customer />} />
        <Route exact path="/addcenter" element={<AddCenter />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/customerhistory" element={<CustomerHistory />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/admins" element={<AdminsLogin />} />

        <Route path="/admin" >
          <Route  index element={<AdminMain />} />
          <Route  path="orders" element={<OrderControlPage />} />
          <Route  path="ordres-old" element={<OrderOldPage />} />
          <Route  path="addproduct" element={<AddProduct />} />;
          <Route  path="searchresult" element={<SearchResult />} />
        </Route>
        
        <Route exact path="/set" element={<OrderSetterPage />} />
        <Route exact path="/dv" element={<OrderDeliveryPage />} />

        <Route path="*" element={<ErrorPage />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

