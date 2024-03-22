import React from 'react'

export default function TableElem({bg}) {
    return (
        <div className={`flex p-3.5 px-5 ${bg} `}>
            <div className='flex-1 text-lg'>123123123</div>
            <div className='flex-1 text-lg'>Dalbaeb</div>
            <div className='flex-1 text-lg'>12.12.1212</div>
            <div className='flex-1 flex gap-2 items-center text-lg'>
                <span className='w-4 h-4 mt-1 rounded-full bg-yellow-500'></span>
                <span>in progres</span>
            </div>
        </div>
    )
}
