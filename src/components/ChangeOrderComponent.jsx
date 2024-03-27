import React from 'react'
import trash from '../assets/trash.svg'
import add from '../assets/add.svg'
import OrderInput from '../ui/OrderInput'
import OrderTextarea from '../ui/OrderTextarea'
import OrderTitle from '../ui/OrderTitle'
import CommonButton from '../ui/CommonButton'
import DropdownInput from './DropdownInput'

export default function ChangeOrderComponent() {
    return (
        <>
            <div className='flex flex-wrap pt-10 gap-10'>
                <div className='flex-1'>
                    <OrderTitle text='Order info' />
                    <div className='w-full flex flex-col gap-5 bg-white mt-5 p-4 sm:p-8'>
                        <OrderInput/>
                        <OrderInput />
                        <OrderTextarea />
                    </div>
                </div>
                <div className='flex-1'>
                    <OrderTitle text='User info' />
                    <div className='w-full flex flex-col gap-5 bg-white mt-5 p-4 sm:p-8'>
                        <OrderInput />
                        <OrderInput />
                        <OrderTextarea />
                    </div>
                </div>

            </div>
            <div className='pt-10'>
                <OrderTitle text='Details' />
                <div className='flex flex-col gap-5 bg-white mt-5 p-4 sm:p-6'>
                    <div className='flex gap-5 items-end text-xl'>
                        <div>1.</div>
                        <div>Detail forandroid ios ws super 12pro12</div>
                        <img className='w-6 h-auto cursor-pointer'  src={trash} alt="" />
                    </div>
                    <div className='flex gap-5 items-end text-xl'>
                        <div>1.</div>
                        <div>Detail forandroid ios ws super 12pro12</div>
                        <img className='w-6 h-auto cursor-pointer'  src={trash} alt="" />
                    </div>
                    <div className='flex gap-5 items-end text-xl'>
                        <div>1.</div>
                        <div>Detail forandroid ios ws super 12pro12</div>
                        <img className='w-6 h-auto cursor-pointer'  src={trash} alt="" />
                    </div>
                    <div className='flex flex-wrap gap-5'>
                        <DropdownInput />
                        <div>
                            <CommonButton img={add} text='Add' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
