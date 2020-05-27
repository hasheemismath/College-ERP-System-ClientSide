import React from 'react';
import {Link} from "react-router-dom";

const ManageAdmin=()=>  {

        return (
            <div>
                <div className="card">
                    <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/admin/create/user" className="nav-link text-success">
                                Create User
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/admin/users" className="nav-link text-success">
                                Manage Users
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/admin/create/product" className="nav-link text-success">
                                Create Product
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/admin/products" className="nav-link text-success">
                                Manage Products
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/admin/orders" className="nav-link text-success">
                                Manage Orders
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        );

}

export default ManageAdmin;