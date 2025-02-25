import { useContext } from "react";
import { Authcontext } from "../../Provider/ProviderAuth/ProviderAuth";
import UseAmdmin from "../../MainLayout/Dashbord/UseAdmin/UseAmdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminPrivat = ( {children} ) => {
    const {user,loding}=useContext(Authcontext)
    const [admin,isloding]=UseAmdmin()
    const location= useLocation()
     if(loding || isloding){
        return <div className=" flex justify-center items-center h-screen">
            <progress className="progress w-56"></progress>
        </div>
     }
   if(user && admin){
    return children
   }

   return <Navigate to="/"  state={{from:location}}  replace ></Navigate>
};

export default AdminPrivat;