import React, {useState} from 'react';
import NavbarCon from "../component/navbarCon";
import ManageAdmin from "./ManageAdmin";
import {getOneUser, updateUser} from "./helper/adminpicell";
import {toast} from "react-toastify";
import {Redirect} from "react-router-dom";
const axios = require('axios')
const {useEffect} = require("react");

const UpdateUser=({match})=>  {

    const [values,setValues] = useState({
        name:"",
        email:"",
        loading:false,
        error:"",
        createUser:"",
        getRidirect:false,
        formData:""
    })

    const {name,email,loading,error,createUser,getRidirect,formData} = values

    const preload=userId=>{
        getOneUser(userId).then(data=>{
            if(data.data.error){
                setValues({...values,error: data.data.error})
            }
            else{
                setValues({
                    ...values,
                    name:data.data.name,
                    email:data.data.email,
                    formData: new FormData()
                })
            }
        })
    }

    useEffect(()=>{
        preload(match.params.userId)
    },[])

    const handleChange = name => event => {
        const value =  event.target.value;

        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };
    const trm=()=>{
        for (let value of formData.values()) {
            console.log("fetting data",value);
        }
    }

    const onSubmit= event=>{
        event.preventDefault();
        setValues({...values,error:"",loading: true})
        trm()
        const updateInsUser = {
           name:values.name,
           email: values.email
        };

        updateUser(match.params.userId,updateInsUser)
            .then(data=>{
                console.log(data)
                if(data.data?.error){
                    setValues({...values,error: data.data.error})
                }else{
                    setValues({
                        name:"",
                        email:"",
                        loading: false,
                        getRidirect: true,
                        createUser: name
                    });
                    toast("User Update Successfully");

                }
            })
            .catch(err=>{
                console.log(err.response.data)
                setValues({...values,error: err.response.data})
                toast(err.response.data)
            })
        ;
    };
    if(getRidirect){
        return <Redirect to='/admin/users' />
    }

    const userForm=()=>{
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-3">
                        <label htmlFor="inputText4">Name</label>
                        <input onChange={handleChange("name")}
                               value={name} name="name" type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-3">
                        <label htmlFor="inputEmail4">Email</label>
                        <input onChange={handleChange("email")}
                               value={email} name="email" type="email" className="form-control" />
                    </div>
                </div>
                <button onClick={onSubmit}  type="submit" className="btn btn-primary">Update</button>
            </form>


        )
    }



        return (
            <div className="container bg-success p-4">
                <NavbarCon/>
                <div className="row">
                    <div className="col-3">{ManageAdmin()}</div>
                    <div className="col-9">{userForm()}</div>

                </div>
            </div>
        );

}

export default UpdateUser;