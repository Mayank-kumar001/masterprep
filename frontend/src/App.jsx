


import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Toaster } from "react-hot-toast"
import VerifyPage from './pages/VerifyPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import OAuthCallbackPage from './pages/OAuthCallbackPage'
import AddProblemPage from './pages/AddProblemPage'
import CodeExecutionPage from './pages/CodeExecutionPage'
import AllProblemPage from './pages/AllProblemPage'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import PlaylistPage from './pages/PlaylistPage'
import PlaylistProblemPage from './pages/PlaylistProblemPage'
import PaidPlaylistDescriptionPage from './pages/PaidPlaylistDescriptionPage'
import RazorPayCallbackPage from './pages/RazorPayCallbackPage'
import CallStackPage from './pages/CallStackPage'
import Navbar from './components/Navbar'
import { useMotionValueEvent, useScroll } from 'motion/react'
import ProfilePage from './pages/ProfilePage'

function App() {
  
  return (

  <div className='min-h-screen w-[100vw] m-auto flex flex-col justify-center items-center bg-neutral-950'>
    
      <div><Toaster/></div>
      

      <Routes>
      <Route element={<LandingPage />} path='/'></Route>
      <Route element={<HomePage />} path='/home'></Route>
      <Route element={<LoginPage />} path='/login'></Route>
      <Route element={<SignupPage />} path='/signup'></Route>
      <Route element={<VerifyPage />} path='/verify'></Route>
      <Route element={<ForgotPasswordPage />} path='/forgot-password'></Route>
      <Route element={<ResetPasswordPage />} path='/reset-password'></Route>
      <Route element={<OAuthCallbackPage />} path='/oauth'></Route>
      <Route element={<AddProblemPage />} path='/add-problem'></Route>
      <Route element={<CodeExecutionPage />} path='/code-execute/:problemId'></Route>
      <Route element={<CreatePlaylistPage />} path='/create-playlist'></Route>
      <Route element={<AllProblemPage />} path='/allProblem'></Route>
      <Route element={<PlaylistPage />} path='/playlist'></Route>
      <Route element={<PlaylistProblemPage />} path='/playlist/:playlistId'></Route>
      <Route element={<PaidPlaylistDescriptionPage />} path='/playlist/paid/:playlistId'></Route>
      <Route element={<RazorPayCallbackPage />} path='/razorpay'></Route>
      <Route element={<CallStackPage />} path='/callStack'></Route>
      <Route element={<ProfilePage />} path='/profile'></Route>
      
    </Routes>
    </div>
  )
}

export default App
























