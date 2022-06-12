import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/home.scss'
import AddProduct from '../../components/product/AddProduct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductList from '../../components/product/ProductList'
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';


export default function TdsPage() {
  const [token, setToken] = useState()
  
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

    }
    verifyToken()
    
  }, [])

  return (
    <>
    <div className="home">
     <Sidebar />
     <div className="homeContainer">
       <div className='home-widget-container'>
       <div className='widget-card user-card' onClick={() => navigate('/tds/all')}>
            <div className='widget-inner-div'>
              <PersonIcon />
              <span className='widget-text'>All TDS Clients </span>
            </div>
            
          </div>
          {/* <div className='widget-card product-card' onClick={() => navigate('/tds/model/viewall')}>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>All TDS Order</span>
            </div>
          </div> */}
       </div>
     </div>
 </div>
 </>
  )
}
