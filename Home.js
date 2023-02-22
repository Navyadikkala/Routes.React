import React from 'react';
import{useNavigate} from 'react-router-dom';
const Home=()=>{
    const Navigate=useNavigate();
    return(
        <div>
            <h1>Home page</h1>
            <button onClick={()=>{Navigate('Detailspage')}}>Detailspage</button>
        </div>
    );
};
export default Home;