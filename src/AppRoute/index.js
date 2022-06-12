import Home from '../pages/home/Home'
import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import UserPage from '../pages/user'
import ProductPage from '../pages/product'
import ViewUser from '../components/user/ViewUser'
import ViewUserPage from '../pages/user/ViewUserPage'
import Login from '../components/auth/login'
import Orderpage from '../pages/order'
import RechargePage from '../pages/recharge'
import ViewRecharge from '../components/recharge/ViewRechage'
import AddProduct from '../components/product/AddProduct'
import ProductList from '../components/product/ProductList'
import EditProduct from '../components/product/EditProduct'
import GstPage from '../pages/gst'
import AllGst from '../components/gst/AllGst'
import ViewGstRegistration from '../components/gst/ViewGstRegistration'
import AllGstReturn from '../components/gst/AllGstReturn'
import ViewGstReturn from '../components/gst/ViewGstReturn'
import TdsPage from '../pages/tds'
import AllTds from '../components/tds/AllTdsClients'
import ViewTdsClient from '../components/tds/ViewTdsClient'
import AllTdsModels from '../components/tds/AllTdsModels'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/gst" element={<GstPage />} />
        <Route path="/tds" element={<TdsPage />} />
        <Route path="/gst/all" element={<AllGst />} />
        <Route path="/user/view" element={<ViewUserPage />} />
        <Route path="/order" element={<Orderpage />} />
        <Route path="/recharge" element={<RechargePage />} />
        <Route path="/recharge/view/:id" element={<ViewRecharge />} />
        <Route path="/gst/view/:id" element={<ViewGstRegistration />} />
        <Route path="/gstreturn/view/:id" element={<ViewGstReturn /> } />
        <Route path="/gstreturn/all" element={<AllGstReturn />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/viewall" element={<ProductList />} />
        <Route path="/product/update/:id" element={<EditProduct />} />
        <Route path="/tds/client/view/:id" element={<ViewTdsClient />} />
        <Route path="/tds/all" element={<AllTds />} />
        <Route path="/tds/model/viewall" element={<AllTdsModels /> } />
    </Routes>
  )
}
