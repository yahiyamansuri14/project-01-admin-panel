import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import UserList from '../../components/user/UserList'
import ProductList from '../../components/product/ProductList'
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Person from '@mui/icons-material/Person'

const Home = () => {
  const [token, setToken] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken = await localStorage.getItem('token')
        if (accessToken == null || accessToken == undefined) {
          navigate('/')
        }
        setToken(token)
      } catch (e) { }
    }
    verifyToken()

  }, [])

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="home-widget-container">
          <div className='widget-card user-card' onClick={() => navigate('/user')}>
            <div className='widget-inner-div'>
              <PersonIcon />
              <span className='widget-text'>User</span>
            </div>
            
          </div>
          <div className='widget-card product-card' onClick={() => navigate('/product')}>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>Product</span>
            </div>
          </div>
          <div className='widget-card order-card' onClick={() => navigate('/order')}>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>Order</span>
            </div>
          </div>
          <div className='widget-card recharge-card' onClick={() => navigate('/recharge')}>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>Recharge</span>
            </div>
          </div>
          <div className='widget-card itr-card'>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>ITR</span>
            </div>
          </div>
          <div className='widget-card gst-card'>
          <div className='widget-inner-div' onClick={() => navigate('/gst')}>
              <InventoryIcon />
              <span className='widget-text'>GST</span>
            </div>
          </div>
          <div className='widget-card tds-card'>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>TDS</span>
            </div>
          </div>
          <div className='widget-card itr-card'>
          <div className='widget-inner-div'>
              <InventoryIcon />
              <span className='widget-text'>BDM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home