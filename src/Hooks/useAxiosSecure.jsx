import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure =  axios.create({
    baseURL: 'https://car-doctor-server-puce-alpha.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOut} = UseAuth()
    const Navigate = useNavigate();

    useEffect(() =>{
        
        axiosSecure.interceptors.response.use(res =>{
            return res;
        }
        ,
        error =>{
            console.log('error tracked in the interceptors',error.response)
            if(error.response.status === 401 || error.response.status === 403){
                console.log('log out the user ')
                logOut()
                .then(() =>{
                    Navigate('/login')
                })
                .catch( error => console.log(error))
            }
        }
        )
    },[])


    return axiosSecure;
};

export default useAxiosSecure;