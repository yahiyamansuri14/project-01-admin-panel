import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'



export default function AllGst() {
  const [token, setToken] = useState()
  const [gst_list, setGstList] = useState([])
  const [id, setId] = useState()
  const [gst_no, setGstNo] = useState()
  const [client_id, setClientId] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    async function verifyToken() {
      let accessToken = ''
      try {
        accessToken = localStorage.getItem('token')
        accessToken = JSON.parse(accessToken)
        if (accessToken === null || accessToken === undefined) {
          navigate('/')
        } else {
          setToken(accessToken)
        }
      } catch (e) { console.log("Error in token", e) }
      axios({
        method: "GET",
        url: "http://3.108.219.92:3800/v1/user/gst/getall",
        data: {},
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }).then(data => {
        console.log(data.data)
        setGstList(data.data)
      }).catch(error => {
        console.log(error)
      })
    }
    verifyToken()

  }, [])

  //   const getAllProducts = () => {
  //     axios({
  //       method: "GET",
  //       url: "http://3.108.219.92:3800/v1/user/allproduct",
  //       data: {},
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     }).then(data => {
  //       // console.log(data.data.data)
  //       setProducts(data.data.data)
  //     }).catch(error => {
  //       console.log(error)
  //     })
  //   }

  //   const handleSubmit = () => {
  //     let data = {category}
  //     axios({
  //       method:"POST",
  //       url:"http://3.108.219.92:3800/v1/user/products/bycategory",
  //       headers:{
  //         "Authorization": `Bearer ${token}`
  //       },
  //       data: data
  //     }).then(data => {
  //       if(data.status == 200) {
  //         if(data.data.length > 0)
  //           setProducts(data.data)
  //         else {
  //           getAllProducts()
  //         }
  //       } else {
  //         console.log("Some error while searching")
  //       }
  //     }).catch(error => {
  //       console.log(error)
  //     })
  //   }

  const handleFilter = () => {
    let gst_list_temp = gst_list
    let gst_temp_list;
    try {
      gst_temp_list = gst_list.filter(gst => {
        if (gst.gst_file_info.loginId == id || gst.gst_file_info.gst_no == gst_no || gst.business_info.gst_client_id == client_id) {
          return gst
        }
      })
    } catch (e) {
      console.log(e)
    }

    console.log('filtered gst is', gst_temp_list)
    if (gst_temp_list.length > 0) {
      setGstList(gst_temp_list)
    } else {
      setGstList(gst_list_temp)
    }
  }

  return (
    <>
      <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <div className='container'>
            <div className='row m-0 p-3 box-style'>
              <div className='col-md-3 col-sm-12 '>
                <label for="first-name" className='form-label'>Enter Login Id</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setId(e.target.value) }}></input>
              </div>
              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Gst No</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setGstNo(e.target.value) }}></input>
              </div>

              <div className='col-md-3 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Client Id</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setClientId(e.target.value) }}></input>
              </div>

            </div>
            <div className='row mt-0 p-3 '>
              <div className='col-md-4 col-xl-4 col-sm-4 '>
                < button className='submit-button' onClick={handleFilter}>Search</button>
              </div>
              <div className='col-md-4 col-xl-4 col-sm-4'></div>
              < button className='submit-button' onClick={() => { window.location.reload(false) }}>Refresh</button>
            </div>
            <div className='row m-2 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">All Gst Registration</span>
            </div>
            <div className='row m-2 p-0'>
              <table className='table table-bordered text-center'>
                <thead>
                  <tr>
                    <td className='fw-bolder'>Login ID</td>
                    <td className='fw-bolder'>GST No</td>
                    <td className='fw-bolder'>Client ID</td>
                    <td className='fw-bolder'>GST Username</td>
                    <td className='fw-bolder'>GST Password</td>
                    <td className='fw-bolder'>Business Name</td>
                    <td className='fw-bolder'>Business Nature</td>
                    <td className='fw-bolder'>View</td>
                  </tr>
                </thead>
                <tbody>
                  {gst_list.map(gst => (
                    <tr>
                      <td>{gst.gst_file_info.loginId != undefined ? gst.gst_file_info.loginId : null}</td>
                      <td>{gst.gst_file_info.gst_ack_no != undefined ? gst.gst_file_info.gst_ack_no : null}</td>
                      <td>{gst.business_info.gst_client_id != undefined ? gst.business_info.gst_client_id : null}</td>
                      <td>{gst.gst_file_info.gst_portal_username != undefined ? gst.gst_file_info.gst_portal_username : null}</td>
                      <td>{gst.gst_file_info.gst_portal_password != undefined ? gst.gst_file_info.gst_portal_password : null}</td>
                      <td>{gst.business_info.business_name != undefined ? gst.business_info.business_name : null}</td>
                      <td>{gst.business_info.business_nature != undefined ? gst.business_info.business_nature : null}</td>
                      <td className='fw-bolder color-blue cursor-pointer' onClick={() => navigate(`/gst/view/${gst._id} `, { state: { gst } })}>Edit</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
