import { NavLink, Outlet } from "react-router-dom"

export const AdminHome = ()=>{
    return <div className="container-fluid container-fluid-new">
        <h4>Admin Home Page</h4>
        <div className="adminNav shadow-lg p-3 mb-4  rounded">
        <NavLink to ='quote'>Quote</NavLink>
        <NavLink to ='open'>Open</NavLink>
        <NavLink to ='decline'>Decline</NavLink>
        <NavLink to ='accepted'>Accepted</NavLink>
        {/* <NavLink to ='quote'>Quote</NavLink> */}
        </div>
        
        <Outlet/>
    </div>
}