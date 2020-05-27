import React,{useState} from 'react';
import { Redirect } from "react-router-dom";

import {signin, authenticate, isAutheticated, getUserImage} from "../auth/helper";
import bedford from "../pics/bedford.png";
import defaultimage from "../pics/Default_Profile_Picture.png"
import {API} from "../backend";

const LoginNav=()=> {

    const [values, setValues] = useState({
        email: "hasheemhush+24@gmail.com",
        password: "hasheem123",
        error: "",
        loading: false,
        didRedirect: false
    });

    const { email, password, error, loading, didRedirect } = values;
    const { user } = isAutheticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };



    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(data => {
                if (data.data.error) {
                    setValues({ ...values, error: data.data.error, loading: false });
                } else {
                    authenticate(data.data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        });
                    });
                }
            })
            .catch(console.log("signin request failed"));
    };
    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };

    const performRedirect = () => {
        if (isAutheticated()) {
            if (user && user.isAdmin) {
                return <Redirect to="/admin/dashboard" />;
            }
            if(user && user.role==="student") {
                return <Redirect to="/student/dashboard" />;
            }if(user && user.role==="instructor"){
                return  <Redirect to="/instructor/dashboard"/>
            }
        }
    };




    const signInForm = ()=>{
        return(
            <div className="row">
                <div className="col">
                    <img src={bedford} className="rounded float-left"  height="70px" width="400px"/>
                </div>
                {!isAutheticated() && <div className="col">
                    <div>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-5">
                                    <input type="email" value={email} className="form-control" placeholder="UserName"
                                           onChange={handleChange("email")}/>
                                </div>
                                <div className="col-sm-5">
                                    <input type="password" value={password} className="form-control"
                                           onChange={handleChange("password")}
                                    />
                                </div>
                                <div className="col">
                                    <button onClick={onSubmit} className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>}
                {isAutheticated() && <div className="col-sm-3">
                    <a href="#" className="text-decoration-none">{user.name}</a>
                </div>}
                {
                    isAutheticated() && ( <img src={`${API}/user/photo/${user._id}`} className="rounded-circle float-left"
                                             style={{ maxHeight: "65%", maxWidth: "15%" }}
                                             alt="photo"/>)
                }

            </div>





        )
    }

    return (
        <div>

        {signInForm()}
        {errorMessage()}
        {performRedirect()}
        </div>
    );
}

export default LoginNav;