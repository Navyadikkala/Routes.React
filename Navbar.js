import react from 'react';
import {NavLink} from "react-router-dom";
 const Navbar=()=>{
 const changestyle=({isActive})=>{
    return{
        backgroundcolor:isActive?'yellow':'red'
    }
}
return(
     
            <div style={{backgroundColor:'pink',height:'100px',color:"white"}}>
            <NavLink to="/" style={changestyle}>Home</NavLink>
            <NavLink to="About" style={changestyle}>About</NavLink>
            </div>
    );
};
export default Navbar;