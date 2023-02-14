import { Navigate, Outlet } from "react-router-dom";

const CheckLogin=() =>{

    return localStorage.getItem('usertoken') ? (<Outlet/> ) : (<Navigate to='/login'/>)

}

export default CheckLogin;