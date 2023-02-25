import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { Category } from "./Category";
import { Quote } from "./Quote";
import { HowWork } from "./HowWork";
import { ReviewSection } from "./ReviewSection";
import { Testimonial } from "./Testimonial";
interface propsHome {
  showHome: boolean;
  changeHomePage: (element: boolean) => void;
}
export const Home = ({ showHome, changeHomePage }: propsHome) => {
  const param = useParams();
  useEffect(() => {
    // console.log(param);
    if (!param.type) {
      changeHomePage(false);
    }
  }, [param]);

  const navigate = useNavigate();
  const ourService = [
    {
      icon: "fas fa-tools",
      url: "repairing-and-services",
      show: "Repairing & Services"
    },
    {
      icon: "fas fa-car-crash",
      url: "denting-and-painting",
      show: " Denting & Painting"
    },
    {
      icon: "fas fa-car",
      url: "ac-work",
      show: "AC-Work (Reparing & Service)"
    },
    { icon: "fa-solid fa-bolt", url: "electric-work", show: "Electric Work" },
    { icon: "fas fa-car", url: "accessorice-work", show: "Accessorice Work" },
    { icon: "fas fa-car", url: "insurance", show: "Insurance" },
    { icon: "fas fa-home", url: "doorstep", show: "Door Step Service" },
    { icon: "fas fa-car-battery", url: "battery", show: "Battery Work" }
  ];
  const style = {
    border: "1px solid red"
  };
  const [filter, setFilter] = useState({
    manuf: "",
    model: "",
    fuel: ""
  });
  const selectedFilter = (filter: any) => {
    setFilter(filter);
  };
  const handleAllService = () => {
    // changeHomePage(true);
    navigate("all-service");
  };

  return showHome ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <div
      className="container-fluid"
      style={{
        border: "2px solid green",
        marginTop: "80px",
        position: "relative"
      }}
    >
      <div className="row home-section1" style={{ backgroundColor: "#e6f4ff" }}>
        <div className="col-12 col-lg-6 ">
          {/* //style :  paddingAllBox headline-video */}
          {/* <h1>Hello1</h1> */}
          {/* <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/kxW62eMsw0k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
        </div>
        <div
          className="col-12 col-lg-6 "
          // style={{ backgroundColor: "#768e95", color: "white" }}
        >
          <Quote />
        </div>
      </div>
      <div className="paddingAllBox ">
        <div className="row shadow p-2" style={{color:"#FFFFFF",padding:"8px",backgroundColor:"#FF0000",borderRadius:"40px"}}>
          <div className="col-4">Auto repair on YOUR Schedule</div>
          <div className="col-4" style={{textAlign:"center"}}>Full-Time Certified Mechanics</div>
          <div className="col-4" style={{textAlign:"right"}}>1 year / 12,000 mile warranty</div>
        </div>
      </div>

      <div className="row">
        <div className=" paddingAllBox bgColor">
          <h3 style={{ textAlign: "center" }}>Customer Reviews</h3>
          <ReviewSection />
        </div>
      </div>
      
      <div style={{ textAlign: "center" }} className="paddingAllBox">
        <h1>Our Services in {param.location} </h1>
        <div className="row">
          {ourService.map((val, index) => {
            return (
              <div
                style={{ textAlign: "center" }}
                onClick={() => navigate(`${val.url}`)}
                className="col-12 col-sm-6 col-md-3 col-lg-3 "
                key={index}
              >
                <div className="ourservice shadow-lg p-3 mb-4  rounded">
                  <i className={`${val.icon} image-Service`}></i>
                  <p>{val.show}</p>
                  <p className="showSubTitle"> Hello this is text</p>
                </div>
              </div>
            );
          })}
          <div className="seeAllService">
            <button className="btn btn-light" onClick={handleAllService} id='allService'>
              See All Service
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="paddingAllBox bgColor">
          {/* <p>How We Work</p> */}
          <HowWork />
        </div>
      </div>
      <div style={{ textAlign: "center" }} className="paddingAllBox">
        <h4>What our Customers Say</h4>
        <Testimonial />
      </div>

      <div style={{ textAlign: "center" }} className="paddingAllBox">
        <Link to="/live-track">
          <button className="btn btn-light"> Live Status Tracking </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

// const Page2 = () =>{
//     return <><h1>Page2 </h1></>
// }
// <>
//         <div className="floatPrice">
//             <h1>Div 2</h1>
//         </div>
//         <img id='homeImage' src="https://www.autotrainingcentre.com/wp-content/webp-express/webp-images/uploads/2015/09/Top-5-Most-Common-Repairs-Youll-Encounter-in-an-Auto-Repair-Career.jpg.webp"/>
//         <h1>Home Page {location}</h1>
//         <div className="row">
//             <div className="col">
//                 <button onClick={()=>renderPage('ourService')} className="btn btn-primary buttonStyle">Our Service</button>
//                 <button onClick={()=>renderPage('2ndpage')} className="btn btn-primary buttonStyle">Button 1</button>
//                 {/* <button onClick={()=>renderPage()} className="btn btn-primary buttonStyle">Button 1</button>
//                 <button onClick={()=>renderPage()} className="btn btn-primary buttonStyle">Button 1</button>
//                 <button onClick={()=>renderPage()} className="btn btn-primary buttonStyle">Button 1</button>
//                 <button onClick={()=>renderPage()} className="btn btn-primary buttonStyle">Button 1</button> */}
//             </div>
//         </div>
//         {page === 'ourService' && <OurService />}
//         {page === '2ndpage' && <Page2 />}
//         <Outlet />
//     </>
