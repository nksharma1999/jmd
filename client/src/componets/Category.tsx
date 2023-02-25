import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface props {
  getData: () => void;
}
export const Category: React.FC<props> = ({ getData }) => {
  const [showManu, setManu] = useState(false);
  const [showModel, setModel] = useState(false);
  const [showFuel, setFuel] = useState(false);
  const [showOnButton, setTextOnButton] = useState(false);
  const [selected, setSelectionOption] = useState({
    manuf: "",
    model: "",
    fuel: ""
  });
  useEffect(() => {
    if (showOnButton) {
      window.localStorage.setItem("carType", JSON.stringify(selected));
      // console.log("Calling in showOnButton Change");
      getData();
    }
  }, [showOnButton]);

  const prevSelectedCarType = () => {
    const cartype = JSON.parse(localStorage.getItem("carType") as string);
    if (cartype) {
      setSelectionOption(cartype);
      setTextOnButton(true);
    }
  };
  useEffect(() => {
    prevSelectedCarType();
  }, []);

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
    prevSelectedCarType();
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
    <div className="container-fluid">
      {!showManu && !showModel && !showFuel && (
        <button
          className="btn btn-primary"
          onClick={() => {
            setManu(!showManu);
            setTextOnButton(false);
          }}
        >
          {!showOnButton ? (
            "Select Manufacturer"
          ) : (
            <span>
              {selected.manuf} , {selected.model} , {selected.fuel}
            </span>
          )}
        </button>
      )}

      {showManu && (
        <div id="selectCartypeOuterBox">
          <div className="selectinInnerBox shadow-lg p-3 mb-5 bg-body rounded">
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
        </div>
      )}
      {showModel && (
        <div id="selectCartypeOuterBox">
          <div className="selectinInnerBox shadow-lg p-3 mb-5 bg-body rounded">
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
        </div>
      )}
      {showFuel && (
        <div id="selectCartypeOuterBox">
          <div className="selectinInnerBox shadow-lg p-3 mb-5 bg-body rounded">
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
        </div>
      )}
    </div>
  );
};
