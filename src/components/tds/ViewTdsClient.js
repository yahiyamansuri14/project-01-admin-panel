import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'


export default function ViewTdsClient() {

  const navigate = useNavigate()
  const { state } = useLocation()
  
  const [token, setToken] = useState()
  const [bdm_email, setBdmEmail] = useState()
  const tds = state.tds
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
      // axios({
      //   method:"GET",
      //   url:"http://3.108.219.92:3800/v1/user/allreacharge/admin",
      //   data: {},
      //   headers: {
      //     "Authorization": `Bearer ${accessToken}`
      //   }
      // }).then(data => {
      //   console.log(data.data)
      //   setRechargeList(data.data)
      // }).catch(error => {
      //   console.log(error)
      // })
    }
    verifyToken()
    
  }, [])


  const handleRecharege = () => {

  }
  

  const handleDenyRecharge = () => {

  }
  const handleSubmit = () => {
    
  }
  //recharge/update
  //loginId, amount, reward_points, id

  return (
    <>
    {console.log(tds)}
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className='container'>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">TDS Client Information</span>
            </div>
            <div className='row m-0 p-0'>

            </div>

            <div className='row m-0 p-0'>
              <fieldset className='border box-style'>
                <legend className='float-none fw-bold '>TDS Client Information</legend>

                <div className='row m-0 p-0'>
                  <div className='col-md-5 col-sm-12'>
                    <table className='table text-center'>
                      <tr>
                        <th className='table-border table-box'>login ID</th>
                        <td className='table-border table-box'>{tds.loginId ? tds.loginId : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>TDS Client Code</th>
                        <td className='table-border table-box'>{tds.tds_client_code ? tds.tds_client_code : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>TAN No</th>
                        <td className='table-border table-box'>{tds.tan_no ? tds.tan_no : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Department Name</th>
                        <td className='table-border table-box'>{tds.department_name ? tds.department_name : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Mobile</th>
                        <td className='table-border table-box'>{tds.mobile ? tds.mobile : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Email</th>
                        <td className='table-border table-box'>{tds.email ? tds.email : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Address</th>
                        <td className='table-border table-box'>{tds.address ? tds.address : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Financial Year</th>
                        <td className='table-border table-box'>{tds.financial_year ? tds.financial_year : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>login ID</th>
                        <td className='table-border table-box'>{tds.loginId ? tds.loginId : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>login ID</th>
                        <td className='table-border table-box'>{tds.loginId ? tds.loginId : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Return For</th>
                        <td className='table-border table-box'>{tds.return_for ? tds.return_for : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Return Type</th>
                        <td className='table-border table-box'>{tds.return_type ? tds.return_type : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>login ID</th>
                        <td className='table-border table-box'>{tds.loginId ? tds.loginId : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Trace User Name</th>
                        <td className='table-border table-box'>{tds.trace_user_name ? tds.trace_user_name : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Trace Password</th>
                        <td className='table-border table-box'>{tds.trace_password ? tds.trace_password : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Status</th>
                        <td className='table-border table-box'>{tds.status ? tds.status : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Product name</th>
                        <td className='table-border table-box'>{tds.tds_product_name ? tds.tds_product_name : null}</td>
                      </tr>
                    </table>
                  </div>

                  <div className='col-md-7 col-sm-12'>
                    <div className='row m-0 p-0'>
                    <div className='col-md-6'>
                      <label for="first-name" className='form-label'>Assign To BDM</label>
                      <input type="email" className="form-control" id='first-name' placeholder='enter bdm email' onChange={(e) => setBdmEmail(e.target.value)}></input>
                    </div>
                    <div className='col-md-4 mt-4'>
                      <button className='btn btn-primary' onClick={handleSubmit}>Assign</button>
                    </div>
                    </div>

                  </div>
                    {/* <div className='row m-0 p-0'>
                    <div className='col-md-4'>
                      <label for="first-name" className='form-label'>Reward Points</label>
                      <input type="number" className="form-control" id='first-name' onChange={(e) => { setRewardPoints(e.target.value)}} disabled={recharge.is_completed}></input>
                    </div>
                    <div className='col-md-4'>
                      <label for="first-name" className='form-label'>Remark</label>
                      <input type="text" className="form-control" id='first-name' onChange={(e) => { setRemark(e.target.value)}} disabled={recharge.is_completed}></input>
                    </div>
                    </div> */}
{/*                     
                    <div className='row m-0 p-0'>
                      <div className='col-md-4 p-3'>
                      <label for="first-name" className='form-label'>Assig</label>
                      <input type="number" className="form-control" id='first-name'></input>
                      </div>
                      <div className='col-md-4 p-3'>
                        <button className='btn btn-danger' >Deny Recharge</button>
                      </div>
                    </div> */}

                  
                </div>







              </fieldset>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
