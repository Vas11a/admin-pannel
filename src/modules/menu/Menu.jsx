import React from 'react'
import './menu.css'
import adminIcon from '../../assets/admin-icon.svg'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menu_wrapper">
        <div className='pt-5 px-4 pb-7'>
          <div className="text-3xl text-white font-semibold ">ADMIN</div>
          <Link to='/new-order' className="menu_btn">New order</Link>
        </div>
        
        <div className="">
          <div  className='menu_elem_cont'>
            <img className='w-7 h-auto' src={adminIcon} alt="" />
            <Link to={"/"} className='menu_elem'>Dashboard</Link>
          </div>
        </div>
      </div>
  )
}
