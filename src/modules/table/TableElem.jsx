import React from 'react'
import { Link } from 'react-router-dom'

export default function TableElem({bg}) {
    return (
        <Link to='/order' className={`flex gap-1 p-3.5 px-5 ${bg} `}>
            <div className='flex-1 text-lg hidden sm:block'>123123123</div>
            <div className='flex-1 text-lg'>Dalbaeb</div>
            <div className='flex-1 text-lg text-center sm:text-left'>12.12.1212</div>
            <div className='flex-1 flex gap-2 justify-end sm:justify-normal items-center text-lg'>
                <span className='w-4 h-4 mt-1 hidden sm:block rounded-full bg-yellow-500'></span>
                <span className=''>in progres</span>
            </div>
        </Link>
    )
}
