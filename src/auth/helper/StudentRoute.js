import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAutheticated } from "./index";

const StudentRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAutheticated() && isAutheticated().user.role==="student" ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default StudentRoute;