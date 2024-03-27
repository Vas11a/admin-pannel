import React from 'react'
import './menu.css'
import adminIcon from '../../assets/admin-icon.svg'
import db from '../../assets/db.svg'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuOpen } from '../../store/slices/globalSlice'

export default function Menu() {
  const {isMenuOpen} = useSelector((state) => state.global)
  const dispatch = useDispatch()
  return (
    <div className={`menu_wrapper absolute h-full ${isMenuOpen ? 'block' : 'hidden'} lg:block opacity-95 lg:h-auto lg:opacity-100 lg:static`}>
        <div className='pt-5 px-4 pb-7'>
          <div className="text-3xl text-white font-semibold ">ADMIN</div>
          <Link to='/new-order' onClick={() => dispatch(setIsMenuOpen())} className="menu_btn">New order</Link>
        </div>
        
        <div className="">
          <div  className='menu_elem_cont'>
            <img className='w-7 h-auto' src={adminIcon} alt="" />
            <Link to={"/"} onClick={() => dispatch(setIsMenuOpen())} className='menu_elem'>Dashboard</Link>
          </div>
          <div  className='menu_elem_cont'>
            <img className='w-7 h-auto' src={db} alt="" />
            <Link to={"/parts"} onClick={() => dispatch(setIsMenuOpen())} className='menu_elem'>Parts DB</Link>
          </div>
        </div>
      </div>
  )
}
