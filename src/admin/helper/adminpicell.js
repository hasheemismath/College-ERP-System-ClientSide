import {API} from "../../backend";
import http from "../../backend";
import {toast} from "react-toastify";

export const createuser = user=>{
    return http.post(`${API}/user/add`, user)
}

export const getUser= () =>{
    return http.get(`${API}/users/getAll`)
        .then(response=>{
        return response
    })
        .catch(err=>console.log(err))
};

export const getOneUser= userId =>{
    return http.get(`${API}/user/${userId}`)
        .then(response=>{
            return response
        })
        .catch(err=>console.log(err))
}

export const updateUser = (userId,user) =>{
    return http.put(`${API}/user/${userId}`,user)
        // .then(response=>{
        //     return response
        // })
        // .catch(err=>{
        //     toast(err.response.data)
        // })
}