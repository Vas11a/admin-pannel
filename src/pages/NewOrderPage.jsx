import React from 'react'
import NewOrderModule from '../modules/newOrderModule/NewOrderModule'

export default function NewOrderPage() {
    return (
        <>
            <div className=' flex justify-between'>
                <div className=' text-3.5xl'>New order</div>
            </div>
            <NewOrderModule/>
        </>
    )
}
