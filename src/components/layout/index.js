import React from 'react'
import Sidebar from '../sidebar/Sidebar'

export default function Layout({children}) {
  return (
    <>
        <div>
          {children}
        </div>
    </>
  )
}
