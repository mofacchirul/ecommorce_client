import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import PublicAxios from '../../PublicAxios/PublicAxios';
import { Authcontext } from '../../../Provider/ProviderAuth/ProviderAuth';


const Itemtan = () => {
const axios= PublicAxios()
const {user}=useContext(Authcontext)

    const {data: item = [],refetch} = useQuery(
        {
            queryKey:['item', user?.email],
            queryFn: async()=>{
                const res= await axios.get(`/item?email=${user?.email}`);
                return res.data
            }
        }
    )
    return [item,refetch]
};

export default Itemtan;