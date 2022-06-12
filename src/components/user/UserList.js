import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserList() {

  const navigate = useNavigate()

  const userList = [
    {'id':'1', 'name':'yahiya', 'loginId':'TA2134','type':'Branch'},
    {'id':'2', 'name':'yahiya', 'loginId':'TA2134','type':'Staff'},
    {'id':'3', 'name':'yahiya', 'loginId':'TA2134','type':'BDM'},
    {'id':'4', 'name':'yahiya', 'loginId':'TA2134','type':'Branch'},
    {'id':'5', 'name':'yahiya', 'loginId':'TA2134','type':'Staff'},
    {'id':'6', 'name':'yahiya', 'loginId':'TA2134','type':'BDM'},
    {'id':'7', 'name':'yahiya', 'loginId':'TA2134','type':'Branch'},
    {'id':'8', 'name':'yahiya', 'loginId':'TA2134','type':'Staff'},
    {'id':'9', 'name':'yahiya', 'loginId':'TA2134','type':'BDM'},
    {'id':'10', 'name':'yahiya', 'loginId':'TA2134','type':'Branch'},

  ]

  return (
    <>
        <div className='container'>
            <div className='row m-0 p-0 border'>
                <span className="fs-3 text-uppercase">User List</span>
            </div>
            <div className='row m-0 p-0'>
                <table className='table border'>
                    <thead>
                      <tr>
                        <th className='text-dark'>S.No.</th>
                        <th className='text-dark'>Name</th>
                        <th className='text-dark'>Login Id</th>
                        <th className='text-dark'>Role</th>
                        {/* <th className='text-info cursor-pointer fw-bold'>Edit</th> */}
                        <th className='text-primary cursor-pointer'>View</th>
                        <th className='text-danger cursor-pointer'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userList.map(user =>  (
                        <tr>
                          <td >{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.loginId}</td>
                          <td>{user.type}</td>
                          {/* <td className='text-info cursor-pointer fw-bold' onClick={() => navigate('/user/view')}>Edit</td> */}
                          <td className='text-primary cursor-pointer fw-bold' onClick={() => navigate('/user/view')}>View</td>
                          <td className='text-danger cursor-pointer fw-bold '>Delete</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}
