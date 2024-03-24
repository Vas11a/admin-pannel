import React from 'react'

export default function OrderInput({ width }) {
    return (
        <div className=' flex flex-col gap-1 '>
            <label htmlFor="6" className=' text-lg'>Field6</label>
            <input className={`bg-gray-200 ${width} rounded-md text-xl px-5 py-2.5`} placeholder='field3' type="text" id='6' />
        </div>
    )
}
