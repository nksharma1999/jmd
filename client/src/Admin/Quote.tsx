import {IP} from '../backendConnection/IP';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

interface userMetaData{
    Date:Date|string,
    carType:{manufacturer: string, model: string, fuel: string},
    status:string,
    userNumber:Number,
    __v: Number,
    _id: string
}
export const Quote = () =>{

    const [data,setData] = useState<userMetaData[]>([{
        Date:'',
        carType:{manufacturer: '', model: '', fuel: ''},
        status:'',
        userNumber:0,
        __v: 0,
        _id: ''
    }]);
    const getUserData = async()=>{
        const res =await Axios.get(IP+'admin');
        // console.log(res.data);
        setData(res.data);
    }
    useEffect(()=>{
        getUserData();
    },[]);

    return <div className="container-fluid">
        {data.map((val,index)=>{
            return <div key={index}>
                <p>Car Type</p>
                <h3>{val.carType.manufacturer} , {val.carType.model} , {val.carType.fuel}</h3>
                <p>User Contact: {val.userNumber.toString()}</p>
                <p>Status: {val.status}</p>

            </div>
        })}
        <Outlet/>
    </div>
}