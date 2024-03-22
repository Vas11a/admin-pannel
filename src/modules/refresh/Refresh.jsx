import React from 'react'
import refresh from '../../assets/refresh.svg'

export default function Refresh() {
    return (
        <div className=' flex justify-between'>
            <div className=' text-3.5xl'>Dahsboard</div>
            <img className='w-9 h-auto cursor-pointer' src={refresh} alt="" />
        </div>
    )
}
