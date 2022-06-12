import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

export default function AllTdsModels() {
  const [token, setToken] = useState()
  const [tds_list, setTdsList] = useState([])
//   const [category, setCategory] = useState()
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
    //   console.log(token)
      axios({
        method: "GET",
        url: "http://3.108.219.92:3800/v1/user/tdsmodel/getall/admin",
        data: {},
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }).then(data => {
          // console.log(data)
          // console.log(data.data)
          setTdsList(data.data)
        // console.log(data.data.data)
        // setProducts(data.data.data)
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

  return (
    <>
      <div className='home'>
          
        <Sidebar />
        <div className='homeContainer'>
          <div className='container'>
            {/* <div className='row m-2 p-3 box-style'>
              <div className='col-md-4 col-sm-12'>
                <label for="first-name" className='form-label'>Enter Category</label>
                <input type="text" className="form-control" id='first-name' onChange={(e) => { setCategory(e.target.value) }}></input>
              </div>
              <div className='col-md-4 col-sm-12'>
                < button className='submit-button' style={{'margin-top':'25px'}} >Search</button>
              </div>
            </div> */}
            <div className='row m-2 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">All TDS Clients</span>
            </div>
            <div className='row m-2 p-0'>
              <table className='table table-bordered text-center'>
                <thead>
                  <tr>
                    <td className='fw-bolder'>Login ID</td>
                    <td className='fw-bolder'>TDS Client Code</td>
                    <td className='fw-bolder'>TAN No</td>
                    <td className='fw-bolder'>Department Name</td>
                    <td className='fw-bolder'>Trace Username</td>
                    <td className='fw-bolder'>Trace Password</td>
                    <td className='fw-bolder'>Status</td>
                    <td className='fw-bolder'>Year</td>
                    <td className='fw-bolder color-blue cursor-pointer'>View</td>
                  </tr>
                </thead>
                <tbody>
                  {tds_list.map(tds => (
                    <tr>
                      <td>{tds.loginId ? tds.loginId : null}</td>
                      <td className='fw-bolder'>{tds.tds_client_code ? tds.tds_client_code : null}</td>
                      <td className='fw-bolder'>{tds.tan_no ? tds.tan_no : null}</td>
                      <td className='fw-bolder'>{tds.department_name ? tds.department_name : null}</td>
                      <td className='fw-bolder'>{tds.trace_user_name ? tds.trace_user_name : null}</td>
                      <td className='fw-bolder'>{tds.trace_password ? tds.trace_password : null}</td>
                      <td className='fw-bolder'>{tds.status ? tds.status : null}</td>
                      <td className='fw-bolder'>{tds.financial_year ? tds.financial_year : null}</td>
                      {/* <td className='fw-bolder'>{tds.status ? tds.status : null}</td> */}
                      <td className='fw-bolder color-blue cursor-pointer' onClick={() => navigate(`/tds/model/view/${tds._id  } `, {state:{ tds}})}>Edit</td>
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
