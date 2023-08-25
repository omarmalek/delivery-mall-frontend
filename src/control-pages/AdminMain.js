import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderControl from "./Header-Control";
import { useGlobalContext } from "../context";
import { useState } from "react";
import {tempPhotosList} from "../data"


const AdminPage = () => {
  const { center,log} = useGlobalContext();
  //const [fackProductCatgoryId,setFackCatgory] = useState(0);
  const navigate = useNavigate();

// let fackProductCatgoryId = 1;
  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    checkAccess();
  }, []);
//------------------------------  FETCH ------------------------------------------
  const checkAccess = async () => {
    const url = `http://${center.serverIP}:${center.serverPort}/checkAdminAuthentication`;
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
      }  else if (error.response.status === 401){
            console.log("Unauthorized!, navgated to '/admins'");
            localStorage.removeItem("roleName");
            navigate("/admins");
      }
    }
  };
  //--------
  const createProduct = async (product) =>{
    try {
      const url = `http://${center.serverIP}:${center.serverPort}/product`;
      console.log(url);
      const response = await axios.post(url, JSON.stringify(product), {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("admintoken"),
        },
        withCredentials: true,
        //body: JSON.stringify(fackeProduct)
      });
      console.log("Product added.")
    } catch (error) {
      if (!error.response) {
        // console.log("Connection Failed");
        console.error("No resonse from server!");
      } else if (error.response.status === 401){
        console.log("Unauthorized!, navgated to '/admins'");
        localStorage.removeItem("roleName");
        navigate("/admins");
      }
     else {
      console.log("Access failed!");
    }
    }
  }
  //-----------------------------------FUNCTIONS--------------------
  const fackeProduct = { 
    id: 0,
    catgoryId: 1,
    name: "",
    unitPrice: 1,
    backagePrice: "10",
    packType: "قطعة",
    numberOfPieces: "24",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgApfYP89rhTd9RRXzYKPgSQAPHL5jdmgs_MojTOxZGzOCCu4yZMSp84ytTYWxnEpSFw&usqp=CAU",
    img:"",
    avilable: true,
    weight: '60 غم',
    company: "الشركة العالمية ",
    country: "تركيا",
    desc: "مصنوع من مكونات عالية الجودة، مطابقة للمواصفات وزارة الاقتصاد الفلسطينية",
    barcode: "0624870022",
    storeLocation: "06",
    supplayerId: "3020",
    dateOfProduct: "",
    dateOfExpery: "",
    periodOfValidity: 30,
  }
    const addFakeProducts = (e) => {
      e.preventDefault();
      for (let catId=1; catId<10; catId++){
        fackeProduct.catgoryId = catId;
        for (let p = 0; p < 11; p++){
          let randomName = Math.floor(Math.random()*100);
          fackeProduct.name ="بسكويت " + randomName;
          let randomImg = Math.floor(Math.random()*40);
          fackeProduct.img = tempPhotosList[randomImg]
          let randomPrice = Math.floor(Math.random()*10);
          fackeProduct.unitPrice = randomPrice + 1;
          log("adding fake product...",catId, fackeProduct.name)
          createProduct(fackeProduct);
        //-------------
      }
      }
      }//end of button action.
  
 //_________________________________________UI________________________________________
  return (
    <div>
      <HeaderControl />
      <section className="admin-main-component">
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
        <br></br>
         <Link to="/admin/addCatgory">Add New Catgory</Link> {/*//TODO: in schedual */}
         <div>
        <button onClick={addFakeProducts}>Add Fake Products</button>
       
        
      </div>
      </section>
    </div>
  );
};

export default AdminPage;
