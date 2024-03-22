import React from 'react'
import find from '../../assets/find.svg'
import './findorder.css'

export default function FindOrder() {
    return (
        <>
            <div className=' text-3.5xl pt-10'>Orders</div>
            <div className='flex gap-2 pt-5'>
                <div className='findBtn'>
                    <img src={find} className='w-6 h-auto' alt="" />
                </div>
                <input type="text" placeholder='Search' className='input' />
            </div>
        </>
    )
}
