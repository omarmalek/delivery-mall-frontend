import React ,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import center_logo from "../images/center-logo.png"
import { useGlobalContext } from "../context";
import Loading from "../Loading";
import defaultLogo from "../images/mall-logo.png"


const startCenter = {
  id: 0,
  name: "Mall One",
  logo: defaultLogo,
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
      let logo = startCenter.logo;
      if(center.logoAsBytes){
        logo = "data:image/jpeg;base64," + center.logoAsBytes;
      }
      
      
      return( 
      <div key={center.id} className="single-logo" onClick={()=>changeCenter(center.name)}>
        <img src={ logo} alt="Mall pic"/>
        <h4>{center.name}</h4>
        </div> ) 
        })
        }
        </div>
        )
}
export default Center;
