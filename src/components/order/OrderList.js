import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderList({orders}) {
    const [token, setToken] = useState()
    const [order_id, setOrderId] = useState()
    const [name, setName] = useState()
    const [loginId, setLoginId] = useState()
    const [category, setCategory] = useState()
    // const [orders, setOrders] = useState()
    const navigate = useNavigate()
    useEffect( () => {
        async function verifyToken() {
          let accessToken = ''
          try {
            accessToken = await localStorage.getItem('token')
            console.log("token in useeffect", accessToken)
            if(accessToken == null || accessToken == undefined) {
              navigate('/')
            } else {
              setToken(accessToken)
              // console.log(orders)
            }
          } catch(e) { }
        }
        verifyToken()
        
      }, [])

      const handleFilter = () => {
        
      }
    
  return (
    <>
        <div className='container'>
        {/* <div className='row m-0 p-3'>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Id</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setOrderId(e.target.value) }}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Name</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setName(e.target.value) }}></input>
              </div>

              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Category</label>
                <select className='form-select' aria-label="--Select--" value={category} onChange={(e) => {setCategory(e.target.value)}}>
                        <option>--Select--</option>
                        <option value="gst-product">GST Product</option>
                        <option value="itr-product">ITR Product</option>
                        <option value="other-product">Other Product</option>
                    </select>
              </div>
              <div className='col-md-3 col-sm-12 mt-4'>
                < button className='submit-button'  onClick={handleFilter}>Search</button>
              </div>
            </div> */}
            <div className='row m-0 p-0'>
            <span className="fs-3 text-uppercase itr-heading-text">All Order List</span>
            </div>
            <div className='row m-0 p-0'>
          <table className='table table-bordered text-center'>
            <thead>
              <tr>
                <td className='fw-bolder'>login ID</td>
                <td className='fw-bolder'>Product_id</td>
                <td className='fw-bolder'>Price</td>
                <td className='fw-bolder'>Product Details</td>
                <td className='fw-bolder'>Remark</td>
                <td className='fw-bolder'>First Name</td>
                <td className='fw-bolder'>Middle Name</td>
                <td className='fw-bolder'>Last Name</td>
                <td className='fw-bolder'>Mobile</td>
                <td className='fw-bolder'>Email</td>
                <td className='fw-bolder'>Firm Name</td>
                <td className='fw-bolder'>Firm Address</td>
                <td className='fw-bolder'>File 1</td>
              </tr>
            </thead>
            <tbody>
              { orders.map(order => (
                <tr>
                  <td>{order.loginId}</td>
                  <td>{order.product_id}</td>
                  <td>{order.price}</td>
                  <td>{order.product_details}</td>
                  <td>{order.remark}</td>
                  <td>{order.firstName}</td>
                  <td>{order.middleName}</td>
                  <td>{order.lastName}</td>
                  <td>{order.mobile}</td>
                  <td>{order.email}</td>
                  <td>{order.firmName}</td>
                  <td>{order.firmAddress}</td>
                  <td>{order.dispatchNeed}</td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
        </div>
    </>
  )
}
