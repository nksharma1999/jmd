import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCard } from "../context/Cart";
import { useContextData } from "../context/context";
import { Category } from "./Category";
interface props {
  getData: () => void;
}
export const ShowCard: React.FC<props> = ({ getData }) => {
  const { cardDetail, totalAmount, removeService } = useCard();
  const { authData } = useContextData();
  const [showPaymentPage, setPaymentPage] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleCheckOutBtn = () => {
    if (authData.auth) {
      setPaymentPage(true);
    } else {
      navigate("/login");
    }
  };
  const isCardItemAdded = cardDetail.length > 0 ? true : false;
  
  return (<>
    <div id='pararentCartBox'>
      <h3>Cart Section</h3>
      <Category getData={getData} />
      {isCardItemAdded && (
      <div className=" card-inner">
        {cardDetail.map((val, index) => {
          return (
            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                key={index}
                className="col serviceItem"
              >
                <div>
                  <p className="serviceInfo">{val.serviceName}</p>
                </div>
                <div>
                  <p className="serviceInfo">{val.price}</p>
                </div>
                <div>
                  <button
                    // style={{ marginRight: "10px" }}
                    className="btn"
                    onClick={() => removeService(val.os_id)}
                  >
                    X
                  </button>
                </div>
              </div>
          );
        })}
      </div>)}
      {totalAmount > 0 && <h3>Total {totalAmount}</h3>}
      {totalAmount > 0 && (
        <button
        onClick={handleCheckOutBtn}
        className="btn btn-primary"
        style={{ width: "100%" }}
      >
        Check Out
      </button>
      )}
      {showPaymentPage && authData.auth && (
        <div id="paymentPage">
          <div style={{ marginTop: "80px" }}>
            <button className="btn" onClick={() => setPaymentPage(false)}>
              {" "}
              Back{" "}
            </button>
            <h2>Payment Page</h2>
          </div>
        </div>
      )}
    </div>
    <div id="cartShowinPhoneView" >
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>
            <h2>Total: {totalAmount}</h2>
          </div>
          <div>
            <button onClick={()=>navigate('/viewcart')} className="btn btn-primary">View Cart ({cardDetail.length})</button>
          </div>
        </div>
    </div>
    </>
  );
};
