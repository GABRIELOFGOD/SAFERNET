import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav'

const Dashboard = () => {
  return (
    <div>
        <p className="text-2xl font-bold text-center">Welcome Admin(for now)</p>
        <div className='flex'>
            <SideNav />
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard