import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderControl from "./Header-Control";
import { useGlobalContext } from "../context";
import { useState } from "react";

import item1 from "../images/item1.jfif"
import item2 from "../images/item2.jfif"
import item3 from "../images/item3.jfif"
import item4 from "../images/item4.jfif"
import item5 from "../images/item5.jfif"
import item6 from "../images/item6.jfif"
import item7 from "../images/item7.jfif"
import item8 from "../images/item8.jfif"
import item9 from "../images/item9.jfif"
import item10 from "../images/item10.jfif"
import item11 from "../images/item11.jfif"
import item12 from "../images/item12.jfif"
import item13 from "../images/item13.jfif"
import item14 from "../images/item14.jfif"
import item15 from "../images/item15.jfif"
import item16 from "../images/item16.jfif"
import item17 from "../images/item17.jfif"
import item18 from "../images/item18.jfif"
import item19 from "../images/item19.jfif"
import item20 from "../images/item20.jfif"
import item21 from "../images/item21.jfif"
import item22 from "../images/item22.jfif"
import item23 from "../images/item23.jfif"
import item24 from "../images/item24.jfif"
import item25 from "../images/item25.jfif"
import item26 from "../images/item26.jfif"
import item27 from "../images/item27.jfif"
import item28 from "../images/item28.jfif"
import item29 from "../images/item29.jfif"
import item30 from "../images/item30.jfif"
import item31 from "../images/item31.jfif"
import item32 from "../images/item32.jfif"
import item33 from "../images/item33.jfif"
import item34 from "../images/item34.jfif"
import item35 from "../images/item35.jfif"
import item36 from "../images/item36.jfif"
import item37 from "../images/item37.jfif"
import item38 from "../images/item38.jfif"
import item39 from "../images/item39.jfif"
import item40 from "../images/item40.jfif"


const tempPhotosList = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19,item20,item21,item22,item23,item24,item25,item26,item27,item28,item29,item30,item31,item32,item33,item34,item35,item36,item37,item38,item39,item40]

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
  //-----------------------------------FUNCTIONS--------------------
  const fackeProduct = { 
    id: 0,
    catgoryId: 1,
    name: "",
    unitPrice: 1,
    backagePrice: "10",
    packtype: "قطعة",
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

    const addFakeProducts = async (e) => {
      e.preventDefault();
      for (let catId=1; catId<10; catId++){
      fackeProduct.catgoryId = catId;
        let counter = 0;
        for (let p = 0; p < 11; p++){
          let randomName = Math.floor(Math.random()*100);
          fackeProduct.name ="بسكويت " + randomName;
          let random = Math.floor(Math.random()*40);
          
          log("random is" , random)
          fackeProduct.img = tempPhotosList[random]
          log("adding fake product cat: ",catId, fackeProduct.name)
        try {
          const url = `http://${center.serverIP}:${center.serverPort}/product`;
          console.log(url);
          const response = await axios.post(url, JSON.stringify(fackeProduct), {
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
        {/* <input type="text" value = {fackProductCatgoryId}  */}
               {/* onChange={(e)=>addFakeProducts(e.target.value)}/> */}
      </div>
      </section>
    </div>
  );
};

export default AdminPage;
