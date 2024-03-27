import React from 'react'
import backArr from '../../assets/backArr.svg'
import { Link } from 'react-router-dom'
import OrderTableComponent from '../../components/OrderTableComponent'
import update from '../../assets/update.svg'
import CommonButton from '../../ui/CommonButton'
import print from '../../assets/print.svg'

export default function OrderModule() {
    return (
        <>
            <div className='flex items-center justify-between gap-5'>
                <div className='text-3xl'>Order N1212</div>
                <Link to='/' className=' bg-white w-fit flex py-2 px-3 items-center gap-3'>
                    <img src={backArr} className='w-5 h-auto' alt="" />
                    <div className='text-xl'>Back</div>
                </Link>
            </div>
            <div className='bg-white'>
                <OrderTableComponent />
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                    <div className='p-5 flex flex-col gap-5'>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 w-fit text-lg rounded-md  block p-1.5">
                            <option >In progress</option>
                            <option >Done</option>
                            <option >Dont started</option>
                            <option >Finding details</option>
                        </select>
                        <CommonButton img={update} text='Change order' />
                    </div>
                    <div className='p-5 flex flex-col sm:items-end gap-5'>
                        <input type="text" className='input rounded-md' placeholder='total price' />
                        <CommonButton img={print} text='Print' color={'bg-green-500'} />
                    </div>
                </div>
            </div>
        </>
    )
}
