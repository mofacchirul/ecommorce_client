

import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../../Provider/ProviderAuth/ProviderAuth';

const Private = ({children}) => {
    const {loding,user}= useContext(Authcontext)
    const location = useLocation()
    if(loding){
        return <div className='flex justify-between items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }


if(user){
    return children
}

    return <Navigate to="/login" state={{from : location}}  replace  ></Navigate>
};

export default Private;