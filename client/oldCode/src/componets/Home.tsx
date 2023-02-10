import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { Category } from "./Category";
interface propsHome {
    showHome: boolean;
    changeHomePage: (element: boolean) => void;
  }
export const Home = ({showHome,changeHomePage}:propsHome)=>{
    const param = useParams();
    useEffect(() => {
        // console.log(param);
        if (!param.type) {
          changeHomePage(false);
        }
      }, [param]);

    const navigate = useNavigate();
    const ourService = [
        { url: "reparingandservices", show: "Reparing & Services" },
        {
        url: "dentingandpainting",
        show: " Denting & Paining"
        },
        { url: "acwork", show: "AC-Work (Reparing & Service)" },
        { url: "electricwork", show: "Electric Work" },
        { url: "accessoricework", show: "Accessorice Work" },
        { url: "ensurence", show: "Ensurence" },
        { url: "doorstep", show: "Door Step Service" }
    ];
    const style ={
        border:'1px solid red'
    }
    const [filter,setFilter] = useState({
        manuf:'',
        model:'',
        fuel:''
    });
    const selectedFilter = (filter:any)=>{
        setFilter(filter);
    }
    return (showHome ? (
        <div>
          <Outlet />
        </div>
      ) :(
        <div className="container-fluid" style={{border:'1px solid red',marginTop:'80px',position:'relative'}}>
            <div className="row">
                <div className="col-12 col-lg-6 paddingAllBox" >
                    <h1>Hello1</h1>
                </div>
                <div className="col-12 col-lg-6" style={{...style,backgroundColor:'#768e91',color:'white'}}>
                    <div className="quote">
                    <h1 style={{textAlign:'center'}}>Get a free quote</h1>
                    <p>City: {param.location}</p>
                    <Category selectedFilter={selectedFilter}/>
                    {/* <br/> */}
                    <input type="number" placeholder="Enter Mobile Number"/>
                    <br/>
                    <button className="btn btn-primary">Submit</button>
                    <p>Contact Us: +91 2324222352</p>
                    <p>{filter.manuf} , {filter.model} , {filter.fuel}</p>
                    </div>
                </div>
            </div>

            <div style={style} className='paddingAllBox'>
                <h1>Reviews Section</h1>
            </div>

            <div style={style} className='paddingAllBox'>
                <h1>Benifits And Perks Section </h1>
            </div>
            <div style={{...style,textAlign:'center'}} className='paddingAllBox'>
                <h1>Our Servicess in {param.location} </h1>
                <div className="row">
                    {ourService.map((val, index) => {
                        return (
                            <div style={{textAlign:'center'}}
                            onClick={() => navigate(`${val.url}`)}
                            className="ourservice "
                            key={index}
                            >
                            <div>{val.show}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div style={style} className='paddingAllBox'>
                <button>See All Service</button>
            </div>
            <div style={style} className='paddingAllBox'>
                <h1>How We Work</h1>
            </div>
            <div style={style} className='paddingAllBox'>
                <button> Live Status Tracking</button>
            </div>
            <Outlet />
        </div>)
    );
}

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