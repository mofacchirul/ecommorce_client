import { useContext } from "react";
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from "../../../Provider/ProviderAuth/ProviderAuth";
import Secure from "../../../Axios/Secure/Secure";



const UseAmdmin = () => {
    const {user}=useContext(Authcontext)
    const axios= Secure()
    
    const {data:admin,isLoading:isloding}=useQuery({
        queryKey: [user?.email, 'admin'],
        queryFn:async ()=>{
            const res= await axios.get(`/user/${user.email}`)
            return res.data?.admin
        }
    })

    return [admin,isloding]
};

export default UseAmdmin;