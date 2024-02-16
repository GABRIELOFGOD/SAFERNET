import React, { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { ContextUser } from '../utils/Context';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { adminLogin, username, adminGetter } = ContextUser();

    // useEffect(() => {
    //     adminGetter();
    // }, [username])

    if(username){
        
        toast.success('You are logged in already', {
            position: 'top-right',
            className: 'text-[12px]',
            duration: '500'
        })
        location.assign('/dashboard/blog')
    }

  return (
    <div className='h-[100vh] w-[100vw] bg-primary flex items-center justify-center'>
        <form onSubmit={e => adminLogin(e, email, password)} className='bg-white px-12 py-12 rounded-md flex flex-col gap-5'>
            <div className='relative h-fit'>
                <MdEmail className='text-primary absolute text-2xl top-2 left-2' />
                <input value={email} onChange={e => setEmail(e.target.value)} className='outline-none border border-primary rounded-sm px-10 py-2 text-sm text-primary font-semibold' type="text" placeholder='Email address' />
            </div>
            <div className='relative h-fit'>
                <CiLock className='text-primary absolute text-2xl top-2 left-2' />
                <input value={password} onChange={e => setPassword(e.target.value)} className='outline-none border border-primary rounded-sm px-10 py-2 text-sm text-primary font-semibold' type="password" placeholder='Password' />
            </div>
            <button className='text-white hover:bg-opacity-90 duration-200 bg-primary w-full py-3 rounded-sm text-sm'>Login</button>
        </form>
        <Toaster />
    </div>
  )
}

export default Login;