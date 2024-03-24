import React from 'react'
import trash from '../assets/trash.svg'
import add from '../assets/add.svg'
import OrderInput from '../ui/OrderInput'
import OrderTextarea from '../ui/OrderTextarea'
import OrderTitle from '../ui/OrderTitle'
import BlackButton from '../ui/BlackButton'

export default function ChangeOrderComponent() {
    return (
        <>
            <div className='flex pt-10 gap-10'>
                <div className='flex-1'>
                    <OrderTitle text='Order info' />
                    <div className='w-full flex flex-col gap-5 bg-white mt-5 p-10'>
                        <OrderInput width='' />
                        <OrderInput width='' />
                        <OrderTextarea width='' />
                    </div>
                </div>
                <div className='flex-1'>
                    <OrderTitle text='User info' />
                    <div className='w-full flex flex-col gap-5 bg-white mt-5 p-10'>
                        <OrderInput width='' />
                        <OrderInput width='' />
                        <OrderTextarea width='' />
                    </div>
                </div>

            </div>
            <div className='pt-10'>
                <OrderTitle text='Details' />
                <div className='flex flex-col gap-5 bg-white mt-5 p-6'>
                    <div className='pt-5'>
                        <div className='flex bg-gray-200 p-3 px-5'>
                            <div className='flex-1 uppercase text-black text-lg font-semibold'>ID</div>
                            <div className='flex-1 uppercase text-black text-lg font-semibold'>name</div>
                            <div className='flex-1 uppercase text-black text-lg font-semibold'>last update</div>
                            <div className='flex-1 uppercase text-black text-lg font-semibold'>some else</div>
                        </div>
                        <div className='flex justify-between p-3.5 px-5 border border-gray-200'>
                            <input type="text" className=' flex-1 mr-10 border text-lg py-2 px-3 border-gray-300' />
                            <input type="text" className=' flex-1 mr-10 border text-lg py-2 px-3 border-gray-300' />
                            <input type="text" className=' flex-1 mr-10 border text-lg py-2 px-3 border-gray-300' />
                            <input type="text" className=' flex-1 mr-10 border text-lg py-2 px-3 border-gray-300' />
                        </div>
                    </div>
                    <BlackButton img={add} text='Add' />
                </div>
            </div>
        </>
    )
}
