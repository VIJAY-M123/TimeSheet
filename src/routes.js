
import Forget from "./Conponent/Pages/ForgetPassword.js";
import Login from "./Conponent/Pages/Login.js";
import Register from "./Conponent/Pages/Register.js";

var routes =[
    {
        path: "/login",
        component: Login,
        layout: "/auth",
    },
    {
        path:"/register",
        component:Register,
        layout: "/auth",  
    },
    {
        path:"/forget",
        component:Forget,
        layout: "/auth",  
    },
   
]
export default routes;