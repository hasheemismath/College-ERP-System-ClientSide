import {API} from "../../backend";

export const getModule =(userId)=>{
    return fetch(`${API}/student/getModule/${userId}`,{
        method: "GET",

    })
        .then(response=>{
            return response.json()
        })
        .catch(err=>console.log(err))
}

export const getOneModule =moduleId=>{
    return fetch(`${API}/module/${moduleId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}