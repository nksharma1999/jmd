import { NavLink } from "react-router-dom";

export const Footer:React.FC = () =>{
    const city = ["pune", "mumbai", "delhi"];
    return <div className="footerParent" style={{backgroundColor:"#1A1919",color:"white",padding:"20px"}}>
            <div className="logo_city">
                <div> JMD Car Garage </div>
                <div>
                        <a
                            className="nav-link dropdown-toggle navBarElement"
                            href="/"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            City
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {city.map((val, index) => {
                                return (
                                    <li key={index}>
                                <NavLink to={val} className="dropdown-item">
                                    {val}
                                </NavLink>
                                </li>
                            );
                        })}
                        </ul>
                    </div>
            {/* </li> */}
            </div>
            <div className="row" style={{color:"white",marginTop:"20px"}}>
                <div className="col-3 officeDetails">
                    <p>Registered Office:</p> 
                    <p className="officeDetail_text">41/F Andheri East</p>
                    <p className="officeDetail_text"> Mumbai</p>
                    <p className="officeDetail_text">Ph. No. - +91-9899323222</p>
                </div>
                <div className="col-6 footer_Service">
                        <div className="row">
                            <div className="col-4">
                                <ul>
                                    <li className="footer_serviceText">Our Services</li>
                                    <li>Our Services</li>
                                    <li>Our Services</li>
                                    <li>Our Services</li>
                                    <li>Our Services</li>
                                    <li>Our Services</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul>
                                    <li className="footer_serviceText">Select Manufacturer</li>
                                    <li>Maruti Suzuki</li>
                                    <li>Tata</li>
                                    <li>NISSAN</li>
                                    <li>Mahindra</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul>
                                    <li className="footer_serviceText">Select Model</li>
                                    <li>Nexon</li>
                                    <li>Tiago</li>
                                    <li>Punch</li>
                                    <li>Nano</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className="col-3 social" >
                    <p>Follow us</p>
                    <p className="officeDetail_text">for more updates</p>
                    <p className="officeDetail_text">on offers and Services</p>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                </div>
            </div>
    </div>
}