import React ,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import center_logo from "../images/center-logo.png"
import { useGlobalContext } from "../context";
import Loading from "../Loading";

const defualtLogo = "https://www.google.ps/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fcity-shop-logo-design-template_145155-3081.jpg&tbnid=E8gB75g7gyAIPM&vet=12ahUKEwjQtd6H7eCAAxVCh_0HHQ2xAaYQMygFegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fmall-logo-design&docid=7lhmiTxmbc_YeM&w=626&h=626&q=mall%20logo&hl=en&ved=2ahUKEwjQtd6H7eCAAxVCh_0HHQ2xAaYQMygFegQIARB_"
const startCenter = {
  id: 0,
  name: "Mall One",
  logoAsLink: "",//TODO : put primary image
  logoAsBytes: "",
  serverIP : "localhost",
  serverPort: "8081",
  address: "العنوان هنا ",
  phone:"072 888 8888"

};

function Center() {
  let navigate = useNavigate();

  const {baseServer, baseServerPort, setCenter, setPage,setCurrentCatId} = useGlobalContext();
  const [centersList, setCentersList] = useState([startCenter]);//TODO: we will get prefaired center from local storage;
 const [loading, setLoading] = useState(true);
  //---------------------------- use Effect ----------------------
  useEffect(() => {
    fetchCenters();
  }, []);

  // --------------------- fetch ---------------------------------
  const fetchCenters = async () => {
    try {
      const response = await fetch(`http://${baseServer}:${baseServerPort}/centers-list`);
      const data = await response.json();
      if(data.status !== 404){
          setCentersList(data);
          setLoading(false);
      }
    } catch (error) {
      console.log("Error in fetchCenters: ");
      setLoading(false);
    }
  };
  //------------------------   fuctions  -------------------------
  const changeCenter = (centerName) => {
    const newCenter = centersList.filter(item => item.name === centerName)[0];
      //  setPage(1);
       setCenter(newCenter);
       setCurrentCatId(1);
       let centerWithoutImge = newCenter;
       centerWithoutImge.logoAsBytes = ""; //temp: as I see this in console and wont to git red of it
       localStorage.setItem("prefairedCenter", JSON.stringify(centerWithoutImge));
       
       navigate('/main') //this gos to exhibition
  }
  //____________________________________________UI___________________________
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  
  return (
    <div className="center-component"> 
    {(centersList !== null && centersList !== undefined)  && centersList.map((center)=>{
      let img = "";
       img = "data:image/jpeg;base64," + center.logoAsBytes;
      
      return( 
      <div key={center.id} className="single-logo" onClick={()=>changeCenter(center.name)}>
        <img src={img} alt="Mall pic"/>
        <h4>{center.name}</h4>
        </div> ) 
        })
        }
        </div>
        )
}
export default Center;
