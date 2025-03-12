import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set)=>({
    messages : [],
    users: [],
    selectedUser: null,
    isUserLoading: false,
    isMessageLoading: false,

    //end point for fetching all the users
    getUsers: async () =>{
        try {
            set({isUserLoading: true});
            const res = await axiosInstance.get("/auth/fetchUsers");
            set({users: res.data})
        } catch (error) {
            console.log("Some error occured in the getUsers function in the useChatStore"+ error.message)
            toast.error(error.response.data.message)
        } finally{
            set({isUserLoading: false})
        }
    },

    //end point for fetching all the messages
    getMessages: async () =>{
        try {
            set({isMessageLoading: true})
            const res = await axiosInstance.get(`/message/${userId}`);
            set({messages: res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        } finally{
            set({isMessageLoading: false})
        }
    },

    setselectedUser: async (selectedUser) => set({ selectedUser })
}))