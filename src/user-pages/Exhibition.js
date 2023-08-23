import React ,{useState, useEffect} from "react";
import { useGlobalContext } from "../context";
import Loading from "../Loading";
import Pagination from "../Pagination";
import SingleProduct from "./SingleProduct";

function Exhibition() {
  const { openCart,center,currentCatId, log } = useGlobalContext();
  
  log("server port in Exhabetion is", center.serverPort)

  const [loading, setLoading] = useState(false);
  const [productsOfCurrentCatgory, setProductsOfCurrentCatgory] = useState([]);
  const [page,setPage] = useState(1);
  
  
  //---------------------------- useEffect ----------------------------
  useEffect(() => {
    fetchProductsOfCurrentCatgory(currentCatId, page);
  }, [page, center, currentCatId]);
  useEffect(()=>{
    setPage(1)
  },[currentCatId])
  //---------------------------- Fetch ------------------------------- 
  const fetchProductsOfCurrentCatgory = async (catid, page) => { 
    setLoading(true)
    let pageIndex = page - 1;
    let pageSize = 30;
    const url = `http://${center.serverIP}:${center.serverPort}/products/bycatgory/${catid}/${pageIndex}/${pageSize}`
    console.log(url)
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        setProductsOfCurrentCatgory(data);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error in fetchProductsOfCurrentCatgory");
      setLoading(false);
      //setProductsAternativly(catid);
    }
  };
  //---------------------------- Function ----------------------------
 
  //____________________________UI________________________________________________
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <div className="exhibition-component">
        {productsOfCurrentCatgory ? (
          productsOfCurrentCatgory.map((product, index) => {
            return <SingleProduct key={product.id} product={product} />;
          })
        ) : 
          <p>لا يوجد بيانات لعرضها</p>
        }
      </div>
      <Pagination page={page} setPage={setPage}/> 
      <div>
        <button onClick={openCart}>معاينة الطلبية</button>
      </div>
    </div>
  );
  // return (
  //   <div>
  //     <div className="exhibition-component">
  //       {productsOfCurrentCatgory && productsOfCurrentCatgory !== undefined ? (
  //         productsOfCurrentCatgory.map((product, index) => {
  //           return <SingleProduct key={product.id} product={product} />;
  //         })
  //       ) : (
  //         <p>no catgory</p>
  //       )}
  //     </div>
  //     {/* i will give pagination : (page, selectPage) insted of sending them to context */}
  //     <Pagination page={page} setPage={setPage}/> 
  //     <div>
  //       <button onClick={openCart}>معاينة الطلبية</button>
  //     </div>
  //   </div>
  // );
}
export default Exhibition;
