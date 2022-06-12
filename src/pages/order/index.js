import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OrderList from '../../components/order/OrderList'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/home.scss'

export default function Orderpage() {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const [orders, setOrders] = useState([])
  useEffect(  () => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken =  localStorage.getItem('token')
        accessToken = JSON.parse(accessToken)
        console.log("token in useeffect", accessToken)
        if(accessToken == null || accessToken == undefined) {
          navigate('/')
        } else {
          setToken(accessToken)
        }
      } catch(e) { }
      axios({
          method:"GET",
          url:"http://3.108.219.92:3800/v1/user/allorder",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
      }).then(data => {
          // console.log(data.data.data)
          setOrders(data.data.data)
      }).catch(error => {
          console.log(error)
      })
    }
    verifyToken()
    
  }, [])

  return (
    <>
    <div className="home">
     <Sidebar />
     <div className="homeContainer">
       <OrderList orders={orders}/>
     </div>
 </div>
 </>
  )
}
