import React, {Component} from 'react';
import bedford from "../pics/bedford.png"
import LoginNav from "./loginNav";
import NavbarCon from "./navbarCon";

class Navbar extends Component {
    render() {
        return (
            <div>
                <LoginNav/>
                <br/>
                <div className="row-cols-xl-1">
                    <NavbarCon/>
                </div>
            </div>
        );
    }
}

export default Navbar;