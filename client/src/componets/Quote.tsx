import { useParams } from "react-router-dom";
import { useRef, useState} from "react";
import {IP} from '../backendConnection/IP';
import Axios from 'axios';
export const Quote = () => {
  const param = useParams();

  const [showManu, setManu] = useState(false);
  const [showModel, setModel] = useState(false);
  const [showFuel, setFuel] = useState(false);
  const [showOnButton, setTextOnButton] = useState(false);
  const [selected, setSelectionOption] = useState({
    manuf: "",
    model: "",
    fuel: ""
  });
  const quoteNumber= useRef<any>(null);

  const handleSubmit = async() =>{
    const userNumber= quoteNumber.current.value;
    if(userNumber===''){
      alert("Please enter number");
      return ;
    }
    if(selected.manuf==='' || selected.fuel===''||selected.model===''){
      alert("Please Select Car Type");
      return;
    }
    const data = {
     carType:{manufacturer:selected.manuf,model:selected.model,fuel:selected.fuel},
     userNumber:userNumber 
    }
    Axios.post(IP+'user/quoteData',data).then((res)=> alert(res.data.msg)).catch((err)=>alert(err))
    // alert(quoteNumber.current.value);
  }
  const handleManuf = (manufacturer: string) => {
    setSelectionOption({ ...selected, manuf: manufacturer });
    setModel(true);
    setManu(false);
  };
  const handleManuBack = () => {
    setSelectionOption({
      manuf: "",
      model: "",
      fuel: ""
    });
    setManu(false);
    setTextOnButton(false);
    //setModel(false);
  };
  const handleModel = (model: string) => {
    setSelectionOption({ ...selected, model: model });
    setFuel(true);
    setModel(false);
  };
  const handleModelBack = () => {
    setSelectionOption({ ...selected, model: "" });
    setModel(false);
    setManu(true);
  };
  const handleFuel = (fuel: string) => {
    setSelectionOption({ ...selected, fuel: fuel });
    setFuel(false);
    setTextOnButton(true);
  };
  const handleFuelBack = () => {
    setSelectionOption({ ...selected, fuel: "" });
    setFuel(false);
    setModel(true);
  };
  const Manufacturer = [
    "Tata",
    "Audi",
    "Mahindra",
    "Tata",
    "Tata",
    "Audi",
    "Mahindra",
    "Audi",
    "Mahindra"
  ];
  const Model = [
    "tata2",
    "sdgsd",
    "bcdsbsdf",
    "sdgsd",
    "sdgsd",
    "bcdsbsdf",
    "bcdsbsdf"
  ];
  const Fuel = ["diseal", "petrol", "electric", "CNG"];

  return (
    <div className="container-fluid container-quoteBox">
      {!showManu && !showModel && !showFuel && (
        <div className="quoteBox shadow-lg p-3 mb-5 bg-body rounded">
          <p>Get a free quote</p>
          <p>City: {param.location}</p>
          <button className="btn-dark" onClick={() => setManu(!showManu)}>
            {!showOnButton ? (
              "Select Manufacturer"
            ) : (
              <span>
                {selected.manuf} , {selected.model} , {selected.fuel}
              </span>
            )}
          </button>
          {/* <Category selectedFilter={selectedFilter} /> */}
          <br />
          <div className="mb-3 " style={{ textAlign: "left" }}>
            <label htmlFor="phoneNUmber" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNUmber"
              placeholder="Enter Phone Number"
              maxLength={10}
              ref={quoteNumber}
              // value={firstName}
              // onChange={handleNameChange}
            />
          </div>

          <button
            className="btn"
            style={{ backgroundColor: "rgb(209, 25, 25)", color: "white" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p>Contact Us: +91 2324222352</p>
          {/* <p>
            {selected.manuf} , {selected.model} , {selected.fuel}
          </p> */}
        </div>
      )}
      {showManu && (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <div className="row">
            <div className="col-1">
              <div onClick={handleManuBack} className="">
                <i className="fas fa-arrow-left"></i>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "left" }}>
              <h6>Select Manufacturer</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            {Manufacturer.map((val, index) => {
              return (
                <div
                  key={index}
                  className="col-6 col-sm-4 col-md-3 col-lg-3 manufature"
                  style={{ textAlign: "center" }}
                >
                  <button className="btn" onClick={() => handleManuf(val)}>
                    {val}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {showModel && (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <div className="row">
            <div className="col-1">
              <div onClick={handleModelBack} className="">
                <i className="fas fa-arrow-left"></i>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "left" }}>
              <h6>Select Model</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            {Model.map((val, index) => {
              return (
                <div
                  key={index}
                  className="col-6 col-sm-4 col-md-3 col-lg-3 manufature"
                  style={{ textAlign: "center" }}
                >
                  <button onClick={() => handleModel(val)} className="btn">
                    {val}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {showFuel && (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <div className="row">
            <div className="col-1">
              <div onClick={handleFuelBack} className="">
                <i className="fas fa-arrow-left"></i>
              </div>
            </div>
            <div className="col-auto" style={{ textAlign: "left" }}>
              <h6>Select Fuel Type</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            {Fuel.map((val, index) => {
              return (
                <div
                  key={index}
                  className="col-6 col-sm-4 col-md-3 col-lg-3 manufature"
                  style={{ textAlign: "center" }}
                >
                  <button onClick={() => handleFuel(val)} className="btn">
                    {val}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
