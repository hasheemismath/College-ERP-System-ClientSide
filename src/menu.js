import React from 'react';
import Navbar from "./component/navbar";
import PublicDash from "./component/public_dash";

const Menu=()=> {
    return (
        <div className="container">
            <div>
                <Navbar/>
            </div>
            <div className="row">
                <PublicDash/>
            </div>
        </div>
    );
}

export default Menu;