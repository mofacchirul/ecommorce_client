
import { useQuery } from '@tanstack/react-query';
import PublicAxios from "../../../Axios/PublicAxios/PublicAxios";
const Kids_tanUse = () => {
    const axios= PublicAxios();
    const {data: kids,isLoading:loding}=useQuery(
     {
         queryKey:['kids',],
         queryFn:async ()=>{
             const res = await axios.get('/kids');
             return res?.data
 
         }
     }
    )
 
    return [kids,loding]
};

export default Kids_tanUse;