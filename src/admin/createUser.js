import React, {useState} from 'react';
import ManageAdmin from "./ManageAdmin";
import NavbarCon from "../component/navbarCon";
import {toast, ToastContainer} from "react-toastify";
import {createuser} from "./helper/adminpicell";
import Spinner from "../common/Spinner";



const CreateUser=()=>  {

    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        loading:false,
        error:"",
        role:"",
        success:false
    })

    const {name,email,password,role,error,success,loading} = values;

    const handleChange = name => event => {
        setValues({ ...values, error: "", [name]: event.target.value });
    };

    const newUser = {
        name:name,
        email: email,
        password: password,
        role:role
    }


    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "",loading:true });
            createuser(newUser)
                .then(
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        loading:false,
                        success: true
                    })
                )
                .catch(function (error) {
                    setValues({ ...values, error: error,loading:false, success: false });
                    if (error.response) {
                        toast.error(error.response.data);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
    };




    const loadingMessage=()=>{
            return <Spinner/>
    }


    const successMessage = () => {
        if (success) {
            return (
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going to
                            run a bit longer so that you can see how spacing within an alert works with this kind of
                            content.</p>
                        <hr/>
                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things
                                nice and tidy.</p>
                    </div>
            );
        }
    };


    const createUser=()=>{
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-3">
                        <label htmlFor="inputText4">Name</label>
                        <input onChange={handleChange("name")}
                               value={name} type="text" className="form-control" id="inputText4"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-3">
                        <label htmlFor="inputEmail4">Email</label>
                        <input onChange={handleChange("email")}
                               value={email} type="email" className="form-control" id="inputEmail4"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-3">
                        <label htmlFor="password">Password</label>
                        <input  onChange={handleChange("password")}
                                value={password} type="password" className="form-control" id="inputPassword4"/>
                    </div>
                </div>
                <div className="form-row">

                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <label htmlFor="role">Role</label>
                                <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                                <select  value={role} onChange={handleChange("role")} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option select="true">Choose...</option>
                                    <option value="student">Student</option>
                                    <option value="instructor">Instructor</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>


                </div>
                <button onClick={onSubmit}  type="submit" className="btn btn-primary">Sign in</button>
            </form>


        )
    }


        return (
            <div className="container bg-success p-4">
                <NavbarCon/>
                <div className="row">
                    <div className="col-3">{ManageAdmin()}</div>
                    <div className="col-9">{!loading ? createUser() :loadingMessage() }</div>

                </div>
                {successMessage()}
            </div>
        );

}

export default CreateUser;