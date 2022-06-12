import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {

  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)
  const handleLogout = async () => {
    try {
      await localStorage.removeItem('token')
      await localStorage.removeItem('admin')
      navigate('/')
    } catch(e) { }
  }

  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Mandoriya</span>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className="title">MAIN MENU</p>
            <li onClick={() => { navigate('/home');}}>
              <DashboardIcon className='icon' />
              <span className='color-black'>Dashboard</span>
            </li>
            {/* <p className="title">LISTS MENU</p> */}
            <li onClick={() => navigate('/user')}>
              <GroupIcon className='icon'/>
              <span className='color-black' >Users</span>
            </li>
            <li onClick={() => navigate('/product')}>
              <Inventory2Icon className='icon' />
              <span className='color-black'>Products</span>
            </li>
            <li onClick={() => navigate('/order')}>
              <ProductionQuantityLimitsIcon className='icon' />
              <span className='color-black'>Orders</span>
            </li>
            {/* <li>
              <LocalShippingIcon className='icon' />
              <span>Delivery</span>
            </li> */}
             {/* <p className="title">OTHER MENU</p> */}
            <li onClick={() => navigate('/recharge')}>
              <QueryStatsIcon className='icon' />
              <span className='color-black'>Recharge</span>
            </li>
            <li>
              <NotificationsIcon className='icon' />
              <span className='color-black'>ITR</span>
            </li> 
            {/* <p className="title">SERVICES</p> */}
            <li onClick={() => navigate('/gst')}>
              <HealthAndSafetyIcon className='icon' />
              <span className='color-black'>GST</span>
            </li>
            <li onClick={() => navigate('/tds')}>
              <PsychologyIcon className='icon' />
              <span className='color-black'>TDS</span>
            </li>
            <li>
              <SettingsIcon className='icon' />
              <span className='color-black'>BDM</span>
            </li>
            <p className="title">ACCOUNT</p>
            <li>
              <PersonIcon className='icon' />
              <span className='color-black'>Profile</span>
            </li>
            <li onClick={handleLogout}>
              <ExitToAppIcon className='icon' />
              <span className='color-black'>Logout</span>
            </li>
          </ul>
        </div>
        {/* <div className='bottom'>
          <div className='colorOptions'></div>
          <div className='colorOptions'></div>
        </div> */}
    </div>
  )
}

export default Sidebar