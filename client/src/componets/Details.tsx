import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCard } from "../context/Cart";
import Carousel from 'react-grid-carousel';
import { ShowCard } from "./ViewCartInService";
import  Axios  from "axios";

interface props {
  changeHomePage: (element: boolean) => void;
}
export const Details = ({ changeHomePage }: props) => {
  const param: any | null = useParams();
  const navigate = useNavigate();
  const { addService, cardDetail } = useCard();
  const [selectedService, setSelectedService] = useState<String | undefined>();
  const someDataService = [
    {
      os_id: "dfgssdg",
      serviceName: "xfdyx",
      price: 3232
    },
    {
      os_id: "ssdg",
      serviceName: "xfdfyx",
      price: 4532
    },
    {
      os_id: "dfsdg",
      serviceName: "xydfdx",
      price: 432
    },
    {
      os_id: "dfgs",
      serviceName: "xdfdx",
      price: 32
    },
    {
      os_id: "dfgfdfs",
      serviceName: "xdfdfhdx",
      price: 323
    },
    {
      os_id: "dfgcdsfs",
      serviceName: "xdkjljkfdx",
      price: 3256
    }
  ];
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
      show: "AC-Work"
    },
    { icon: "fa-solid fa-bolt", url: "electric-work", show: "Electric Work" },
    { icon: "fas fa-car", url: "accessorice-work", show: "Accessorice Work" },
    { icon: "fas fa-car", url: "insurance", show: "Insurance" },
    { icon: "fas fa-home", url: "doorstep", show: "Door Step Service" },
    { icon: "fas fa-car-battery", url: "battery", show: "Battery Work" }
  ];
  //   console.log(param);
  const displaySelectedService = (service: string | undefined) => {
    setSelectedService(service);
  };
  const getData = () => {
    console.log("Data Loading");
    const cartype = JSON.parse(localStorage.getItem("carType") as string);
    if (cartype) {
      console.log(cartype);
      console.log(param.location + " & " + param.type);
      Axios.post("http://localhost:3002/user/ourservice",{
        "location":"Mumbai",
        "serviceType":"service",
        "carTypeSelection":{ "manufacturer": "Tata","model": "tata-ev","fuel": "Electric"}
    }).then(res=>console.log(res.data)).catch(err=>console.log(err));
    }
  };

  useEffect(() => {
    // console.log("Calling param Change");
    getData();
  }, [param]);

  useEffect(() => {
    // console.log(param);
    displaySelectedService(param.type);
    // getData();
    changeHomePage(true);
  }, []);
  //   console.log(param);
  const MyDot = ({ isActive }: any) => (
    <span
      style={{
        display: "inline-block",
        height: isActive ? "8px" : "5px",
        width: isActive ? "8px" : "5px",
        background: "#1890ff"
      }}
    ></span>
  );

  const renderUrl = (url: string) => {
    navigate(`${"/" + param.location + "/"}${url}`);

    setSelectedService(url);
    // getData();
  };
  const checkItemAdded = (os_id: string) => {
    for (let i = 0; i < cardDetail.length; i++) {
      if (cardDetail[i].os_id === os_id) {
        return true;
      }
    }
    return false;
  };
  return (
    <div className="container-fluid container-fluid-new">
      {/* <h1>City of {param.location}</h1>
      <h1>Service Type: {param.type}</h1> */}

      <div
        style={{
          position: "sticky",
          top: "80px",
          backgroundColor: "white",
          padding: "3px",
          zIndex: "0"
        }}
      >
        <Carousel
          cols={5}
          rows={1}
          loop={false}
          dot={MyDot}
          showDots={true}
          mobileBreakpoint={700}
        >
          {ourService.map((val, index) => {
            return (
              <Carousel.Item key={index}>
                <div
                  style={{ height: "120px" }}
                  onClick={() => renderUrl(val.url)}
                  key={index}
                  className={
                    selectedService === val.url
                      ? "shadow-lg p-3  rounded selected-service"
                      : "shadow-lg p-3  rounded"
                  }
                  // style={{ width: "200px", height: "100px" }}
                >
                  <i className={`${val.icon} image-Service`}></i>
                  <p>{val.show}</p>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      {/* <hr /> */}
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-md-6">
          <div className="row">
            {someDataService.map((val, index) => {
              return (
                <div key={index} className="col-12 serviceItemList">
                  <h2>{val.serviceName}</h2>
                  <p>Price: {val.price}</p>
                  {checkItemAdded(val.os_id) ? (
                    <p style={{ zIndex: "-1" }} className="btn btn-success">
                      Item Added
                    </p>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => addService(val)}
                    >
                      AddToCard
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 col-md-6">
          <div className="cardBox">
            <ShowCard getData={getData} />
          </div>
        </div>
      </div>
    </div>
  );
};
