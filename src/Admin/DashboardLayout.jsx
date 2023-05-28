import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
    <ul>
      <li><Link to="">Home</Link></li>
      <li><Link to="add-product">Add Product</Link></li>
    </ul>
      <Outlet/>
    </>
  )
}

export default DashboardLayout
