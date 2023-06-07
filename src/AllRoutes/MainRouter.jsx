import React from 'react'
import { FaRoute } from 'react-icons/fa'
import { Routes,Route} from "react-router-dom"
import { SignIn } from '../Component/SignIn'
import { Dashboard } from '../Component/Dashboard'

export const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<SignIn/>} path={"/"}/>
        <Route element={<Dashboard/>} path={"/dashboard"}/>

      </Routes>
    </div>
  )
}
