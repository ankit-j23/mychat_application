import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import {Loader} from 'lucide-react'
import { Routes, Route, Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast'

import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  //destructuring states from the authSotre , zustand
  const {authUser, checkAuth, isCheckingAuth , onlineUsers} = useAuthStore();

  //checking if the user is authenticated or not once imm. after the user visits the site or refresh
  useEffect(()=>{
    checkAuth()
  } , [checkAuth])

  // console.log(onlineUsers)

  // a loader untill the i check authenticated or not and till i have user data in authUser
  if(isCheckingAuth && !authUser){
    return(
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }


  return (
    <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login"/>}></Route>
          <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/"/>}></Route>
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/"/>}></Route>
          <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login"/>}></Route>
        </Routes>

        <Toaster/>
    </div>
  );
};

export default App;
