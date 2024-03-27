import React from 'react'
import './order.css'
import save from '../../assets/save.svg'
import ChangeOrderComponent from '../../components/ChangeOrderComponent'
import CommonButton from '../../ui/CommonButton'

export default function NewOrderModule() {
    return (
        <div>
            <ChangeOrderComponent/>
            <div className=' flex justify-center pt-5'>
                <CommonButton img={save} color={'bg-green-500'} text='Save order'/>
            </div>
        </div>
    )
}
