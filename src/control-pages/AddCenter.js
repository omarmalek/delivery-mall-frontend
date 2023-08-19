import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../context";
import HeaderControl from "./Header-Control";
import { useNavigate } from "react-router-dom";

const tempCenter = {
  id: 0,
  name: "",
  logoAsLink: "",//TODO : put primary image
  logoAsBytes: "",
  serverIP : "localhost",
  serverPort: "8080",
  address: "العنوان هنا ",
  phone:"072 888 8888"

};
function AddCenter() {
  let navigate = useNavigate();
  const { baseServer, baseServerPort} = useGlobalContext();
  const [imgeFile, setImgeFile] = useState("");
  const [center, setCenter] = useState(tempCenter);

  const updateCenter = (event) => {
    const { name, value } = event.target;
    setCenter((center) => {
      return { ...center, [name]: value };
    });
    //console.log("updating Product info: ");
    //console.log(product);
  };
  const updateProductImage = (event) => {
    setImgeFile(event.target.files[0]); //I used the first picture only
    //if I want to use mutipel photos i use:
    // const imgArray = event.target.files;
    // for (var i = 0; i < imgArray.length; i++) {
    //   formData.append("imgesFile", file[i].file, file[i].name);
    // }
    // setImgesFile(imgArray);
  };
  const addCenter = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("imgeFile", imgeFile);
    formData.append(
      "center",
      new Blob([JSON.stringify(center)], { type: "application/json" })
    );
    if (center.name !== "") {
      try {
        const url = `http://${baseServer}:${baseServerPort}/admin/centers-managment/create`;
        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("admintoken"),
          },
          withCredentials: true,
        });
        //console.log("Product added.")
        console.log("response: " )
        console.log(response);
        setCenter(tempCenter);
         setImgeFile("");
        //ToDo: show msg  of succeed
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
        console.log("Error is: " + error);
        //anyway in catch do:
        localStorage.removeItem("roleName");
        navigate("/admins");
      }
      }
      }
     
    }//end of button action.
  
  //console.log("product is :>> ");
  //console.log(product);
  return (
    <>
      <HeaderControl />
      <div className="add-product-component">
        <br></br>
        <br></br>

        <h1>اضافة مركز تسوق</h1>
        <form>
         
          <div className="row">
            <div className="form-item">
              <label>اسم مركز التسوق</label>
              <input
                type="text"
                name="name"
                value={center.name}
                onChange={updateCenter}
              />
            </div>
            
          </div>
         
          
          <div className="row">
            <div className="form-item">
              <label>رابط صورة الشعار</label>
              <input
                type="text"
                name="img"
                value={center.logoAsLink}
                onChange={updateCenter}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label>صورة الشعار</label>
              <input type="file" onChange={updateProductImage} />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label> serverIP</label>
              <input
                type="text"
                name="serverIP"
                value={center.serverIP}
                onChange={updateCenter}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label> serverPort</label>
              <input
                type="text"
                name="serverPort"
                value={center.serverPort}
                onChange={updateCenter}
              />
            </div>
          </div>
          <div className="control-btns">
            <button onClick={addCenter}>إدخال </button>
            <button onClick={() => setCenter(tempCenter)}>مسح الحقول</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddCenter;
