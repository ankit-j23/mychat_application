import {create} from 'zustand'
import {axiosInstance} from '../lib/axios.js'
import toast from 'react-hot-toast';
export const useAuthStore = create((set)=>({
    authUser: null,
    isSigningUp: false,
    isLogingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    //when the user is logged or signed in , fetch the userdata and make the isCheckingAuth false , for making loader and not showing home
    checkAuth: async () =>{
        try {
            const res = await axiosInstance.get('/auth/check');

            set({authUser: res.data})
        } catch (error) {
            console.log("Some error occured in checkAuth" , error)
            set({authUser: null})
        }finally{
            set({isCheckingAuth: false})
        }
    },

    signup: async(data)=>{
        set({isSigningUp: true})
        try {
            const res  = await axiosInstance.post("/auth/signup" , data)
            set({authUser: res.data})
            toast.success("Account created successfully")
        } catch (error) {
            // console.log("Some error occured in the signup function in useAuthStore" + error.message)
            toast.error(error.response.data.message)
        } finally {
            set({isSigningUp: false})
        }
    },

    login: async(data)=>{
        set({isLogingIn: true})
        try {
            const res  = await axiosInstance.post("/auth/login" , data)
            set({authUser: res.data})
            toast.success("Logged in successfully")
        } catch (error) {
            // console.log("Some error occured in the login function in useAuthStore" + error.message)
            toast.error(error.response.data.message)
        } finally {
            set({isLogingIn: false})
        }
    },

    logout: async()=>{
        try {
            const res = await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

}))