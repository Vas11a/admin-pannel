import React from 'react'
import threedot from '../assets/threedot.svg'

export default function OrderTitle({text}) {
    return (
        <div className='flex items-center gap-3'>
            <img className=' w-7 h-auto mt-0.5' src={threedot} alt="" />
            <div className=' text-2xl '>{text}</div>
        </div>
    )
}
