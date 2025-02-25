import { useQuery } from '@tanstack/react-query';
import PublicAxios from "../../../Axios/PublicAxios/PublicAxios";


const UseTanwoman = () => {
   const axios= PublicAxios();
   const {data: womans,isLoading:loding}=useQuery(
    {
        queryKey:['woman',],
        queryFn:async ()=>{
            const res = await axios.get('/woman');
            return res?.data

        }
    }
   )

   return [womans,loding]
};

export default UseTanwoman;