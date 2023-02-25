export const HowWork = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>How JMD Garage Works?</h2>
      
      <div className="row">
        <div className="col">
          <ul
            className="progress-bar"
            style={{ backgroundColor: "transparent" }}
          >
            <li>
              <span style={{ fontSize:"15px",fontWeight:"400",color: "#1A1919" }}>Choose from the wide range of services for your car</span>
              
            </li>
            <li>
              <span style={{fontSize:"15px",fontWeight:"400", color: "#1A1919" }}>Schedule a doorstep service </span>
            </li>
            <li>
              <span style={{fontSize:"15px",fontWeight:"400", color: "#1A1919" }}>Track vehicle’s service in real time on your phone</span>
            </li>
            <li>
              <span style={{fontSize:"15px",fontWeight:"400", color: "#1A1919" }}>Delivery at doorstep</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
