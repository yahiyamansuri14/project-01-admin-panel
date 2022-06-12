import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function RechargeList({rechargeList}) {

  const navigate = useNavigate()

  return (
    <>
    {console.log(rechargeList)}
    <div className='container'>
        <div className='row m-0 p-0 border'>
        <span className="fs-3 text-uppercase itr-heading-text">ALl Recharge</span>
        </div>
        <div className='row m-0 p-0'>
          <table className='table table-bordered text-center'>
            <thead>
              <tr>
              <td className='fw-bolder'>Recharge ID</td>
                <td className='fw-bolder'>Login ID</td>
                <td className='fw-bolder'>Date</td>
                <td className='fw-bolder'>Amount</td>
                <td className='fw-bolder'>Payment Mode</td>
                <td className='fw-bolder'>Cheque No</td>
                <td className='fw-bolder'>Bank Account No</td>
                <td className='fw-bolder'>Narration</td>
                <td className='fw-bolder'>IS_COMPLETED</td>
                <td className='fw-bolder'>Recharge</td>
              </tr>
            </thead>
            <tbody>
              {rechargeList.map(recharge => (
                  <tr>
                      <td>{recharge.recharge_id}</td>
                      <td>{recharge.loginId}</td>
                      <td>{recharge.date}</td>
                      <td>{recharge.amount}</td>
                      <td>{recharge.payment_mode}</td>
                      <td>{recharge.cheque_no}</td>
                      <td>{recharge.bank_account}</td>
                      <td>{recharge.narration}</td>
                      <td >{recharge.is_completed.toString()}</td>
                      <td>
                        <button 
                          className='btn btn-primary' 
                          onClick={() => navigate(`/recharge/view/${recharge._id  } `, {state:{recharge}})}
                        >View</button>
                      </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
</>
  )
}
