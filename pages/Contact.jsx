import React, { useEffect, useState } from 'react';
const contact = 'https://res.cloudinary.com/dhzqi5gqy/image/upload/v1707921676/safernet/Contact_ty7bk2.png';
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [isDisabled, setIsDisebled] = useState(true)
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className='contact'>
      <div className='hidden relative bg-gradient-to-r from-transparent to-gray-700 md:flex'>
        <div className='absolute h-full bg-gradient-to-r from-transparent via-slate-800 to-gray-900 w-full left-0 top-0'></div>
        <div className="flex-1"><img src="images/contact.png" alt="" /></div>
        <div className='flex-1 bg-white flex justify-center items-center text-white'>
          <p className="text-6xl  z-20">Contact us</p>
        </div>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 py-6 px-6 md:gap-20 gap-10 md:px-28'>
        {/* <img src={contact} className='w-fit hidden md:flex' alt="contact-image" /> */}
        <div className='my-auto px-10'>
          <p className="text-4xl font-bold text-primary capitalize">Reach out to us today</p>
          <div className='flex my-10 flex-col gap-5'>
            <div className="flex gap-5">
              <FaLocationDot className='my-auto text-2xl' />
              <p className='my-auto'>14, station Road, City of Refuge, Ilorin, kwara state. Nigeria.</p>
            </div>
            <div className="flex gap-5">
              <FaClock className='my-auto text-2xl' />
              <p className='my-auto'>9.00am - 5.00pm</p>
            </div>
            <Link to='tel:+234 706 877 5529' className="flex gap-5">
              <MdLocalPhone className='my-auto text-2xl' />
              <p className='my-auto'>+234 706 877 5529</p>
            </Link>
            <Link to='mailto: admin@techsocietal.org' className="flex gap-5">
              <MdEmail className='my-auto text-2xl' />
              <p className='my-auto'>admin@thesafernet.org</p>
            </Link>
          </div>
          <p className="text-gray-500">or fill our contact form below.</p>
        </div>
        <div className="bg-secondary px-6 md:px-12 flex gap-10 flex-col items-center justify-center md:py-12 py-6">
          <p className="font-bold text-4xl text-center">Contact Form</p>
          <p className="text-gray-500 text-sm text-center">Our friendly team would love to hear from you.</p>
          <form className='capitalize flex flex-col gap-5 md:w-full' onSubmit={e => e.preventDefault()}>
            <div className='md:flex gap-5'>
              <div>
                <label htmlFor="fname">first name</label>
                <input value={fname} onChange={e => setFname(e.target.value)} type="text" id='fname' placeholder='enter your first name' />
              </div>
              <div>
                <label htmlFor="lname">last name</label>
                <input value={lname} onChange={e => setLname(e.target.value)} type="text" id='lname' placeholder='enter your last name' />
              </div>
            </div>
            <div>
              <label htmlFor="email">email address</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" id='email' placeholder='example@youremail.com' />
            </div>
            <div>
              <label htmlFor="phone">phone number</label>
              <input value={phone} onChange={e => setPhone(e.target.value)} type="number" id='phone' placeholder='+234+++++++++++' />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" placeholder='Leave us a message...'></textarea>
            </div>
            <button disabled={isDisabled} className={`w-full py-3 text-white ${isDisabled ? 'bg-gray-400' : 'bg-greener'}`}>send message</button>
          </form>
        </div>
      </div>
      <div className="bg-red">

      </div>
    </div>
  )
}

export default Contact