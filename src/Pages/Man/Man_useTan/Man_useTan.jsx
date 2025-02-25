
import { useQuery } from '@tanstack/react-query';
import PublicAxios from "../../../Axios/PublicAxios/PublicAxios";
const Man_useTan = () => {
    const axios= PublicAxios();
   const {data: man,isLoading:loding}=useQuery(
    {
        queryKey:['man',],
        queryFn:async ()=>{
            const res = await axios.get('/man');
            return res?.data

        }
    }
   )

   return [man,loding]
};

export default Man_useTan;