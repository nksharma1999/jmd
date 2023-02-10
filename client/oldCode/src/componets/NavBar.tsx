import {NavLink,Navigate} from 'react-router-dom'

export const NavBar = () =>{
    const city = ['pune','mumbai','delhi'];
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                City
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {
                      city.map((val,index)=>{
                          return <li><NavLink  to={val} className="dropdown-item"  > {val}</NavLink></li>
                      })
                  }
              </ul>
            </li>
            
          </ul>
          <div className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <NavLink className="btn btn-outline-success" to='/login'>Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
    );
}


// <nav classNameName='navbar'>
    //     <button clasName="tag" onClick={handleReload}>Logo</button>
    //     <NavLink to='/city' className="tag">City</NavLink>
    //     <NavLink to='/login' className="tag">Login</NavLink>
    // </nav>


    // (
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Logo</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-md-0">
    //         {/* <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li> */}
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             City
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               {
    //                   city.map((val,index)=>{
    //                       return <li><NavLink  to={val} className="dropdown-item"  > {val}</NavLink></li>
    //                   })
    //               }
    //           </ul>
    //         </li>
            
    //       </ul>
    //       <div className="d-flex">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <NavLink className="btn btn-outline-success" to='/login'>Login</NavLink>
    //       </div>
    //     </div>
    //   </div>
    // </nav>);