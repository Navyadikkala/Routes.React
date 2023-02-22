import React from "react";
import{useNavigate} from "react-router-dom";
 const Detailpage=()=>{
      const Navigate=useNavigate();
      return (
        <div>
            <h2>details page..</h2>
            <button onClick={()=>{
               Navigate(-1);
                }
            }
             >
                Go back</button>

        </div>
      );
 };
 export default Detailpage;