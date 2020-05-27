import React, {useEffect, useState} from 'react';
import {getUser} from "./helper/adminpicell";
import {Link} from "react-router-dom";
import NavbarCon from "../component/navbarCon";
import ManageAdmin from "./ManageAdmin";
import Spinner from "../common/Spinner";

const ManageUsers=()=>  {

    const [users,setUsers] = useState([]);
    const [load,setLoading] = useState(false)

    const preload=()=>{
        setLoading(true)
        getUser().then(data=>{
            if(data.error){
                console.log(data.data.error)
            }
            else{
                setUsers(data.data);
                setLoading(false)
            }
        });
    }

    useEffect(()=>{
        preload();
    },[])

    const loadingMessage=()=>{
        return <Spinner/>
    }

    const returUsers=()=>{
        return (
            <div>
                <h2 className="mb-4">All Users:</h2>
                <Link className="btn btn-info" to={`/admin/dashboard`}>
                    <span className="">Admin Home</span>
                </Link>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center text-white my-3">Total {Object.keys(users).length} Users</h2>

                        {users.map((user, index) => {
                            return (
                                <div key={index} className="row text-center mb-2 ">
                                    <div className="col-4">
                                        <h3 className="text-black text-left">{user.name}</h3>
                                    </div>
                                    <div className="col-5">
                                        <h5 className="text-black">{user.email}</h5>
                                    </div>
                                    <div className="col-5">
                                        <h5 className="text-black ">{user.role}</h5>
                                    </div>
                                    <div className="col-4">
                                        <Link
                                            className="btn btn-danger"
                                            to={`/admin/user/update/${user._id}`}
                                        >
                                            <span className="">Update</span>
                                        </Link>
                                    </div>
                                    {/*<div className="col-4">*/}
                                    {/*    <button*/}
                                    {/*        onClick={() => {*/}
                                    {/*            // deleteThisProduct(users._id);*/}
                                    {/*        }}*/}
                                    {/*        className="btn btn-danger"*/}
                                    {/*    >*/}
                                    {/*        Delete*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }

        return (
            <div className="container bg-success p-4">
                <NavbarCon/>
                <div className="row">
                    <div className="col-3">{ManageAdmin()}</div>
                    <div className="col-9">{!load? returUsers():loadingMessage()}</div>

                </div>
            </div>
        );

}

export default ManageUsers;