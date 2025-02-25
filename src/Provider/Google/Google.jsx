import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../ProviderAuth/ProviderAuth';
import Swal from 'sweetalert2';
import PublicAxios from '../../Axios/PublicAxios/PublicAxios';
// import Swal from 'sweetalert2';
const Google = () => {
    const {Google}=useContext(Authcontext)
    const axios = PublicAxios()
    const navigate = useNavigate()
const HandleGoole = ()=>{
    Google()
    .then(result=>{
       
        const userInfo= {
            email: result.user?.email,
            name:result.user?.displayName
        }
        axios.post('/user',userInfo)
        .then(res=>{
          if(res.data.insertedId){
              Swal.fire({
                    title: "Google login success",
                    icon: "success",
                    draggable: true
                  });
          }
            navigate('/')
        })

        navigate('/')

    })
}

    return (
        <div className='py-3'>
           <button onClick={HandleGoole} className="btn btn-block text-xl bg-white"><img className='h-10 ' src='https://i.ibb.co.com/VcjpRTPz/icons8-google-100.png' alt="" /> Google </button>
        </div>
    );
};

export default Google;