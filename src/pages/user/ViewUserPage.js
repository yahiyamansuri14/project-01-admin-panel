import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import ViewUser from '../../components/user/ViewUser'

export default function ViewUserPage() {
  return (
    <>
    <div className="home">
       <Sidebar />
       <div className="homeContainer">
         <ViewUser />
       </div>
    </div>
 </>
  )
}
