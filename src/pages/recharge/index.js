import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/home.scss'
import AddProduct from '../../components/product/AddProduct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductList from '../../components/product/ProductList'
import RechargeList from '../../components/recharge/RechargeList'
export default function RechargePage() {
  const [token, setToken] = useState()
  const [recharge, setRechargeList] = useState([])
  const navigate = useNavigate()
  useEffect( () => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken =  localStorage.getItem('token')
        accessToken = JSON.parse(accessToken)
        if(accessToken === null || accessToken === undefined) {
          navigate('/')
        } else {
          setToken(accessToken)
        }
      } catch(e) { console.log("Error in token", e) }
      axios({
        method:"GET",
        url:"http://3.108.219.92:3800/v1/user/allreacharge/admin",
        data: {},
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }).then(data => {
        console.log(data.data)
        setRechargeList(data.data)
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
       <RechargeList rechargeList={recharge}/>
     </div>
 </div>
 </>
  )
}
