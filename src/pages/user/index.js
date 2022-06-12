import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import AddUser from '../../components/user/AddUser'
import '../home/home.scss'
import {useNavigate} from 'react-router-dom'

export default function UserPage() {

  const navigate = useNavigate()
  useEffect( () => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken = await localStorage.getItem('token')
        if(accessToken == null || accessToken == undefined) {
          navigate('/')
        }
      } catch(e) { }
    }
    verifyToken()
    
  }, [])

  return (
    <>
       <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <AddUser />
          </div>
       </div>
    </>
  )
}
