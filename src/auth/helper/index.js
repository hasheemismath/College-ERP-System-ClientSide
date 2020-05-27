import { API } from "../../backend";
import http from "../../backend";


export const signin = user => {
  return http.post(`${API}/signin`, user)
      .then(res=>{
        return res
      }).catch(error=>{
        return error.response
      })
};

export const getUserImage =user=>{
    return http.get(`${API}/user/photo/${user}`)
        .then(res=>{
            return res
        }).catch(error=>{
            return error
        })
}

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {

    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = (userid,next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return http.get(`${API}/logout/${userid}`)
        .then(response => {
          return response
        })
        .catch(err => console.log(err.response));
  }
};


export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
