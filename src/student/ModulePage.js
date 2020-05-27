import React, {useEffect, useState} from 'react';
import NavbarCon from "../component/navbarCon";
import {isAutheticated} from "../auth/helper";
import { getOneModule} from "./helper/studentpicell";
import LoginNav from "../component/loginNav";
import Navbar from "../component/navbar";
import StudentDashboard from "../user/studentDashboard";

const ModulePage =({match})=> {
    const [module,setModule] = useState("");

    const {user,token} = isAutheticated();

    const preload = moduleId => {

        if(user){
            getOneModule(moduleId).then(data => {
                if (data?.error) {
                    console.log("error for module",data.error);
                } else {
                    setModule({...data,module});

                }
            });
        }

    };

    useEffect(() => {
        preload(match.params.moduleId);
    }, [module]);




        return (
            <div>

                <NavbarCon/>
                {module.name}
            </div>
        );

}

export default ModulePage;