import { useEffect, useState } from "react";
interface props{
    selectedFilter: (filter:{
        manuf:string,
        model:string,
        fuel:string
    }) =>void;
}
export const Category = ({selectedFilter}:props) =>{
    const [showModel, setModel] =useState(false);
    const [showFuel, setFuel] = useState(false);
    const [selected,setSelectionOption] = useState({
        manuf:'',
        model:'',
        fuel:''
    });
    useEffect(()=>{
        selectedFilter(selected);
    },[selected]);  
    const handleManuf = (manufacturer:string)=>{
        setSelectionOption({...selected,manuf:manufacturer});
        setModel(true);
    }
    const handleModel = (model:string)=>{
        setSelectionOption({...selected,model:model});
        setFuel(true);
    }
    const handleFuel= (fuel:string)=>{
        setSelectionOption({...selected,fuel:fuel});
    }
    const ResetSelection = ()=>{
        setModel(false);
        setFuel(false);
        setSelectionOption({ manuf:'',
        model:'',
        fuel:''});
    }
    // console.log(selected);
    return (<div className="row">
        
        <div className="col dropdown">
            <a className="btn btn-secondary dropdown-toggle dropdownwidth" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {selected.manuf=== '' ? 'Manufacturer':selected.manuf}
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><button onClick={()=>handleManuf("tata")} className="dropdown-item">Tata</button></li>
                <li><button onClick={()=>handleManuf("audi")} className="dropdown-item">Audi</button></li>
                <li><button onClick={()=>handleManuf("mahindra")} className="dropdown-item">Mahindra</button></li>
            </ul>
        </div>
        {showModel && <div className="col dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {selected.model===''? 'Model':selected.model}
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><button onClick={()=>handleModel("tata-3h2")} className="dropdown-item">Tata-3h2</button></li>
                <li><button onClick={()=>handleModel("audi-3s2")} className="dropdown-item">Audi-3s2</button></li>
                <li><button onClick={()=>handleModel("mahindra-s1-2")} className="dropdown-item">Mahindra-s1-2</button></li>
            </ul>
        </div>}

        {showFuel && <div className="col dropdown">
            <a className="btn btn-secondary dropdown-toggle dropdownwidth" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {selected.fuel===''? 'Fuel':selected.fuel}
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><button onClick={()=>handleFuel("electric")} className="dropdown-item">Electric</button></li>

                <li><button onClick={()=>handleFuel("diesel")} className="dropdown-item">Diesel</button></li>
                <li><button onClick={()=>handleFuel("cng")} className="dropdown-item">CNG</button></li>
            </ul>
        </div>}

        { showModel && <div className="col"> <button className= 'btn'onClick={ResetSelection}> Reset </button> </div>}
        <br/>
        </div>
    );
}