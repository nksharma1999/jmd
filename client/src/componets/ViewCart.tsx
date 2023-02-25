import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCard } from "../context/Cart";
import { useContextData } from "../context/context";


export const ViewCart = () =>{
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
    return <div id="viewCartBox" style={{marginTop:"90px"}}>
        <div  className="viewInnerCard">
            {isCardItemAdded ?(
                <div>
                    <h3 style={{textAlign:"center"}}>Your Cart ({cardDetail.length} Items)</h3>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Service</th>
                            <th scope="col" style={{textAlign:"center"}}>Price</th>
                            <th scope="col" style={{textAlign:"right"}}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cardDetail.map((val,index)=>{
                                return <tr>
                                    <th>{val.serviceName}</th>
                                    <td style={{color:"#adb5bd",textAlign:"center"}}><i className="fa-solid fa-indian-rupee-sign"></i> {val.price}</td>
                                    <td style={{textAlign:"right",color:"#adb5bd"}}>
                                        <i className="fa-solid fa-indian-rupee-sign"></i> {val.price}
                                        <button className="btn" onClick={() => removeService(val.os_id)}>
                                            <i className="fas fa-times-circle" style={{color:"#adb5bd"}}></i>
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6" >
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th>Subtotal:</th>
                                        <td style={{color:"#adb5bd",textAlign:"right"}}><i className="fa-solid fa-indian-rupee-sign"></i> {totalAmount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
                ):<div style={{textAlign:"center"}}>
                    <h3>Missing Cart items?</h3> 
                    <button className="btn btn-primary" onClick={()=>navigate(-1)}>Back</button>
                </div>
            }
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
                <div id="paymentPage" style={{ marginTop: "80px"}}>
                <div style={{margin:"auto",textAlign:"center"}}>
                    <button className="btn" onClick={() => setPaymentPage(false)}>
                    {" "}
                    Back{" "}
                    </button>
                    <h2>Payment Page</h2>
                </div>
                </div>
            )}
        </div>
    </div>
}