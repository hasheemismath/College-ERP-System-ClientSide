import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./menu";
import StudentRoute from "./auth/helper/StudentRoute";
import StudentDashboard from "./user/studentDashboard";
import ModulePage from "./student/ModulePage";
import AdminDashBoard from "./user/adminDashboard";
import AdminRoute from "./auth/helper/AdminRoute";
import CreateUser from "./admin/createUser";
import ManageUsers from "./admin/manageUsers";
import UpdateUser from "./admin/updateUser";




const App = () => {
    return (
        <BrowserRouter>
            <ToastContainer/>
            <Switch>
                <Route path="/" exact component={Menu} />
                {/*<Route path="/signup" exact component={Signup} />*/}
                {/*<Route path="/signin" exact component={Signin} />*/}
                {/*<Route path="/cart" exact component={Cart} />*/}
                {/*<PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />*/}
                <StudentRoute path="/student/dashboard" exact component={StudentDashboard} />
                <StudentRoute path="/course/:moduleId" exact component={ModulePage} />

                <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard}/>
                <AdminRoute path="/admin/create/user" exact component={CreateUser}/>
                <AdminRoute path="/admin/users" exact component={ManageUsers}/>
                <AdminRoute path="/admin/user/update/:userId" exact component={UpdateUser}/>
                {/*<StudentRoute*/}
                {/*    path="/admin/create/category"*/}
                {/*    exact*/}
                {/*    component={AddCategory}*/}
                {/*/>*/}
                {/*<StudentRoute*/}
                {/*    path="/admin/categories"*/}
                {/*    exact*/}
                {/*    component={ManageCategories}*/}
                {/*/>*/}
                {/*<StudentRoute path="/admin/create/product" exact component={AddProduct} />*/}

                {/*<StudentRoute path="/admin/products" exact component={ManageProducts} />*/}
                {/*<StudentRoute*/}
                {/*    path="/admin/product/update/:productId"*/}
                {/*    exact*/}
                {/*    component={UpdateProduct}*/}
                {/*/>*/}
                {/*<StudentRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>*/}
            </Switch>
        </BrowserRouter>
    );
};

export default App;
