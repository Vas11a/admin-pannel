import React from 'react'
import menu from '../assets/menu.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setIsMenuOpen } from '../store/slices/globalSlice'

export default function MenuBurg() {
    const dispatch = useDispatch()

    const {isMenuOpen} = useSelector((state) => state.global)
  return (
    <div className={`cursor-pointer ${isMenuOpen ? ' ml-48' : ''}`} onClick={() => dispatch(setIsMenuOpen())}>
      <img className='w-10 h-auto lg:hidden' src={menu} alt="" />
    </div>
  )
}
