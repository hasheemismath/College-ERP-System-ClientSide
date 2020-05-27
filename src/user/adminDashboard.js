import React from "react";
import { isAutheticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import ManageAdmin from "../admin/ManageAdmin";

const AdminDashBoard = () => {
    const {
        user: { name, email, role }
    } = isAutheticated();

    const adminLeftSide = () => {
        return (
            <ManageAdmin/>
        );
    };

    const adminRightSide = () => {
        return (
            <div className="card mb-4">
                <text> fsdfdsfds</text>
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:</span> {name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:</span> {email}
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-danger">Admin Area</span>
                    </li>
                </ul>
            </div>
        );
    };
    return (
        <div className="container bg-success p-4">
            <Navbar/>
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>
            <text>Tsting</text>
        </div>
    );
};

export default AdminDashBoard;
