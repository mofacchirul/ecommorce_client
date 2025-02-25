import { useQuery } from '@tanstack/react-query';
import PublicAxios from '../../../../Axios/PublicAxios/PublicAxios';



const UseReviws = () => {
   const axios= PublicAxios();
   const {data: reviws,isLoading:loding}=useQuery(
    {
        queryKey:['reviws',],
        queryFn:async ()=>{
            const res = await axios.get('/reviws');
            return res?.data

        }
    }
   )

   return [reviws,loding]
};

export default UseReviws;