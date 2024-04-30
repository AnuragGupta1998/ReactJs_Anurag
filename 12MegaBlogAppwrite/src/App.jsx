import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { conf } from './conf/conf.js'
import authService from './appwrite/auth.js'
import { login, logout } from './store/authSlice.js'
import { Header, Footer } from './components/index.js'
import {Outlet} from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    try {
      authService.getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          }
          else {
            dispatch(logout());
          }
        })
        .catch((error) => {
          console.log("useEffect :: authService.getCurrentUser :: error", error);
        })
        .finally(() => {
          setLoading(false);
        })
    }
    catch (error) {
      console.log("error in authServic getCurrentUser method call", error);

    }

  }, [])




  return !loading ?
    (
      <div className='bg-gray-500 min-h-screen flex content-between flex-wrap'>

        <div className='w-full block bg-green-400 border-red-500 border '>

          <Header />

          <main>
          TODOS :  <Outlet />
          </main>

          <Footer />

        </div>

      </div>
    ) : null
}

export default App
