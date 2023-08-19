import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../context";
import HeaderControl from "./Header-Control";
import { useNavigate } from "react-router-dom";

const tempProduc = {
  id: 0,
  catgoryId: 1,
  name: "",
  unitPrice: 1,
  backagePrice: "10",
  packtype: "قطعة",
  numberOfPieces: "24",
  img: "",
  //ToDo : put primary image
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
  periodOfValidity: "",
};
function AddProduct() {
  let navigate = useNavigate();
  const { catgories, center, log} = useGlobalContext();
  const [imgesFiles, setImgesFiles] = useState("");
  const [product, setProduct] = useState(tempProduc);
log("center port in -add product-",center.serverPort);
  const updateProduct = (event) => {
    const { name, value } = event.target;
    setProduct((pdct) => {
      return { ...pdct, [name]: value };
    });
    
    log("updating Product info: ", product);
  };
  const updateProductImage = (event) => {
    setImgesFiles(event.target.files[0]); //I used the first picture only
    //if I want to use mutipel photos i use:...
    // const imgArray = event.target.files;
    // for (var i = 0; i < imgArray.length; i++) {
    //   formData.append("imgesFile", file[i].file, file[i].name);
    // }
    // setImgesFile(imgArray);
  };
  const addProduct = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("imgesFiles", imgesFiles);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );
    if (product.name !== "") {
      try {
        const url = `http://${center.serverIP}:${center.serverPort}/productmedia`;
        console.log(url);
        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("admintoken"),
          },
          withCredentials: true,
        });
        console.log("Product added.")
        
        setProduct(tempProduc);
         setImgesFiles("");
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
       
        //anyway in catch do:
        localStorage.removeItem("roleName");
        navigate("/admins");
      }
      }
      }
     
    }//end of button action.
  
  console.log("product is :>> ");
  console.log(product);
  return (
    <>
      <HeaderControl />
      <div className="add-product-component">
        <br></br>
        <br></br>
        <h1>اضافة منتج</h1>
        <form>
          {/* <div className="row">
            <div className="form-item id">
              <label>رقم المنتج</label>
              <input type="text" name="id" value={product.id} readOnly />
            </div>
          </div> */}
          <div className="row">
            <div className="form-item">
              <label>اسم المنتج</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={updateProduct}
              />
            </div>
            <div className="form-item">
              <label>السعر</label>
              <input
                type="text"
                name="unitPrice"
                value={product.unitPrice}
                onChange={updateProduct}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label>التصنيف</label>
              <select
                name="catgoryId"
                className="select-class"
                onChange={updateProduct}
              >
                <option value="0">اختر التصنيف</option>
                {catgories && catgories !== undefined
                  ? catgories.map((cat, index) => {
                      return (
                        <option key={index} value={cat.id}>
                          {cat.name}
                        </option>
                      );
                    })
                  : "No Cargory"}
              </select>
            </div>
            <div className="form-item">
              <label>شكل العبوة</label>
              <input
                type="text"
                name="packtype"
                value={product.packtype}
                onChange={updateProduct}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label> الوزن</label>
              <input
                type="text"
                name="weight"
                value={product.weight}
                onChange={updateProduct}
              />
            </div>
            <div className="form-item">
              <label>الشركة المصنعة</label>
              <input
                type="text"
                name="company"
                value={product.company}
                onChange={updateProduct}
              />
            </div>
            <div className="form-item">
              <label>دولة المنشأ</label>
              <input
                type="text"
                name="country"
                value={product.country}
                onChange={updateProduct}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label>رابط الصورة</label>
              <input
                type="text"
                name="img"
                value={product.img}
                onChange={updateProduct}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label>الصورة</label>
              <input type="file" onChange={updateProductImage} />
            </div>
          </div>
          <div className="row">
            <div className="form-item">
              <label>وصف المنتج</label>
              <input
                type="text"
                name="desc"
                value={product.desc}
                onChange={updateProduct}
              />
            </div>
          </div>
          <div className="control-btns">
            <button onClick={addProduct}>إدخال منتج</button>
            <button onClick={() => setProduct(tempProduc)}>مسح الحقول</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddProduct;
