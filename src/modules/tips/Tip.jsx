import React from 'react'

export default function Tip({text, amount, color, img}) {
    return (
        <div className={` flex cursor-pointer flex-col justify-center items-center p-8 w-80 ${color}`}>
            <div className='flex w-full justify-between items-center'>
                <img className='w-7 h-auto' src={img} alt="" />
                <div className='text-4xl text-white font-semibold'>{amount}</div>
            </div>
            <div className=' pt-2 text-white font-semibold text-xl self-end'>{text}</div>
        </div>
    )
}
