import { useState } from "react";
import Axios from "axios";
export const OtpBasedLogin = () => {
  const [showOtpBox, setOtpBox] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [phone, setPhone] = useState("");
  const handleChange = (ele: any, index: number) => {
    if (isNaN(ele.value)) return false;
    setOtp([...otp.map((data, id) => (id === index ? ele.value : data))]);

    if (ele.nextSibling) {
      ele.nextSibling.focus();
    }
  };
  const handlePhoneinput = (input: any) => {
    if (isNaN(input.value)) return false;
    setPhone(input.value);
  };
  return (
    <div
      className="container-fluid"
      style={{
        position: "absolute",
        top: "20%",
        margin: "auto",
        textAlign: "center"
      }}
    >
      <h3>Login</h3>
      <div
        style={{
          border: "2px solid blue",
          width: "220px",
          margin: "auto",
          padding: "20px"
        }}
      >
        <div>
          <input
            style={{ padding: "10px", width: "100%" }}
            type="tel"
            maxLength={10}
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => handlePhoneinput(e.target)}
          />
        </div>
        {showOtpBox && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            {otp.map((data, index) => {
              return (
                <input
                  type="tel"
                  className="otp-field"
                  style={{
                    width: "30px",
                    marginTop: "20px",
                    textAlign: "center"
                  }}
                  name="otp"
                  maxLength={1}
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.focus}
                />
              );
            })}
          </div>
        )}
        {/* <p>OTP : {otp.join("")}</p> */}
        {showOtpBox ? (
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div>
              <button
                onClick={() => setOtp([...otp.map((v) => "")])}
                className="btn btn-primary"
              >
                Clear
              </button>
            </div>
            <div>
              <button className="btn btn-primary">Verify OTP</button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setOtpBox(!showOtpBox)}
            style={{ marginTop: "10px" }}
            className="btn btn-primary"
          >
            Send OTP
          </button>
        )}
      </div>
    </div>
  );
};
