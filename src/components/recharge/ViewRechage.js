import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'


export default function ViewRecharge() {

  const navigate = useNavigate()
  const { state } = useLocation()
  const recharge = state.recharge
  const [reward_points, setRewardPoints] = useState()
  const [admin_remark, setRemark] = useState()
  const [token, setToken] = useState()

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
    let id = recharge._id
    let loginId = recharge.loginId
    let balance = recharge.amount
    let data = {reward_points, admin_remark, id, loginId, balance}
    console.log(data)
    axios({
      method:"POST",
      url:"http://3.108.219.92:3800/v1/user/recharge/update",
      headers: {
        "Authorization": `Bearer ${token}`
      }, 
      data: data
    }).then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }
  

  const handleDenyRecharge = () => {

  }
  //recharge/update
  //loginId, amount, reward_points, id

  return (
    <>
    
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className='container'>
            <div className='row m-0 p-0 border'>
              <span className="fs-3 text-uppercase itr-heading-text">Recharge Information</span>
            </div>
            <div className='row m-0 p-0'>

            </div>

            <div className='row m-0 p-0'>
              <fieldset className='border box-style'>
                <legend className='float-none fw-bold '>Recharge Information</legend>

                <div className='row m-0 p-0'>
                  <div className='col-md-5 col-sm-12'>
                    <table className='table text-center'>
                      <tr>
                        <th className='table-border table-box'>login ID</th>
                        <td className='table-border table-box'>{recharge.loginId ? recharge.loginId : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Recharge Id</th>
                        <td className='table-border table-box'>{recharge.recharge_id ? recharge.recharge_id : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Recharge Amount</th>
                        <td className='table-border table-box'>{recharge.amount ? recharge.amount : 0}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Bank Account</th>
                        <td className='table-border table-box'>{recharge.bank_account ? recharge.bank_account : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Cheque Number</th>
                        <td className='table-border table-box'>{recharge.cheque_no ? recharge.cheque_no : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Payment Mode</th>
                        <td className='table-border table-box'>{recharge.payment_mode ? recharge.payment_mode : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Narration</th>
                        <td className='table-border table-box'>{recharge.narration ? recharge.narration : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Receipt</th>
                        <td className='table-border table-box'>
                          <a href={recharge.receipt ? recharge.receipt : null} target="_blank">See Receipt</a>
                        </td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Date</th>
                        <td className='table-border table-box'>{recharge.createdAt ? recharge.createdAt : null}</td>
                      </tr>
                      <tr>
                        <th className='table-border table-box'>Is Completed</th>
                        <td className='table-border table-box'>{recharge.is_completed != undefined ? recharge.is_completed.toString() : null}</td>
                      </tr>
                    </table>
                  </div>
                  <div className='col-md-7 col-sm-12'>
                    <div className='row m-0 p-0'>
                    <div className='col-md-4'>
                      <label for="first-name" className='form-label'>Reward Points</label>
                      <input type="number" className="form-control" id='first-name' onChange={(e) => { setRewardPoints(e.target.value)}} disabled={recharge.is_completed}></input>
                    </div>
                    <div className='col-md-4'>
                      <label for="first-name" className='form-label'>Remark</label>
                      <input type="text" className="form-control" id='first-name' onChange={(e) => { setRemark(e.target.value)}} disabled={recharge.is_completed}></input>
                    </div>
                    </div>
                    
                    <div className='row m-0 p-0'>
                      <div className='col-md-4 p-3'>
                        <button className='btn btn-primary' disabled={recharge.is_completed} onClick={handleRecharege}>Make Recharge</button><br></br>
                      </div>
                      <div className='col-md-4 p-3'>
                        <button className='btn btn-danger' disabled={recharge.is_completed} onClick={handleDenyRecharge}>Deny Recharge</button>
                      </div>
                    </div>

                  </div>
                </div>







              </fieldset>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
