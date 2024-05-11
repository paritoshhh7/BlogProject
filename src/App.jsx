import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import './App.css'
import { Footer, Header } from './components'
import { Outlet , useParams} from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authService.getCurrentUser()
  //   .then((userData) => {
  //     if(userData) {
  //       dispatch(login({userData}));
  //     }
  //   })
  //   .finally(() => setLoading(false))
  // }, [])

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
      <div className="w-full flex flex-wrap content-between bg-[#3D3C3A]"> 
        <div className="w-full block">
          <Header />
          <main>
          <Outlet /> 
          </main>
          <Footer />
        </div>
      </div> ) :  null
}

export default App
