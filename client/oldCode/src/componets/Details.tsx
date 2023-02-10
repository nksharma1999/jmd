import { useEffect } from "react";
import { useParams } from "react-router-dom";
interface props {
    changeHomePage: (element: boolean) => void;
  }
export  const Details = ({changeHomePage}:props) =>{
    const param = useParams();

  //   console.log(param);
  useEffect(() => {
    // console.log(param);
    changeHomePage(true);
  });
//   console.log(param);
    return <div className="container-fluid" style={{border:'1px solid red',marginTop:'80px',position:'relative',textAlign:'center' }}>
        <h1>City of {param.location}</h1>
        <h1>Service Type: {param.type}</h1>
    </div>
}