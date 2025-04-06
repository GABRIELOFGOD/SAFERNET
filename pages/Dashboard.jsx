import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/SideNav'
import { ContextUser } from '../utils/Context'
import toast, { Toaster } from 'react-hot-toast'

const Dashboard = () => {
  const {adminGetter, username} = ContextUser();

  useEffect(() => {
    adminGetter();
  }, []);

  return (
    <div>
        <p className="text-2xl font-bold text-center">Welcome {username}</p>
        <div className='flex'>
            <Toaster />
            <SideNav />
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard