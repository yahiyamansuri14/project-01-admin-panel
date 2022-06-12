import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import '../home/home.scss'
import AddProduct from '../../components/product/AddProduct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductList from '../../components/product/ProductList'
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';


export default function ProductPage() {
  const [token, setToken] = useState()
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  useEffect( () => {
    console.log("product page rendered")
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
      console.log(token)
      axios({
        method:"GET",
        url:"http://3.108.219.92:3800/v1/user/allproduct",
        data: {},
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }).then(data => {
        // console.log(data.data.data)
        setProducts(data.data.data)
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
       <div className='home-widget-container'>
       <div className='widget-card user-card' onClick={() => navigate('/product/add')}>
            <div className='widget-inner-div'>
              <PersonIcon />
              <span className='widget-text'>Add Product</span>
            </div>
            
          </div>
          <div className='widget-card product-card' onClick={() => navigate('/product/viewall')}>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>View All Product</span>
            </div>
          </div>
       </div>
     </div>
 </div>
 </>
  )
}
