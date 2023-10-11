import React, {useState} from 'react'; //import react to use react components
import {BrowserRouter} from "react-router-dom"; //import BrowserRouter to use routing
import AdminRouting from "./Routing/routing.js";

const App = () => {
    return (
        //return page with header, footer and routing
        <BrowserRouter>
        {/* use user as prop data for header and routing */}
            <div className='page'> 
                <AdminRouting />
            </div>
        </BrowserRouter>
    );
};

export default App; //export app component to be used in index.js

//data to add to readme below

//<a href="https://www.flaticon.com/free-icons/cinema" title="cinema icons">Cinema icons created by Freepik - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/cinema" title="cinema icons">Cinema icons created by Freepik - Flaticon</a>
//https://www.w3schools.com/css/tryit.asp?filename=trycss_grid
//https://www.w3schools.com/css/tryit.asp?filename=trycss_link_advanced2