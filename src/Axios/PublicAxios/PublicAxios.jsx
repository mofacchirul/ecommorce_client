import axios from "axios";

 const Axioscreate = axios.create(
   {
    baseURL: 'https://ecommerce-server-six.vercel.app',
    
   }
)
const PublicAxios = () => {
    return Axioscreate
};

export default PublicAxios;

