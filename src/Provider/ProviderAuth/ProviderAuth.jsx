import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import  { createContext, useEffect, useState } from 'react';
import auth from '../../Fire/Firebase'
import PublicAxios from '../../Axios/PublicAxios/PublicAxios';

export const Authcontext= createContext()
const ProviderAuth = ({children}) => {   
    const [user,setuser]=useState(null);
    const [loding,setloding]= useState(true)
    const provider = new GoogleAuthProvider()
const axios = PublicAxios()

    const Resistacesing =(email,password)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const Login =(email,password)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const Singout =()=>{
       
        return signOut(auth);
        
    }
    const UpdateProfile = (update)=>{
        return updateProfile(auth.currentUser,update)
    }

    useEffect(()=>{
        const onauth=  onAuthStateChanged(auth,uerscurrtent=>{
            setuser(uerscurrtent)
            if(uerscurrtent){
                const user= {email : uerscurrtent.email};
                axios.post('/jwt',user)
               .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }
               
               })
                

                
                
            }
            else{
                localStorage.removeItem('access-token')
            }
            setloding(false)
        
           
            })
            return ()=>{
                onauth()
            }
        },[axios]
       
        )


    const Google = ()=>{
        return signInWithPopup(auth,provider)
    }

    const info={
        Resistacesing,
        Login,
        loding,
        user,
        Singout,
        UpdateProfile,
        Google
        
    }
    return (
       <Authcontext.Provider value={info}>
              {
                children
              }
       </Authcontext.Provider>
    );
};

ProviderAuth.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ProviderAuth;