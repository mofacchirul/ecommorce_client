import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/ProviderAuth/ProviderAuth";

 const Axioscreate = axios.create(
   {
    baseURL: 'https://ecommerce-server-six.vercel.app',
    
   }
)
const Secure = () => { 
  const navigate= useNavigate()
  const {Singout}=useContext(Authcontext)

  Axioscreate.interceptors.request.use(function (config) {
      const token = localStorage.getItem('access-token');
      console.log(token);
      config.headers.authorization= ` Bearer ${token}`  
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  Axioscreate.interceptors.response.use(function(response){
    return response
  },
 async (error)=>{
    const status= error.response.status;
    console.log(status);
    if(status === 401 || status=== 403){
      await Singout()
      navigate('/login')
     }

    return Promise.reject(error)
    
  }
)




    return Axioscreate
};

export default Secure;

