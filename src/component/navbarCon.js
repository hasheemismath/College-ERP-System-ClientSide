import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {isAutheticated, signout} from "../auth/helper";
import {getModule} from "../student/helper/studentpicell";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#2ecc72" };
    } else {
        return { color: "#FFFFFF" };
    }
};

const NavbarCon=({history})=> {

    const [modules, setModule] = useState([]);

    const { user, token } = isAutheticated();

    const preload = () => {
        if(isAutheticated() && user.role==='student'){
            getModule(user._id).then(data => {
                if (data?.error) {
                    console.log("error for module",data.error);
                } else {
                    setModule(data);
                    console.log("modules",data)
                }
            });
        }

    };

    useEffect(() => {
        preload();
    }, []);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        {isAutheticated() && isAutheticated().user.role === "student" && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/student/dashboard"
                                >
                                    U. Dashboard
                                </Link>
                            </li>
                        )}
                        {isAutheticated() && isAutheticated().user.isAdmin && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/admin/dashboard"
                                >
                                    A. Dashboard
                                </Link>
                            </li>
                        )}
                        {isAutheticated() && isAutheticated().user.role==="student" &&(
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Course
                                </a>

                                <div className="dropdown-menu" >
                                    <div  className="dropdown-content">
                                        {modules.map((module,index)=>{
                                            return (
                                                <div key={index}>
                                                    <Link to={`/course/${module._id}`}>{module.name}</Link>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </li>
                        )}
                        {isAutheticated() && (
                            <li className="nav-item">
                                <span
                                    className="nav-link text-warning"
                                    onClick={() => {
                                        signout(user._id,() => {
                                            history.push("/");
                                            console.log("signout success")
                                        });
                                    }}
                                >
                                    Signout
                               </span>
                            </li>
                        )}

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(NavbarCon);